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

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Your Top Picks</h2>
        <p className="text-muted-foreground mt-2">
          Based on your preferences, here are the best matches
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`relative rounded-xl border-2 p-5 transition-all ${
              index === 0
                ? "border-primary bg-primary/5 shadow-md"
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
              <span className="rounded-full bg-muted px-2 py-1">
                {car.fuelType}
              </span>
              <span className="rounded-full bg-muted px-2 py-1">
                {car.mileageKmpl} km/l
              </span>
              <span className="rounded-full bg-muted px-2 py-1">
                {car.horsepower} hp
              </span>
              <span className="rounded-full bg-muted px-2 py-1">
                Safety: {car.safetyRating}/5
              </span>
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
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <Button variant="ghost" size="lg" onClick={onBack}>
          ← Adjust preferences
        </Button>
      </div>
    </div>
  );
}
