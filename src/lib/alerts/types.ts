export type AlertComparator = "above" | "below";

export type AlertRule = {
  id: string;
  label: string;
  comparator: AlertComparator;
  threshold: number;
  active: boolean;
  createdAt: string;
  cooldownMinutes?: number;
  metadata?: Record<string, string>;
};

export type AlertEvaluationContext = {
  runId: string;
  observedAt: string;
  benchmarkValue: number;
  sourceName: string;
  isDelayed: boolean;
  isFallback: boolean;
};

export type AlertTrigger = {
  ruleId: string;
  ruleLabel: string;
  comparator: AlertComparator;
  threshold: number;
  benchmarkValue: number;
  observedAt: string;
  reason: string;
};


export type TriggerEvent = {
  id: string;
  ruleId: string;
  occurredAt: string;
  referenceValue: number;
};

export type AlertDeliveryChannel = "log" | "webhook" | "email";

export type AlertDeliveryEnvelope = {
  id: string;
  channel: AlertDeliveryChannel;
  createdAt: string;
  trigger: AlertTrigger;
  context: AlertEvaluationContext;
};

export type AlertDeliveryResult = {
  ok: boolean;
  channel: AlertDeliveryChannel;
  message: string;
  envelopeId: string;
};

export type AlertEngineRunResult = {
  context: AlertEvaluationContext;
  triggers: AlertTrigger[];
  deliveries: AlertDeliveryResult[];
};
