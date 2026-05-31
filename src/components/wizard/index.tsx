"use client";

import { useState } from "react";
import { BudgetStep } from "./budget-step";
import { UseCaseStep } from "./use-case-step";

export type WizardData = {
  budget: [number, number];
  useCases: string[];
};

export function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<WizardData>>({});

  return (
    <div className="w-full">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === step
                ? "w-8 bg-primary"
                : i < step
                  ? "w-8 bg-primary/40"
                  : "w-8 bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Steps */}
      {step === 0 && (
        <BudgetStep
          defaultValue={data.budget}
          onNext={(range) => {
            const next = { ...data, budget: range };
            console.log("[Wizard] Step 1 complete:", next);
            setData(next);
            setStep(1);
          }}
        />
      )}

      {step === 1 && (
        <UseCaseStep
          defaultValue={data.useCases}
          onNext={(useCases) => {
            const next = { ...data, useCases };
            console.log("[Wizard] Step 2 complete:", next);
            setData(next);
            setStep(2);
          }}
          onBack={() => setStep(0)}
        />
      )}
    </div>
  );
}
