import { createEnvelope, EmailAdapter, LogAdapter, WebhookAdapter } from "./adapters";
import { evaluateRules } from "./evaluator";
import {
  AlertDeliveryResult,
  AlertEngineRunResult,
  AlertEvaluationContext,
  AlertRule,
} from "./types";

export type AlertEngineOptions = {
  webhookEndpoint?: string;
  senderEmail?: string;
};

export async function runAlertEngine({
  rules,
  context,
  options,
}: {
  rules: AlertRule[];
  context: AlertEvaluationContext;
  options?: AlertEngineOptions;
}): Promise<AlertEngineRunResult> {
  const triggers = evaluateRules({ rules, context });

  const logAdapter = new LogAdapter();
  const webhookAdapter = new WebhookAdapter(options?.webhookEndpoint ?? "");
  const emailAdapter = new EmailAdapter(options?.senderEmail ?? "");

  const deliveries: AlertDeliveryResult[] = [];

  for (const trigger of triggers) {
    const logEnvelope = createEnvelope({
      trigger,
      context,
      channel: "log",
    });
    deliveries.push(await logAdapter.send(logEnvelope));

    const webhookEnvelope = createEnvelope({
      trigger,
      context,
      channel: "webhook",
    });
    deliveries.push(await webhookAdapter.send(webhookEnvelope));

    const emailEnvelope = createEnvelope({
      trigger,
      context,
      channel: "email",
    });
    deliveries.push(await emailAdapter.send(emailEnvelope));
  }

  return {
    context,
    triggers,
    deliveries,
  };
}

export function makeEngineContext({
  benchmarkValue,
  sourceName,
  isDelayed,
  isFallback,
}: {
  benchmarkValue: number;
  sourceName: string;
  isDelayed: boolean;
  isFallback: boolean;
}): AlertEvaluationContext {
  return {
    runId: crypto.randomUUID(),
    observedAt: new Date().toISOString(),
    benchmarkValue,
    sourceName,
    isDelayed,
    isFallback,
  };
}
