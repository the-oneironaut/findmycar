CREATE TABLE `cars` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`make` text NOT NULL,
	`model` text NOT NULL,
	`variant` text NOT NULL,
	`price_lakh` real NOT NULL,
	`body_type` text NOT NULL,
	`fuel_type` text NOT NULL,
	`mileage_kmpl` real NOT NULL,
	`safety_rating` integer NOT NULL,
	`horsepower` integer NOT NULL,
	`use_case_tags` text NOT NULL,
	`comfort_score` integer NOT NULL,
	`resale_value_score` integer NOT NULL,
	`review_score` real NOT NULL,
	`image_url` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
