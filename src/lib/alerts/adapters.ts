import {
  AlertDeliveryEnvelope,
  AlertDeliveryResult,
  AlertTrigger,
} from "./types";

export type AlertDeliveryAdapter = {
  channel: "log" | "webhook" | "email";
  send(envelope: AlertDeliveryEnvelope): Promise<AlertDeliveryResult>;
};

export class LogAdapter implements AlertDeliveryAdapter {
  channel = "log" as const;

  async send(envelope: AlertDeliveryEnvelope): Promise<AlertDeliveryResult> {
    console.info("[alert-log]", {
      envelopeId: envelope.id,
      ruleId: envelope.trigger.ruleId,
      benchmarkValue: envelope.trigger.benchmarkValue,
      observedAt: envelope.trigger.observedAt,
      reason: envelope.trigger.reason,
    });

    return {
      ok: true,
      channel: this.channel,
      message: "Logged locally (console)",
      envelopeId: envelope.id,
    };
  }
}

export class WebhookAdapter implements AlertDeliveryAdapter {
  channel = "webhook" as const;
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async send(envelope: AlertDeliveryEnvelope): Promise<AlertDeliveryResult> {
    if (!this.endpoint) {
      return {
        ok: false,
        channel: this.channel,
        message: "Webhook endpoint missing",
        envelopeId: envelope.id,
      };
    }

    try {
      // Scaffold only: this path is intentionally disabled in static mode.
      // Returning explicit non-delivered status avoids fake completion.
      return {
        ok: false,
        channel: this.channel,
        message: "Webhook adapter scaffolded; delivery disabled in static build",
        envelopeId: envelope.id,
      };
    } catch {
      return {
        ok: false,
        channel: this.channel,
        message: "Webhook adapter failed",
        envelopeId: envelope.id,
      };
    }
  }
}

export class EmailAdapter implements AlertDeliveryAdapter {
  channel = "email" as const;
  private fromAddress: string;

  constructor(fromAddress: string) {
    this.fromAddress = fromAddress;
  }

  async send(envelope: AlertDeliveryEnvelope): Promise<AlertDeliveryResult> {
    if (!this.fromAddress) {
      return {
        ok: false,
        channel: this.channel,
        message: "Email sender not configured",
        envelopeId: envelope.id,
      };
    }

    // Scaffold only for now.
    return {
      ok: false,
      channel: this.channel,
      message: "Email adapter scaffolded; delivery disabled in static build",
      envelopeId: envelope.id,
    };
  }
}

export function createEnvelope({
  trigger,
  context,
  channel,
}: {
  trigger: AlertTrigger;
  context: AlertDeliveryEnvelope["context"];
  channel: AlertDeliveryEnvelope["channel"];
}): AlertDeliveryEnvelope {
  return {
    id: crypto.randomUUID(),
    channel,
    createdAt: new Date().toISOString(),
    trigger,
    context,
  };
}
