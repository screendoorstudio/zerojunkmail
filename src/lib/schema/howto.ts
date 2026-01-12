export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g., "PT30M" for 30 minutes
  estimatedCost?: {
    currency: string;
    value: string;
  };
  steps: HowToStep[];
}

export function generateHowToSchema(options: HowToSchemaOptions) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name,
    description: options.description,
    step: options.steps.map((step, index) => {
      const stepSchema: Record<string, unknown> = {
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      };
      if (step.url) {
        stepSchema.url = step.url;
      }
      return stepSchema;
    }),
  };

  if (options.totalTime) {
    schema.totalTime = options.totalTime;
  }

  if (options.estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: options.estimatedCost.currency,
      value: options.estimatedCost.value,
    };
  }

  return schema;
}
