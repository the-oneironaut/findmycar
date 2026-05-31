import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { cars } from "./schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

const seedData: (typeof cars.$inferInsert)[] = [
  // --- Maruti Suzuki ---
  { make: "Maruti Suzuki", model: "Alto K10", variant: "VXi", priceLakh: 4.5, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 24.9, safetyRating: 2, horsepower: 67, useCaseTags: ["city", "first-car"], comfortScore: 4, resaleValueScore: 8, reviewScore: 3.8, imageUrl: null },
  { make: "Maruti Suzuki", model: "Swift", variant: "ZXi+", priceLakh: 8.2, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 22.4, safetyRating: 3, horsepower: 90, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 9, reviewScore: 4.2, imageUrl: null },
  { make: "Maruti Suzuki", model: "Baleno", variant: "Alpha", priceLakh: 9.7, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 22.9, safetyRating: 3, horsepower: 90, useCaseTags: ["city", "first-car"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.1, imageUrl: null },
  { make: "Maruti Suzuki", model: "Wagon R", variant: "ZXi+ AGS", priceLakh: 7.4, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 24.4, safetyRating: 2, horsepower: 67, useCaseTags: ["city", "family", "first-car"], comfortScore: 6, resaleValueScore: 9, reviewScore: 4.0, imageUrl: null },
  { make: "Maruti Suzuki", model: "Dzire", variant: "ZXi+ AGS", priceLakh: 9.4, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 22.6, safetyRating: 3, horsepower: 90, useCaseTags: ["city", "family", "highway"], comfortScore: 7, resaleValueScore: 9, reviewScore: 4.1, imageUrl: null },
  { make: "Maruti Suzuki", model: "Ciaz", variant: "Alpha", priceLakh: 12.2, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 20.7, safetyRating: 3, horsepower: 105, useCaseTags: ["highway", "family", "city"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },
  { make: "Maruti Suzuki", model: "Brezza", variant: "ZXi+", priceLakh: 13.8, bodyType: "suv", fuelType: "petrol", mileageKmpl: 19.8, safetyRating: 4, horsepower: 103, useCaseTags: ["city", "family", "first-car"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.2, imageUrl: null },
  { make: "Maruti Suzuki", model: "Grand Vitara", variant: "Alpha+ Hybrid", priceLakh: 19.9, bodyType: "suv", fuelType: "hybrid", mileageKmpl: 27.9, safetyRating: 4, horsepower: 116, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Maruti Suzuki", model: "Ertiga", variant: "ZXi+", priceLakh: 12.8, bodyType: "mpv", fuelType: "petrol", mileageKmpl: 20.5, safetyRating: 3, horsepower: 105, useCaseTags: ["family", "city", "highway"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.2, imageUrl: null },
  { make: "Maruti Suzuki", model: "XL6", variant: "Alpha+", priceLakh: 14.6, bodyType: "mpv", fuelType: "petrol", mileageKmpl: 20.9, safetyRating: 3, horsepower: 105, useCaseTags: ["family", "highway", "city"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.1, imageUrl: null },
  { make: "Maruti Suzuki", model: "Jimny", variant: "Alpha AT", priceLakh: 13.2, bodyType: "suv", fuelType: "petrol", mileageKmpl: 16.9, safetyRating: 3, horsepower: 105, useCaseTags: ["offroad", "adventure", "city"], comfortScore: 5, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },
  { make: "Maruti Suzuki", model: "Fronx", variant: "Alpha+ Turbo", priceLakh: 12.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 21.5, safetyRating: 3, horsepower: 100, useCaseTags: ["city", "first-car", "highway"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.1, imageUrl: null },
  { make: "Maruti Suzuki", model: "Invicto", variant: "Alpha+", priceLakh: 24.8, bodyType: "mpv", fuelType: "hybrid", mileageKmpl: 23.2, safetyRating: 5, horsepower: 186, useCaseTags: ["family", "highway", "luxury"], comfortScore: 9, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },

  // --- Hyundai ---
  { make: "Hyundai", model: "i20", variant: "Asta(O) Turbo", priceLakh: 11.2, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 20.3, safetyRating: 3, horsepower: 120, useCaseTags: ["city", "first-car"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.2, imageUrl: null },
  { make: "Hyundai", model: "i20 N Line", variant: "N8 DCT", priceLakh: 13.5, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 19.6, safetyRating: 3, horsepower: 120, useCaseTags: ["city", "performance"], comfortScore: 7, resaleValueScore: 6, reviewScore: 4.1, imageUrl: null },
  { make: "Hyundai", model: "Grand i10 Nios", variant: "Asta", priceLakh: 7.6, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 20.7, safetyRating: 2, horsepower: 83, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 7, reviewScore: 3.9, imageUrl: null },
  { make: "Hyundai", model: "Aura", variant: "SX+ AMT", priceLakh: 9.0, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 20.5, safetyRating: 2, horsepower: 83, useCaseTags: ["city", "family", "first-car"], comfortScore: 6, resaleValueScore: 6, reviewScore: 3.8, imageUrl: null },
  { make: "Hyundai", model: "Verna", variant: "SX(O) Turbo DCT", priceLakh: 17.4, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 18.6, safetyRating: 5, horsepower: 160, useCaseTags: ["highway", "city", "performance"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.4, imageUrl: null },
  { make: "Hyundai", model: "Venue", variant: "SX(O) Turbo DCT", priceLakh: 13.2, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.2, safetyRating: 3, horsepower: 120, useCaseTags: ["city", "first-car"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },
  { make: "Hyundai", model: "Creta", variant: "SX(O) Turbo DCT", priceLakh: 20.2, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.0, safetyRating: 5, horsepower: 160, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 8, reviewScore: 4.4, imageUrl: null },
  { make: "Hyundai", model: "Creta", variant: "SX Diesel", priceLakh: 18.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 21.8, safetyRating: 5, horsepower: 115, useCaseTags: ["highway", "family", "city"], comfortScore: 8, resaleValueScore: 8, reviewScore: 4.3, imageUrl: null },
  { make: "Hyundai", model: "Tucson", variant: "Signature AWD Diesel", priceLakh: 34.4, bodyType: "suv", fuelType: "diesel", mileageKmpl: 18.4, safetyRating: 5, horsepower: 186, useCaseTags: ["highway", "family", "luxury", "adventure"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "Hyundai", model: "Alcazar", variant: "Signature Diesel AT", priceLakh: 21.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 18.7, safetyRating: 5, horsepower: 186, useCaseTags: ["family", "highway", "luxury"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.2, imageUrl: null },
  { make: "Hyundai", model: "Ioniq 5", variant: "Long Range AWD", priceLakh: 45.9, bodyType: "suv", fuelType: "electric", mileageKmpl: 6.3, safetyRating: 5, horsepower: 325, useCaseTags: ["luxury", "city", "highway", "performance"], comfortScore: 10, resaleValueScore: 5, reviewScore: 4.5, imageUrl: null },
  { make: "Hyundai", model: "Exter", variant: "SX(O) AMT", priceLakh: 10.2, bodyType: "suv", fuelType: "petrol", mileageKmpl: 19.4, safetyRating: 3, horsepower: 83, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },

  // --- Tata ---
  { make: "Tata", model: "Tiago", variant: "XZ+ AMT", priceLakh: 7.5, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 20.1, safetyRating: 4, horsepower: 86, useCaseTags: ["city", "first-car"], comfortScore: 5, resaleValueScore: 6, reviewScore: 4.0, imageUrl: null },
  { make: "Tata", model: "Altroz", variant: "XZ+ Turbo DCT", priceLakh: 10.9, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 18.5, safetyRating: 5, horsepower: 120, useCaseTags: ["city", "first-car", "highway"], comfortScore: 7, resaleValueScore: 6, reviewScore: 4.1, imageUrl: null },
  { make: "Tata", model: "Tigor", variant: "XZ+ AMT", priceLakh: 8.5, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 20.0, safetyRating: 4, horsepower: 86, useCaseTags: ["city", "first-car", "family"], comfortScore: 6, resaleValueScore: 6, reviewScore: 3.9, imageUrl: null },
  { make: "Tata", model: "Punch", variant: "Accomplished+ AMT", priceLakh: 10.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.8, safetyRating: 5, horsepower: 86, useCaseTags: ["city", "first-car", "adventure"], comfortScore: 6, resaleValueScore: 7, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Nexon", variant: "XZ+(P) Turbo AT", priceLakh: 15.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.4, safetyRating: 5, horsepower: 120, useCaseTags: ["city", "family", "adventure"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Tata", model: "Nexon", variant: "XZ+(P) Diesel AMT", priceLakh: 15.8, bodyType: "suv", fuelType: "diesel", mileageKmpl: 22.1, safetyRating: 5, horsepower: 115, useCaseTags: ["highway", "family", "adventure"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Nexon EV", variant: "Empowered+ LR", priceLakh: 19.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 7.5, safetyRating: 5, horsepower: 143, useCaseTags: ["city", "family"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Harrier", variant: "Fearless+ AT", priceLakh: 25.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 16.8, safetyRating: 5, horsepower: 170, useCaseTags: ["highway", "family", "adventure"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Safari", variant: "Accomplished+ AT", priceLakh: 27.3, bodyType: "suv", fuelType: "diesel", mileageKmpl: 16.3, safetyRating: 5, horsepower: 170, useCaseTags: ["highway", "family", "adventure", "luxury"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Curvv", variant: "Accomplished+ AT", priceLakh: 19.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 19.6, safetyRating: 5, horsepower: 150, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.1, imageUrl: null },
  { make: "Tata", model: "Curvv EV", variant: "Empowered+ LR", priceLakh: 21.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 7.0, safetyRating: 5, horsepower: 167, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.2, imageUrl: null },
  { make: "Tata", model: "Tiago EV", variant: "XZ+ Tech LR", priceLakh: 11.9, bodyType: "hatchback", fuelType: "electric", mileageKmpl: 8.0, safetyRating: 4, horsepower: 75, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 5, reviewScore: 4.0, imageUrl: null },

  // --- Mahindra ---
  { make: "Mahindra", model: "XUV300", variant: "W8(O) Turbo AT", priceLakh: 13.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.0, safetyRating: 5, horsepower: 130, useCaseTags: ["city", "family", "adventure"], comfortScore: 7, resaleValueScore: 6, reviewScore: 4.0, imageUrl: null },
  { make: "Mahindra", model: "XUV700", variant: "AX7 AT Diesel", priceLakh: 23.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 16.3, safetyRating: 5, horsepower: 185, useCaseTags: ["highway", "family", "adventure", "luxury"], comfortScore: 9, resaleValueScore: 7, reviewScore: 4.5, imageUrl: null },
  { make: "Mahindra", model: "XUV700", variant: "MX Petrol", priceLakh: 14.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 15.5, safetyRating: 5, horsepower: 200, useCaseTags: ["highway", "family", "performance"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Mahindra", model: "Thar", variant: "LX AT Diesel Hard Top", priceLakh: 17.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.2, safetyRating: 3, horsepower: 130, useCaseTags: ["offroad", "adventure"], comfortScore: 5, resaleValueScore: 9, reviewScore: 4.3, imageUrl: null },
  { make: "Mahindra", model: "Thar Roxx", variant: "MX5 AX7L AT Diesel", priceLakh: 22.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.8, safetyRating: 5, horsepower: 175, useCaseTags: ["offroad", "adventure", "family"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.4, imageUrl: null },
  { make: "Mahindra", model: "Scorpio N", variant: "Z8L AT Diesel", priceLakh: 21.0, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.0, safetyRating: 5, horsepower: 175, useCaseTags: ["highway", "offroad", "family", "adventure"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.3, imageUrl: null },
  { make: "Mahindra", model: "Scorpio Classic", variant: "S11", priceLakh: 15.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.4, safetyRating: 3, horsepower: 132, useCaseTags: ["highway", "offroad", "adventure"], comfortScore: 5, resaleValueScore: 8, reviewScore: 3.9, imageUrl: null },
  { make: "Mahindra", model: "Bolero", variant: "B6(O)", priceLakh: 10.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 16.0, safetyRating: 2, horsepower: 76, useCaseTags: ["offroad", "adventure"], comfortScore: 4, resaleValueScore: 8, reviewScore: 3.7, imageUrl: null },
  { make: "Mahindra", model: "XUV400 EV", variant: "EL Pro LR", priceLakh: 18.2, bodyType: "suv", fuelType: "electric", mileageKmpl: 7.6, safetyRating: 5, horsepower: 150, useCaseTags: ["city", "family"], comfortScore: 7, resaleValueScore: 5, reviewScore: 4.0, imageUrl: null },
  { make: "Mahindra", model: "BE 6", variant: "Pack Two", priceLakh: 26.9, bodyType: "suv", fuelType: "electric", mileageKmpl: 6.5, safetyRating: 5, horsepower: 286, useCaseTags: ["city", "highway", "performance", "luxury"], comfortScore: 9, resaleValueScore: 5, reviewScore: 4.3, imageUrl: null },

  // --- Kia ---
  { make: "Kia", model: "Sonet", variant: "HTX+ Turbo DCT", priceLakh: 14.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.3, safetyRating: 3, horsepower: 120, useCaseTags: ["city", "first-car"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.1, imageUrl: null },
  { make: "Kia", model: "Sonet", variant: "HTX+ Diesel AT", priceLakh: 15.2, bodyType: "suv", fuelType: "diesel", mileageKmpl: 19.0, safetyRating: 3, horsepower: 115, useCaseTags: ["city", "highway", "first-car"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.1, imageUrl: null },
  { make: "Kia", model: "Seltos", variant: "HTX+ Turbo DCT", priceLakh: 19.8, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.9, safetyRating: 4, horsepower: 160, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Kia", model: "Seltos", variant: "X-Line Diesel AT", priceLakh: 20.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 18.7, safetyRating: 4, horsepower: 115, useCaseTags: ["highway", "family", "adventure"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.2, imageUrl: null },
  { make: "Kia", model: "Carens", variant: "Luxury+ Turbo DCT", priceLakh: 18.4, bodyType: "mpv", fuelType: "petrol", mileageKmpl: 16.5, safetyRating: 3, horsepower: 160, useCaseTags: ["family", "highway", "city"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.1, imageUrl: null },
  { make: "Kia", model: "EV6", variant: "GT Line AWD", priceLakh: 65.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 5.8, safetyRating: 5, horsepower: 325, useCaseTags: ["luxury", "performance", "highway"], comfortScore: 10, resaleValueScore: 5, reviewScore: 4.6, imageUrl: null },
  { make: "Kia", model: "EV9", variant: "GT Line", priceLakh: 75.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 5.2, safetyRating: 5, horsepower: 384, useCaseTags: ["luxury", "family", "highway", "performance"], comfortScore: 10, resaleValueScore: 5, reviewScore: 4.5, imageUrl: null },

  // --- Toyota ---
  { make: "Toyota", model: "Glanza", variant: "V AMT", priceLakh: 9.4, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 22.9, safetyRating: 3, horsepower: 90, useCaseTags: ["city", "first-car"], comfortScore: 7, resaleValueScore: 8, reviewScore: 4.0, imageUrl: null },
  { make: "Toyota", model: "Urban Cruiser Hyryder", variant: "V Hybrid", priceLakh: 18.6, bodyType: "suv", fuelType: "hybrid", mileageKmpl: 27.9, safetyRating: 4, horsepower: 116, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 8, reviewScore: 4.2, imageUrl: null },
  { make: "Toyota", model: "Innova Hycross", variant: "ZX(O) Hybrid AT", priceLakh: 28.3, bodyType: "mpv", fuelType: "hybrid", mileageKmpl: 21.1, safetyRating: 5, horsepower: 186, useCaseTags: ["family", "highway", "luxury"], comfortScore: 9, resaleValueScore: 9, reviewScore: 4.5, imageUrl: null },
  { make: "Toyota", model: "Innova Crysta", variant: "ZX AT Diesel", priceLakh: 25.5, bodyType: "mpv", fuelType: "diesel", mileageKmpl: 16.0, safetyRating: 4, horsepower: 150, useCaseTags: ["family", "highway"], comfortScore: 8, resaleValueScore: 9, reviewScore: 4.3, imageUrl: null },
  { make: "Toyota", model: "Fortuner", variant: "Legender AT 4x4", priceLakh: 42.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 14.2, safetyRating: 4, horsepower: 204, useCaseTags: ["highway", "offroad", "luxury", "adventure"], comfortScore: 8, resaleValueScore: 9, reviewScore: 4.4, imageUrl: null },
  { make: "Toyota", model: "Fortuner", variant: "4x2 AT Diesel", priceLakh: 36.0, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.0, safetyRating: 4, horsepower: 204, useCaseTags: ["highway", "family", "luxury"], comfortScore: 8, resaleValueScore: 9, reviewScore: 4.3, imageUrl: null },
  { make: "Toyota", model: "Camry", variant: "Hybrid", priceLakh: 48.0, bodyType: "sedan", fuelType: "hybrid", mileageKmpl: 19.1, safetyRating: 5, horsepower: 218, useCaseTags: ["luxury", "highway", "city"], comfortScore: 10, resaleValueScore: 7, reviewScore: 4.5, imageUrl: null },
  { make: "Toyota", model: "Rumion", variant: "V AT", priceLakh: 12.5, bodyType: "mpv", fuelType: "petrol", mileageKmpl: 20.3, safetyRating: 3, horsepower: 105, useCaseTags: ["family", "city"], comfortScore: 7, resaleValueScore: 7, reviewScore: 3.9, imageUrl: null },

  // --- Honda ---
  { make: "Honda", model: "City", variant: "ZX CVT", priceLakh: 15.5, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 18.4, safetyRating: 4, horsepower: 121, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Honda", model: "City Hybrid", variant: "ZX e:HEV", priceLakh: 20.5, bodyType: "sedan", fuelType: "hybrid", mileageKmpl: 26.5, safetyRating: 4, horsepower: 126, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "Honda", model: "Amaze", variant: "VX CVT", priceLakh: 9.9, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 18.6, safetyRating: 4, horsepower: 90, useCaseTags: ["city", "family", "first-car"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },
  { make: "Honda", model: "Elevate", variant: "ZX CVT", priceLakh: 16.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 15.3, safetyRating: 5, horsepower: 121, useCaseTags: ["city", "highway", "family"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.1, imageUrl: null },

  // --- Volkswagen / Skoda ---
  { make: "Volkswagen", model: "Taigun", variant: "GT Plus DSG", priceLakh: 19.2, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.7, safetyRating: 5, horsepower: 150, useCaseTags: ["city", "highway", "performance"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.2, imageUrl: null },
  { make: "Volkswagen", model: "Virtus", variant: "GT Plus DSG", priceLakh: 18.8, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 18.1, safetyRating: 5, horsepower: 150, useCaseTags: ["highway", "city", "performance"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "Skoda", model: "Kushaq", variant: "Style 1.5 TSI DSG", priceLakh: 19.6, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.0, safetyRating: 5, horsepower: 150, useCaseTags: ["city", "highway", "performance"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.1, imageUrl: null },
  { make: "Skoda", model: "Slavia", variant: "Style 1.5 TSI DSG", priceLakh: 19.2, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 18.7, safetyRating: 5, horsepower: 150, useCaseTags: ["highway", "city", "performance"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.2, imageUrl: null },
  { make: "Skoda", model: "Kodiaq", variant: "Style AT", priceLakh: 39.9, bodyType: "suv", fuelType: "petrol", mileageKmpl: 12.7, safetyRating: 5, horsepower: 190, useCaseTags: ["highway", "family", "luxury"], comfortScore: 9, resaleValueScore: 5, reviewScore: 4.2, imageUrl: null },
  { make: "Skoda", model: "Superb", variant: "L&K AT", priceLakh: 38.0, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 14.1, safetyRating: 5, horsepower: 190, useCaseTags: ["luxury", "highway", "city"], comfortScore: 10, resaleValueScore: 5, reviewScore: 4.4, imageUrl: null },

  // --- MG ---
  { make: "MG", model: "Hector", variant: "Sharp Pro AT", priceLakh: 21.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 14.1, safetyRating: 4, horsepower: 170, useCaseTags: ["family", "highway", "city"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.0, imageUrl: null },
  { make: "MG", model: "Hector Plus", variant: "Sharp Pro AT", priceLakh: 22.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 14.1, safetyRating: 4, horsepower: 170, useCaseTags: ["family", "highway"], comfortScore: 8, resaleValueScore: 5, reviewScore: 3.9, imageUrl: null },
  { make: "MG", model: "Astor", variant: "Sharp AT", priceLakh: 16.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 14.2, safetyRating: 4, horsepower: 140, useCaseTags: ["city", "highway"], comfortScore: 7, resaleValueScore: 5, reviewScore: 4.0, imageUrl: null },
  { make: "MG", model: "ZS EV", variant: "Exclusive Pro", priceLakh: 25.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 6.8, safetyRating: 4, horsepower: 176, useCaseTags: ["city", "family"], comfortScore: 8, resaleValueScore: 4, reviewScore: 4.0, imageUrl: null },
  { make: "MG", model: "Comet EV", variant: "Play", priceLakh: 8.0, bodyType: "hatchback", fuelType: "electric", mileageKmpl: 9.2, safetyRating: 2, horsepower: 42, useCaseTags: ["city", "first-car"], comfortScore: 4, resaleValueScore: 4, reviewScore: 3.6, imageUrl: null },
  { make: "MG", model: "Windsor EV", variant: "Essence", priceLakh: 17.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 7.1, safetyRating: 4, horsepower: 136, useCaseTags: ["city", "family"], comfortScore: 8, resaleValueScore: 4, reviewScore: 4.0, imageUrl: null },

  // --- Renault / Nissan ---
  { make: "Renault", model: "Kiger", variant: "RXZ Turbo CVT", priceLakh: 11.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.5, safetyRating: 3, horsepower: 100, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 5, reviewScore: 3.8, imageUrl: null },
  { make: "Nissan", model: "Magnite", variant: "XV Premium Turbo CVT", priceLakh: 11.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.7, safetyRating: 3, horsepower: 100, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 5, reviewScore: 3.9, imageUrl: null },

  // --- Jeep ---
  { make: "Jeep", model: "Compass", variant: "Model S Diesel AT 4x4", priceLakh: 36.5, bodyType: "suv", fuelType: "diesel", mileageKmpl: 16.3, safetyRating: 4, horsepower: 170, useCaseTags: ["offroad", "highway", "adventure", "luxury"], comfortScore: 8, resaleValueScore: 5, reviewScore: 4.1, imageUrl: null },
  { make: "Jeep", model: "Meridian", variant: "Limited (O) Diesel AT", priceLakh: 37.0, bodyType: "suv", fuelType: "diesel", mileageKmpl: 15.5, safetyRating: 4, horsepower: 170, useCaseTags: ["highway", "offroad", "family", "luxury"], comfortScore: 8, resaleValueScore: 4, reviewScore: 4.0, imageUrl: null },

  // --- Citroen ---
  { make: "Citroen", model: "C3", variant: "Shine Turbo", priceLakh: 8.5, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 19.8, safetyRating: 2, horsepower: 110, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 4, reviewScore: 3.7, imageUrl: null },
  { make: "Citroen", model: "C3 Aircross", variant: "Shine AT", priceLakh: 13.0, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.1, safetyRating: 3, horsepower: 110, useCaseTags: ["family", "city"], comfortScore: 7, resaleValueScore: 4, reviewScore: 3.8, imageUrl: null },
  { make: "Citroen", model: "eC3", variant: "Shine", priceLakh: 13.5, bodyType: "hatchback", fuelType: "electric", mileageKmpl: 8.5, safetyRating: 3, horsepower: 57, useCaseTags: ["city", "first-car"], comfortScore: 6, resaleValueScore: 3, reviewScore: 3.5, imageUrl: null },

  // --- BYD ---
  { make: "BYD", model: "Atto 3", variant: "Superior", priceLakh: 34.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 6.2, safetyRating: 5, horsepower: 204, useCaseTags: ["city", "family", "highway"], comfortScore: 9, resaleValueScore: 4, reviewScore: 4.1, imageUrl: null },
  { make: "BYD", model: "Seal", variant: "Performance", priceLakh: 50.0, bodyType: "sedan", fuelType: "electric", mileageKmpl: 5.5, safetyRating: 5, horsepower: 530, useCaseTags: ["luxury", "performance", "highway"], comfortScore: 9, resaleValueScore: 4, reviewScore: 4.3, imageUrl: null },
  { make: "BYD", model: "eMAX 7", variant: "Premium", priceLakh: 30.0, bodyType: "mpv", fuelType: "electric", mileageKmpl: 6.0, safetyRating: 5, horsepower: 204, useCaseTags: ["family", "city", "highway"], comfortScore: 9, resaleValueScore: 4, reviewScore: 4.0, imageUrl: null },

  // --- Mercedes / BMW / Audi (premium segment) ---
  { make: "Mercedes-Benz", model: "A-Class Limousine", variant: "A200d", priceLakh: 45.0, bodyType: "sedan", fuelType: "diesel", mileageKmpl: 18.0, safetyRating: 5, horsepower: 150, useCaseTags: ["luxury", "city", "highway"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "Mercedes-Benz", model: "GLA", variant: "220d 4MATIC", priceLakh: 52.0, bodyType: "suv", fuelType: "diesel", mileageKmpl: 17.0, safetyRating: 5, horsepower: 190, useCaseTags: ["luxury", "city", "highway"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "BMW", model: "2 Series Gran Coupe", variant: "220i M Sport", priceLakh: 42.0, bodyType: "sedan", fuelType: "petrol", mileageKmpl: 14.5, safetyRating: 5, horsepower: 190, useCaseTags: ["luxury", "performance", "city"], comfortScore: 8, resaleValueScore: 6, reviewScore: 4.2, imageUrl: null },
  { make: "BMW", model: "X1", variant: "sDrive20i M Sport", priceLakh: 49.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 13.9, safetyRating: 5, horsepower: 204, useCaseTags: ["luxury", "city", "highway"], comfortScore: 9, resaleValueScore: 6, reviewScore: 4.3, imageUrl: null },
  { make: "BMW", model: "iX1", variant: "xDrive30", priceLakh: 66.5, bodyType: "suv", fuelType: "electric", mileageKmpl: 5.5, safetyRating: 5, horsepower: 313, useCaseTags: ["luxury", "city", "performance"], comfortScore: 9, resaleValueScore: 5, reviewScore: 4.3, imageUrl: null },

  // --- More variety for budget segment ---
  { make: "Maruti Suzuki", model: "Celerio", variant: "ZXi+ AMT", priceLakh: 6.9, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 25.2, safetyRating: 2, horsepower: 67, useCaseTags: ["city", "first-car"], comfortScore: 5, resaleValueScore: 7, reviewScore: 3.8, imageUrl: null },
  { make: "Maruti Suzuki", model: "S-Presso", variant: "VXi+ AMT", priceLakh: 5.8, bodyType: "hatchback", fuelType: "petrol", mileageKmpl: 24.8, safetyRating: 1, horsepower: 67, useCaseTags: ["city", "first-car"], comfortScore: 4, resaleValueScore: 7, reviewScore: 3.6, imageUrl: null },
  { make: "Hyundai", model: "Creta N Line", variant: "N8 Turbo DCT", priceLakh: 21.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 17.0, safetyRating: 5, horsepower: 160, useCaseTags: ["city", "highway", "performance"], comfortScore: 8, resaleValueScore: 7, reviewScore: 4.3, imageUrl: null },
  { make: "Tata", model: "Punch EV", variant: "Empowered+ LR", priceLakh: 14.0, bodyType: "suv", fuelType: "electric", mileageKmpl: 8.0, safetyRating: 5, horsepower: 122, useCaseTags: ["city", "first-car", "adventure"], comfortScore: 7, resaleValueScore: 5, reviewScore: 4.1, imageUrl: null },
  { make: "Kia", model: "Syros", variant: "HTX+ Turbo AT", priceLakh: 14.8, bodyType: "suv", fuelType: "petrol", mileageKmpl: 18.2, safetyRating: 4, horsepower: 120, useCaseTags: ["city", "first-car", "family"], comfortScore: 7, resaleValueScore: 6, reviewScore: 4.0, imageUrl: null },
  { make: "Toyota", model: "Taisor", variant: "S+ Turbo AT", priceLakh: 11.5, bodyType: "suv", fuelType: "petrol", mileageKmpl: 21.5, safetyRating: 3, horsepower: 100, useCaseTags: ["city", "first-car", "highway"], comfortScore: 7, resaleValueScore: 7, reviewScore: 4.0, imageUrl: null },
];

async function seed() {
  console.log("Seeding database with", seedData.length, "cars...");
  await db.insert(cars).values(seedData);
  console.log("Done!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
