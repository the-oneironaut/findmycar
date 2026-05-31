"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const PRIORITIES = [
  { id: "safety", label: "Safety", icon: "🛡️", description: "Crash ratings, airbags, ADAS" },
  { id: "mileage", label: "Mileage", icon: "⛽", description: "Fuel efficiency, low running cost" },
  { id: "performance", label: "Performance", icon: "⚡", description: "Power, acceleration, handling" },
  { id: "comfort", label: "Comfort", icon: "🛋️", description: "Ride quality, cabin space, features" },
  { id: "resale", label: "Resale Value", icon: "📈", description: "Holds value well over time" },
] as const;

interface PriorityStepProps {
  defaultValue?: string[];
  onNext: (priorities: string[]) => void;
  onBack: (priorities: string[]) => void;
}

export function PriorityStep({ defaultValue = [], onNext, onBack }: PriorityStepProps) {
  const [selected, setSelected] = useState<string[]>(defaultValue);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return prev;
      return [...prev, id];
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">What matters most?</h2>
        <p className="text-muted-foreground mt-2">
          Pick exactly <span className="font-semibold text-foreground">2</span> priorities
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {PRIORITIES.map((p) => {
          const isSelected = selected.includes(p.id);
          const isDisabled = !isSelected && selected.length >= 2;
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              disabled={isDisabled}
              className={`relative flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20"
                  : isDisabled
                    ? "border-muted bg-muted/30 opacity-50 cursor-not-allowed"
                    : "border-muted bg-background hover:border-primary/50"
              }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  ✓
                </span>
              )}
              <span className="text-3xl">{p.icon}</span>
              <div>
                <span className={`font-semibold ${isSelected ? "text-primary" : ""}`}>{p.label}</span>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" size="lg" onClick={() => onBack(selected)}>
          ← Back
        </Button>
        <Button size="lg" disabled={selected.length !== 2} onClick={() => onNext(selected)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
