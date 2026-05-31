import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const cars = sqliteTable("cars", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  make: text("make").notNull(), // Hyundai
  model: text("model").notNull(), // Creta
  variant: text("variant").notNull(), // SX(O) turbo
  priceLakh: real("price_lakh").notNull(), //ex-showroom price in lakhs
  bodyType: text("body_type", {
    enum: ["sedan", "suv", "hatchback", "mpv", "coupe", "pickup"],
  }).notNull(),
  fuelType: text("fuel_type", {
    enum: ["petrol", "diesel", "electric", "hybrid"],
  }).notNull(),
  mileageKmpl: real("mileage_kmpl").notNull(),
  safetyRating: integer("safety_rating").notNull(),
  horsepower: integer("horsepower").notNull(),
  useCaseTags: text("use_case_tags", { mode: "json" })
    .notNull()
    .$type<string[]>(), // city, highway, family, offroad, first car, luxury, etc.
  comfortScore: integer("comfort_score").notNull(), //1-10
  resaleValueScore: integer("resale_value_score").notNull(), //1-10
  reviewScore: real("review_score").notNull(), //avg user rating 1-5
  imageUrl: text("image_url"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});
