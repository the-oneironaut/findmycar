"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const BUDGET_MARKS = [
  { value: 5, label: "5L" },
  { value: 15, label: "15L" },
  { value: 25, label: "25L" },
  { value: 50, label: "50L" },
  { value: 75, label: "75L+" },
];

interface BudgetStepProps {
  defaultValue?: [number, number];
  onNext: (range: [number, number]) => void;
}

export function BudgetStep({ defaultValue = [8, 20], onNext }: BudgetStepProps) {
  const [range, setRange] = useState<[number, number]>(defaultValue);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">What&apos;s your budget?</h2>
        <p className="text-muted-foreground mt-2">
          Select your price range (ex-showroom)
        </p>
      </div>

      <div className="px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl font-bold text-primary">
            ₹{range[0]}L
          </span>
          <span className="text-muted-foreground text-lg">—</span>
          <span className="text-3xl font-bold text-primary">
            ₹{range[1]}L{range[1] >= 75 ? "+" : ""}
          </span>
        </div>

        <Slider
          min={3}
          max={75}
          step={1}
          value={range}
          onValueChange={(val) => {
            const arr = Array.isArray(val) ? val : [val];
            setRange([arr[0], arr[1]]);
          }}
        />

        <div className="relative mt-4 h-5 text-xs text-muted-foreground">
          {BUDGET_MARKS.map((mark) => (
            <span
              key={mark.value}
              className="absolute -translate-x-1/2"
              style={{ left: `${((mark.value - 3) / (75 - 3)) * 100}%` }}
            >
              {mark.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button size="lg" onClick={() => onNext(range)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
