"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getRecommendations, type ScoredCar } from "@/app/actions/recommend";

interface ResultsStepProps {
  data: {
    budget: [number, number];
    useCases: string[];
    priorities: string[];
    fuel: string;
  };
  onBack: () => void;
}

export function ResultsStep({ data, onBack }: ResultsStepProps) {
  const [cars, setCars] = useState<ScoredCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [compareIds, setCompareIds] = useState<number[]>([]);

  const toggleCompare = (id: number) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return prev;
      return [...prev, id];
    });
  };

  useEffect(() => {
    setLoading(true);
    getRecommendations(data).then((results) => {
      setCars(results);
      setLoading(false);
    });
  }, [data]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-muted-foreground">Finding your perfect cars...</p>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <span className="text-4xl">😔</span>
        <h2 className="text-xl font-bold">No cars found</h2>
        <p className="text-muted-foreground">
          Try adjusting your budget or preferences.
        </p>
        <Button onClick={onBack}>← Go back</Button>
      </div>
    );
  }

  const compareCars = compareIds.map((id) => cars.find((c) => c.id === id)!).filter(Boolean);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Your Top Picks</h2>
        <p className="text-muted-foreground mt-2">
          Select 2 cars to compare them side-by-side
        </p>
      </div>

      <div className="flex gap-6">
        {/* Left: Car list */}
        <div className={`flex flex-col gap-4 transition-all ${compareIds.length === 2 ? "w-1/2" : "w-full"}`}>
          {cars.map((car, index) => (
            <div
              key={car.id}
              className={`relative rounded-xl border-2 p-5 transition-all ${
                compareIds.includes(car.id)
                  ? "border-primary bg-primary/5 shadow-md"
                  : index === 0
                    ? "border-primary/50 bg-primary/[0.02]"
                    : "border-muted"
              }`}
            >
              {/* Rank badge */}
              <div
                className={`absolute -top-3 -left-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted-foreground/20 text-foreground"
                }`}
              >
                #{index + 1}
              </div>

              {/* Car header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-sm text-muted-foreground">{car.variant}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">
                    ₹{car.priceLakh}L
                  </span>
                  <p className="text-xs text-muted-foreground">ex-showroom</p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-muted px-2 py-1">{car.fuelType}</span>
                <span className="rounded-full bg-muted px-2 py-1">{car.mileageKmpl} km/l</span>
                <span className="rounded-full bg-muted px-2 py-1">{car.horsepower} hp</span>
                <span className="rounded-full bg-muted px-2 py-1">Safety: {car.safetyRating}/5</span>
              </div>

              {/* Why this fits you */}
              <div className="mt-3 border-t pt-3">
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  Why this fits you
                </p>
                <ul className="space-y-1 text-sm text-foreground">
                  {car.reasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Score bar */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${Math.min((car.score / 80) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground w-16 text-right">
                  {Math.round((car.score / 80) * 100)}% match
                </span>
              </div>

              {/* Compare toggle */}
              <button
                onClick={() => toggleCompare(car.id)}
                disabled={!compareIds.includes(car.id) && compareIds.length >= 2}
                className={`mt-3 w-full rounded-lg border py-2 text-xs font-medium transition-all ${
                  compareIds.includes(car.id)
                    ? "border-primary bg-primary/10 text-primary"
                    : compareIds.length >= 2
                      ? "border-muted text-muted-foreground opacity-50 cursor-not-allowed"
                      : "border-muted text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {compareIds.includes(car.id) ? "✓ Added to compare" : "+ Add to compare"}
              </button>
            </div>
          ))}
        </div>

        {/* Right: Comparison panel */}
        {compareIds.length === 2 && compareCars.length === 2 && (
          <div className="w-1/2 sticky top-4 self-start">
            <ComparePanel carA={compareCars[0]} carB={compareCars[1]} onClear={() => setCompareIds([])} />
          </div>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <Button variant="ghost" size="lg" onClick={onBack}>
          ← Adjust preferences
        </Button>
      </div>
    </div>
  );
}

// --- Compare Panel ---

const COMPARE_ROWS: { label: string; format: (car: ScoredCar) => string }[] = [
  { label: "Price", format: (c) => `₹${c.priceLakh}L` },
  { label: "Body Type", format: (c) => c.bodyType },
  { label: "Fuel", format: (c) => c.fuelType },
  { label: "Mileage", format: (c) => `${c.mileageKmpl} km/l` },
  { label: "Power", format: (c) => `${c.horsepower} hp` },
  { label: "Safety", format: (c) => `${c.safetyRating}/5` },
  { label: "Comfort", format: (c) => `${c.comfortScore}/10` },
  { label: "Resale Value", format: (c) => `${c.resaleValueScore}/10` },
  { label: "User Rating", format: (c) => `${c.reviewScore}/5` },
  { label: "Match", format: (c) => `${Math.round((c.score / 80) * 100)}%` },
];

function ComparePanel({
  carA,
  carB,
  onClear,
}: {
  carA: ScoredCar;
  carB: ScoredCar;
  onClear: () => void;
}) {
  return (
    <div className="rounded-xl border-2 border-primary/30 bg-white dark:bg-zinc-900 p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold">Comparison</h3>
        <Button variant="ghost" size="sm" onClick={onClear} className="text-xs h-7">
          Clear
        </Button>
      </div>

      {/* Car names header */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div />
        <div className="text-center">
          <p className="font-bold text-xs leading-tight">{carA.make} {carA.model}</p>
          <p className="text-[10px] text-muted-foreground truncate">{carA.variant}</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-xs leading-tight">{carB.make} {carB.model}</p>
          <p className="text-[10px] text-muted-foreground truncate">{carB.variant}</p>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {COMPARE_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-3 gap-2 items-center py-2 px-1 text-xs ${
              i % 2 === 0 ? "bg-muted/30 rounded" : ""
            }`}
          >
            <span className="font-medium text-muted-foreground">{row.label}</span>
            <span className="font-semibold text-center">{row.format(carA)}</span>
            <span className="font-semibold text-center">{row.format(carB)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
