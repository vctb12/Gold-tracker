import {
  AlertEvaluationContext,
  AlertRule,
  AlertTrigger,
} from "./types";

export function evaluateRules({
  rules,
  context,
}: {
  rules: AlertRule[];
  context: AlertEvaluationContext;
}): AlertTrigger[] {
  const activeRules = rules.filter((rule) => rule.active);

  return activeRules
    .map((rule) => evaluateSingleRule(rule, context))
    .filter((trigger): trigger is AlertTrigger => trigger !== null);
}

function evaluateSingleRule(
  rule: AlertRule,
  context: AlertEvaluationContext
): AlertTrigger | null {
  const hit =
    rule.comparator === "above"
      ? context.benchmarkValue >= rule.threshold
      : context.benchmarkValue <= rule.threshold;

  if (!hit) return null;

  const directionReason =
    rule.comparator === "above"
      ? `benchmark ${formatNumber(context.benchmarkValue)} crossed above ${formatNumber(rule.threshold)}`
      : `benchmark ${formatNumber(context.benchmarkValue)} crossed below ${formatNumber(rule.threshold)}`;

  const trustSuffix = [
    context.isDelayed ? "data-state=DELAYED" : null,
    context.isFallback ? "data-state=FALLBACK" : null,
  ]
    .filter(Boolean)
    .join(", ");

  const reason = trustSuffix
    ? `${directionReason} (${trustSuffix})`
    : directionReason;

  return {
    ruleId: rule.id,
    ruleLabel: rule.label,
    comparator: rule.comparator,
    threshold: rule.threshold,
    benchmarkValue: context.benchmarkValue,
    observedAt: context.observedAt,
    reason,
  };
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
