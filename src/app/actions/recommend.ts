"use server";

import { db } from "@/db";
import { cars } from "@/db/schema";
import { and, between, eq, sql } from "drizzle-orm";

const WEIGHTS = {
  safety: 15,
  mileage: 12,
  performance: 10,
  comfort: 10,
  resale: 8,
} as const;

// Max values for normalization (from our dataset)
const MAX_VALUES = {
  safety: 5,       // safety_rating 1-5
  mileage: 28,     // ~28 kmpl max
  performance: 530, // horsepower max
  comfort: 10,     // comfort_score 1-10
  resale: 10,      // resale_value_score 1-10
} as const;

type Priority = keyof typeof WEIGHTS;

export type ScoredCar = {
  id: number;
  make: string;
  model: string;
  variant: string;
  priceLakh: number;
  bodyType: string;
  fuelType: string;
  mileageKmpl: number;
  safetyRating: number;
  horsepower: number;
  useCaseTags: string[];
  comfortScore: number;
  resaleValueScore: number;
  reviewScore: number;
  imageUrl: string | null;
  score: number;
  reasons: string[];
};

export async function getRecommendations(input: {
  budget: [number, number];
  useCases: string[];
  priorities: string[];
  fuel: string;
}): Promise<ScoredCar[]> {
  const { budget, useCases, priorities, fuel } = input;

  // Query cars within budget range
  const conditions = [
    between(cars.priceLakh, budget[0], budget[1]),
  ];

  if (fuel !== "no-preference") {
    conditions.push(eq(cars.fuelType, fuel as typeof cars.fuelType.enumValues[number]));
  }

  const results = await db
    .select()
    .from(cars)
    .where(and(...conditions));

  // Score each car
  const scored: ScoredCar[] = results.map((car) => {
    let score = 0;
    const reasons: string[] = [];

    // Fuel match bonus (already filtered, but if no-preference give bonus to all)
    if (fuel === "no-preference" || car.fuelType === fuel) {
      score += 10;
      reasons.push(`Runs on ${car.fuelType} as you prefer`);
    }

    // Use case match: +20 for each matching use case tag
    const matchingUseCases = useCases.filter((uc) =>
      car.useCaseTags.includes(uc)
    );
    if (matchingUseCases.length > 0) {
      const useCasePoints = matchingUseCases.length * 20;
      score += useCasePoints;
      reasons.push(`Great for ${matchingUseCases.join(" & ")}`);
    }

    // Priority scoring
    for (const p of priorities as Priority[]) {
      const raw = getRawValue(car, p);
      const normalized = raw / MAX_VALUES[p];
      const points = Math.round(normalized * WEIGHTS[p] * 10) / 10;
      score += points;
      reasons.push(getReasonText(p, car));
    }

    return {
      id: car.id,
      make: car.make,
      model: car.model,
      variant: car.variant,
      priceLakh: car.priceLakh,
      bodyType: car.bodyType,
      fuelType: car.fuelType,
      mileageKmpl: car.mileageKmpl,
      safetyRating: car.safetyRating,
      horsepower: car.horsepower,
      useCaseTags: car.useCaseTags,
      comfortScore: car.comfortScore,
      resaleValueScore: car.resaleValueScore,
      reviewScore: car.reviewScore,
      imageUrl: car.imageUrl,
      score: Math.round(score * 10) / 10,
      reasons,
    };
  });

  // Sort by score descending, return top 5
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5);
}

function getRawValue(
  car: typeof cars.$inferSelect,
  priority: Priority
): number {
  switch (priority) {
    case "safety":
      return car.safetyRating;
    case "mileage":
      return car.mileageKmpl;
    case "performance":
      return car.horsepower;
    case "comfort":
      return car.comfortScore;
    case "resale":
      return car.resaleValueScore;
  }
}

function getReasonText(priority: Priority, car: typeof cars.$inferSelect): string {
  switch (priority) {
    case "safety":
      return `${car.safetyRating}/5 safety rating — solid protection`;
    case "mileage":
      return `${car.mileageKmpl} km/l — easy on the wallet`;
    case "performance":
      return `${car.horsepower} hp — plenty of punch`;
    case "comfort":
      return `${car.comfortScore}/10 comfort — smooth ride quality`;
    case "resale":
      return `${car.resaleValueScore}/10 resale — holds its value well`;
  }
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
