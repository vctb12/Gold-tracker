"use client";

import { useEffect, useMemo, useState } from "react";
import { PipelineStatus } from "./PipelineStatus";
import { makeEngineContext, runAlertEngine } from "@/lib/alerts/engine";
import { AlertEngineRunResult, AlertRule, TriggerEvent } from "@/lib/alerts/types";

const RULES_KEY = "goldtracker.alert.rules";
const EVENTS_KEY = "goldtracker.alert.events";

function readStoredRules(): AlertRule[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RULES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function readStoredEvents(): TriggerEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function AlertWorkbench({
  referenceSpot,
  sourceName,
  isDelayed,
  isFallback,
}: {
  referenceSpot: number;
  sourceName: string;
  isDelayed: boolean;
  isFallback: boolean;
}) {
  const [label, setLabel] = useState("My benchmark alert");
  const [comparator, setComparator] = useState<"above" | "below">("above");
  const [threshold, setThreshold] = useState(referenceSpot.toFixed(2));
  const [rules, setRules] = useState<AlertRule[]>(readStoredRules);
  const [events, setEvents] = useState<TriggerEvent[]>(readStoredEvents);
  const [runResult, setRunResult] = useState<AlertEngineRunResult | null>(null);

  const storageReady = typeof window !== "undefined";

  useEffect(() => {
    if (!storageReady) return;
    localStorage.setItem(RULES_KEY, JSON.stringify(rules));
  }, [rules, storageReady]);

  useEffect(() => {
    if (!storageReady) return;
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }, [events, storageReady]);

  useEffect(() => {
    const context = makeEngineContext({
      benchmarkValue: referenceSpot,
      sourceName,
      isDelayed,
      isFallback,
    });

    void runAlertEngine({
      rules,
      context,
      options: {
        webhookEndpoint: "",
        senderEmail: "",
      },
    }).then(setRunResult);
  }, [rules, referenceSpot, sourceName, isDelayed, isFallback]);

  const rulePreview = useMemo(() => {
    return rules.map((rule) => {
      const triggeredNow =
        rule.comparator === "above"
          ? referenceSpot >= rule.threshold
          : referenceSpot <= rule.threshold;

      return {
        ...rule,
        state: triggeredNow ? "TRIGGERED" : "ARMED",
      };
    });
  }, [referenceSpot, rules]);

  function addRule() {
    const parsedThreshold = Number(threshold);
    if (!label.trim() || Number.isNaN(parsedThreshold) || parsedThreshold <= 0) {
      return;
    }

    const id = crypto.randomUUID();
    const newRule: AlertRule = {
      id,
      label: label.trim(),
      comparator,
      threshold: parsedThreshold,
      createdAt: new Date().toISOString(),
      active: true,
      cooldownMinutes: 10,
      metadata: {
        mode: "preview",
      },
    };

    const hitNow =
      comparator === "above"
        ? referenceSpot >= parsedThreshold
        : referenceSpot <= parsedThreshold;

    setRules((prev) => [newRule, ...prev]);

    if (hitNow) {
      const event: TriggerEvent = {
        id: crypto.randomUUID(),
        ruleId: id,
        occurredAt: new Date().toISOString(),
        referenceValue: referenceSpot,
      };
      setEvents((prev) => [event, ...prev].slice(0, 50));
    }
  }

  function toggleRule(id: string) {
    setRules((prev) =>
      prev.map((rule) => (rule.id === id ? { ...rule, active: !rule.active } : rule))
    );
  }

  function removeRule(id: string) {
    setRules((prev) => prev.filter((rule) => rule.id !== id));
    setEvents((prev) => prev.filter((event) => event.ruleId !== id));
  }

  return (
    <section className="space-y-6">
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Create local benchmark rule</h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Local-only preview mode: rules are saved in this browser only. No email/push delivery is configured.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <label className="text-xs text-[var(--color-text-muted)]">
            Rule label
            <input
              className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </label>

          <label className="text-xs text-[var(--color-text-muted)]">
            Condition
            <select
              className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
              value={comparator}
              onChange={(e) => setComparator(e.target.value as "above" | "below")}
            >
              <option value="above">Reference above threshold</option>
              <option value="below">Reference below threshold</option>
            </select>
          </label>

          <label className="text-xs text-[var(--color-text-muted)]">
            Threshold (USD/oz)
            <input
              className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
              inputMode="decimal"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
            />
          </label>

          <div className="flex items-end">
            <button
              type="button"
              onClick={addRule}
              className="w-full rounded-lg bg-[var(--color-accent)] px-3 py-2 text-sm font-semibold text-black"
            >
              Save rule
            </button>
          </div>
        </div>
      </section>

      <PipelineStatus result={runResult} />

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Active rules</h2>
        {rulePreview.length ? (
          <div className="mt-3 space-y-3">
            {rulePreview.map((rule) => (
              <article
                key={rule.id}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium text-[var(--color-text)]">{rule.label}</p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                      rule.state === "TRIGGERED"
                        ? "border-rose-400/40 text-rose-300"
                        : "border-emerald-400/40 text-emerald-300"
                    }`}
                  >
                    {rule.state}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Trigger when benchmark is {rule.comparator} ${rule.threshold.toFixed(2)}
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => toggleRule(rule.id)}
                    className="rounded-md border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-text-muted)]"
                  >
                    {rule.active ? "Pause" : "Resume"}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeRule(rule.id)}
                    className="rounded-md border border-rose-500/30 px-2 py-1 text-xs text-rose-300"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            No rules yet. Create one to start local monitoring.
          </p>
        )}
      </section>

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Recent trigger events</h2>
        {events.length ? (
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
            {events.slice(0, 10).map((event) => (
              <li key={event.id} className="rounded-md border border-[var(--color-border)] px-3 py-2">
                {new Date(event.occurredAt).toLocaleString()} — benchmark at ${event.referenceValue.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            No trigger events recorded in this browser session yet.
          </p>
        )}
      </section>

      {!storageReady ? (
        <p className="text-xs text-amber-300">
          Local storage is unavailable in this environment. Rule persistence may not work.
        </p>
      ) : null}
    </section>
  );
}
