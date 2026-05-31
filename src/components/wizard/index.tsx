"use client";

import { useState } from "react";
import { BudgetStep } from "./budget-step";
import { UseCaseStep } from "./use-case-step";
import { PriorityStep } from "./priority-step";
import { FuelStep } from "./fuel-step";
import { ResultsStep } from "./results-step";

export type WizardData = {
  budget: [number, number];
  useCases: string[];
  priorities: string[];
  fuel: string;
};

export function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<WizardData>>({});

  return (
    <div className="w-full">
      {/* Progress indicator */}
      {step < 4 && (
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
      )}

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
          onBack={(useCases) => {
            setData((prev) => ({ ...prev, useCases }));
            setStep(0);
          }}
        />
      )}

      {step === 2 && (
        <PriorityStep
          defaultValue={data.priorities}
          onNext={(priorities) => {
            const next = { ...data, priorities };
            console.log("[Wizard] Step 3 complete:", next);
            setData(next);
            setStep(3);
          }}
          onBack={(priorities) => {
            setData((prev) => ({ ...prev, priorities }));
            setStep(1);
          }}
        />
      )}

      {step === 3 && (
        <FuelStep
          defaultValue={data.fuel}
          onNext={(fuel) => {
            const next = { ...data, fuel };
            console.log("[Wizard] Step 4 complete:", next);
            setData(next);
            setStep(4);
          }}
          onBack={(fuel) => {
            setData((prev) => ({ ...prev, fuel }));
            setStep(2);
          }}
        />
      )}

      {step === 4 && data.budget && data.useCases && data.priorities && data.fuel && (
        <ResultsStep
          data={{
            budget: data.budget,
            useCases: data.useCases,
            priorities: data.priorities,
            fuel: data.fuel,
          }}
          onBack={() => setStep(3)}
        />
      )}
    </div>
  );
}
