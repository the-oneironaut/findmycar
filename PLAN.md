# Problem

Car buyers are overwhelmed. Too many options, no clear way to narrow down. They need to go from "I have no idea" to "here are my top 3-5 cars and why."

# Solution: Guided Recommendation Wizard

A short, focused questionnaire (4-5 steps) that collects preferences and returns a scored, ranked shortlist with explanations for each pick.

**Why this approach?**

- Filters alone don't help confused buyers (they don't know what to filter by)
- A chatbot is unreliable in a small window
- A guided flow is opinionated, completable in one session, and builds confidence

# User Flow
1. Landing -> "Find your car in 60 seconds"
2. Step 1: Budget range (slider: <8L to 25L+)
3. Step 2: Primary use case (city commute / highway cruiser / family / off-road-adventure / first car)
4. Step 3: Top priority (pick 2: safety, mileage, performance, comfort, resale value)
5. Step 4: Fuel preference (petrol / diesel / electric / hybrid / no preference)
6. Results: Top 5 cars, scored and ranked, each with "why this fits you" bullets
7. Bonus: Side-by-side compare (2 cars)

# Tech Stack

- **Next.js** (App Router, Server Actions)
- **SQLite**
- **Drizzle ORM**
- **Tailwind CSS + shadcn/ui**
- **Vercel** for deployment

# Schema (single table MVP)
```
cars
|----id (serial PK)
|----make (text)
|----model (text)
|----variant (text)
|----price_lakh (decimal)
|----body_type (enum)
|----fuel_type (enum)
|----mileage_kmpl (decimal)
|----safety_rating (int)
|----horsepower (int)
|----use_case_tags (text[])
|----comfort_score (int)
|----resale_value_score (int)
|----review_score (decimal)
|----image_url (text, nullable)
|----created_at (timestamp)
```

# Scoring Engine (Server Action)
```
for each car in budget range:
    score = 0
    if matches fuel preferences: +10
    if use_case_tags includes selected use case: +20
    for each selected priority:
        score += normalized_value(priority_field) * weight
    
    weights: safety=15, mileage=12, performance=10, comfort=10, resale=8
return top 5 by score, with breakdown.
```

