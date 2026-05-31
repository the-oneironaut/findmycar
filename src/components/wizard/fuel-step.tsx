"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const FUEL_OPTIONS = [
  { id: "petrol", label: "Petrol", icon: "⛽" },
  { id: "diesel", label: "Diesel", icon: "🛢️" },
  { id: "electric", label: "Electric", icon: "🔋" },
  { id: "hybrid", label: "Hybrid", icon: "🌿" },
  { id: "no-preference", label: "No Preference", icon: "🤷" },
] as const;

interface FuelStepProps {
  defaultValue?: string;
  onNext: (fuel: string) => void;
  onBack: (fuel?: string) => void;
}

export function FuelStep({ defaultValue, onNext, onBack }: FuelStepProps) {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Fuel preference?</h2>
        <p className="text-muted-foreground mt-2">Pick one</p>
      </div>

      <div className="flex flex-col gap-3">
        {FUEL_OPTIONS.map((f) => {
          const isSelected = selected === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelected(f.id)}
              className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all hover:border-primary/50 ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20"
                  : "border-muted bg-background"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                  isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                }`}
              >
                {isSelected && (
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                )}
              </span>
              <span className="text-2xl">{f.icon}</span>
              <span className={`font-semibold ${isSelected ? "text-primary" : ""}`}>
                {f.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" size="lg" onClick={() => onBack(selected)}>
          ← Back
        </Button>
        <Button size="lg" disabled={!selected} onClick={() => selected && onNext(selected)}>
          Show Results →
        </Button>
      </div>
    </div>
  );
}
