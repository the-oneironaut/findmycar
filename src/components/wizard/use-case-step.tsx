"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const USE_CASES = [
  { id: "city", label: "City Commute", icon: "🏙️", description: "Daily drives, traffic, parking ease" },
  { id: "highway", label: "Highway Cruiser", icon: "🛣️", description: "Long drives, stability at speed" },
  { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦", description: "Space, comfort, safety for everyone" },
  { id: "offroad", label: "Off-Road & Adventure", icon: "⛰️", description: "Rough terrain, 4x4, ground clearance" },
  { id: "first-car", label: "First Car", icon: "🔑", description: "Easy to drive, affordable to maintain" },
  { id: "luxury", label: "Luxury", icon: "✨", description: "Premium feel, features, brand value" },
  { id: "performance", label: "Performance", icon: "🏎️", description: "Power, handling, driving thrill" },
] as const;

interface UseCaseStepProps {
  defaultValue?: string[];
  onNext: (useCases: string[]) => void;
  onBack: () => void;
}

export function UseCaseStep({ defaultValue = [], onNext, onBack }: UseCaseStepProps) {
  const [selected, setSelected] = useState<string[]>(defaultValue);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">How will you use this car?</h2>
        <p className="text-muted-foreground mt-2">Pick all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {USE_CASES.map((uc) => {
          const isSelected = selected.includes(uc.id);
          return (
            <button
              key={uc.id}
              onClick={() => toggle(uc.id)}
              className={`relative flex flex-col items-start gap-1 rounded-xl border-2 p-4 text-left transition-all hover:border-primary/50 ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20"
                  : "border-muted bg-background"
              }`}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  ✓
                </span>
              )}
              <span className="text-2xl">{uc.icon}</span>
              <span className={`font-semibold text-sm ${isSelected ? "text-primary" : ""}`}>{uc.label}</span>
              <span className="text-xs text-muted-foreground">{uc.description}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" size="lg" onClick={onBack}>
          ← Back
        </Button>
        <Button size="lg" disabled={selected.length === 0} onClick={() => onNext(selected)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
