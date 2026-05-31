PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "__drizzle_migrations" (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			);
INSERT INTO __drizzle_migrations VALUES(NULL,'ec0677b02db8362bc77595f8436fafd4a7b8e18d49ea90aebf3bab8cce24908a',1780243579387);
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
INSERT INTO cars VALUES(1,'Maruti Suzuki','Alto K10','VXi',4.5,'hatchback','petrol',24.89999999999999858,2,67,'["city","first-car"]',4,8,3.799999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(2,'Maruti Suzuki','Swift','ZXi+',8.199999999999999289,'hatchback','petrol',22.39999999999999857,3,90,'["city","first-car"]',6,9,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(3,'Maruti Suzuki','Baleno','Alpha',9.69999999999999928,'hatchback','petrol',22.89999999999999857,3,90,'["city","first-car"]',7,8,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(4,'Maruti Suzuki','Wagon R','ZXi+ AGS',7.400000000000000355,'hatchback','petrol',24.39999999999999858,2,67,'["city","family","first-car"]',6,9,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(5,'Maruti Suzuki','Dzire','ZXi+ AGS',9.40000000000000035,'sedan','petrol',22.60000000000000143,3,90,'["city","family","highway"]',7,9,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(6,'Maruti Suzuki','Ciaz','Alpha',12.19999999999999929,'sedan','petrol',20.69999999999999929,3,105,'["highway","family","city"]',8,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(7,'Maruti Suzuki','Brezza','ZXi+',13.80000000000000071,'suv','petrol',19.80000000000000071,4,103,'["city","family","first-car"]',7,8,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(8,'Maruti Suzuki','Grand Vitara','Alpha+ Hybrid',19.89999999999999857,'suv','hybrid',27.89999999999999858,4,116,'["city","highway","family"]',8,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(9,'Maruti Suzuki','Ertiga','ZXi+',12.80000000000000071,'mpv','petrol',20.5,3,105,'["family","city","highway"]',7,8,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(10,'Maruti Suzuki','XL6','Alpha+',14.59999999999999965,'mpv','petrol',20.89999999999999857,3,105,'["family","highway","city"]',8,7,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(11,'Maruti Suzuki','Jimny','Alpha AT',13.19999999999999929,'suv','petrol',16.89999999999999857,3,105,'["offroad","adventure","city"]',5,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(12,'Maruti Suzuki','Fronx','Alpha+ Turbo',12.5,'suv','petrol',21.5,3,100,'["city","first-car","highway"]',7,7,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(13,'Maruti Suzuki','Invicto','Alpha+',24.80000000000000071,'mpv','hybrid',23.19999999999999929,5,186,'["family","highway","luxury"]',9,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(14,'Hyundai','i20','Asta(O) Turbo',11.19999999999999928,'hatchback','petrol',20.30000000000000071,3,120,'["city","first-car"]',8,7,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(15,'Hyundai','i20 N Line','N8 DCT',13.5,'hatchback','petrol',19.60000000000000143,3,120,'["city","performance"]',7,6,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(16,'Hyundai','Grand i10 Nios','Asta',7.599999999999999645,'hatchback','petrol',20.69999999999999929,2,83,'["city","first-car"]',6,7,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(17,'Hyundai','Aura','SX+ AMT',9.0,'sedan','petrol',20.5,2,83,'["city","family","first-car"]',6,6,3.799999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(18,'Hyundai','Verna','SX(O) Turbo DCT',17.39999999999999857,'sedan','petrol',18.60000000000000143,5,160,'["highway","city","performance"]',8,7,4.400000000000000356,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(19,'Hyundai','Venue','SX(O) Turbo DCT',13.19999999999999929,'suv','petrol',18.19999999999999929,3,120,'["city","first-car"]',7,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(20,'Hyundai','Creta','SX(O) Turbo DCT',20.19999999999999929,'suv','petrol',17.0,5,160,'["city","highway","family"]',8,8,4.400000000000000356,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(21,'Hyundai','Creta','SX Diesel',18.5,'suv','diesel',21.80000000000000071,5,115,'["highway","family","city"]',8,8,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(22,'Hyundai','Tucson','Signature AWD Diesel',34.39999999999999858,'suv','diesel',18.39999999999999857,5,186,'["highway","family","luxury","adventure"]',9,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(23,'Hyundai','Alcazar','Signature Diesel AT',21.5,'suv','diesel',18.69999999999999929,5,186,'["family","highway","luxury"]',9,6,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(24,'Hyundai','Ioniq 5','Long Range AWD',45.89999999999999858,'suv','electric',6.299999999999999823,5,325,'["luxury","city","highway","performance"]',10,5,4.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(25,'Hyundai','Exter','SX(O) AMT',10.19999999999999928,'suv','petrol',19.39999999999999857,3,83,'["city","first-car"]',6,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(26,'Tata','Tiago','XZ+ AMT',7.5,'hatchback','petrol',20.10000000000000143,4,86,'["city","first-car"]',5,6,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(27,'Tata','Altroz','XZ+ Turbo DCT',10.90000000000000035,'hatchback','petrol',18.5,5,120,'["city","first-car","highway"]',7,6,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(28,'Tata','Tigor','XZ+ AMT',8.5,'sedan','petrol',20.0,4,86,'["city","first-car","family"]',6,6,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(29,'Tata','Punch','Accomplished+ AMT',10.0,'suv','petrol',18.80000000000000071,5,86,'["city","first-car","adventure"]',6,7,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(30,'Tata','Nexon','XZ+(P) Turbo AT',15.0,'suv','petrol',17.39999999999999857,5,120,'["city","family","adventure"]',7,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(31,'Tata','Nexon','XZ+(P) Diesel AMT',15.80000000000000071,'suv','diesel',22.10000000000000143,5,115,'["highway","family","adventure"]',7,7,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(32,'Tata','Nexon EV','Empowered+ LR',19.0,'suv','electric',7.5,5,143,'["city","family"]',8,5,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(33,'Tata','Harrier','Fearless+ AT',25.5,'suv','diesel',16.80000000000000071,5,170,'["highway","family","adventure"]',8,6,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(34,'Tata','Safari','Accomplished+ AT',27.30000000000000071,'suv','diesel',16.30000000000000071,5,170,'["highway","family","adventure","luxury"]',9,6,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(35,'Tata','Curvv','Accomplished+ AT',19.5,'suv','diesel',19.60000000000000143,5,150,'["city","highway","family"]',8,6,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(36,'Tata','Curvv EV','Empowered+ LR',21.0,'suv','electric',7.0,5,167,'["city","highway","family"]',8,5,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(37,'Tata','Tiago EV','XZ+ Tech LR',11.90000000000000035,'hatchback','electric',8.0,4,75,'["city","first-car"]',6,5,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(38,'Mahindra','XUV300','W8(O) Turbo AT',13.5,'suv','petrol',17.0,5,130,'["city","family","adventure"]',7,6,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(39,'Mahindra','XUV700','AX7 AT Diesel',23.5,'suv','diesel',16.30000000000000071,5,185,'["highway","family","adventure","luxury"]',9,7,4.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(40,'Mahindra','XUV700','MX Petrol',14.0,'suv','petrol',15.5,5,200,'["highway","family","performance"]',7,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(41,'Mahindra','Thar','LX AT Diesel Hard Top',17.5,'suv','diesel',15.19999999999999929,3,130,'["offroad","adventure"]',5,9,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(42,'Mahindra','Thar Roxx','MX5 AX7L AT Diesel',22.5,'suv','diesel',15.80000000000000071,5,175,'["offroad","adventure","family"]',7,8,4.400000000000000356,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(43,'Mahindra','Scorpio N','Z8L AT Diesel',21.0,'suv','diesel',15.0,5,175,'["highway","offroad","family","adventure"]',7,8,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(44,'Mahindra','Scorpio Classic','S11',15.5,'suv','diesel',15.40000000000000035,3,132,'["highway","offroad","adventure"]',5,8,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(45,'Mahindra','Bolero','B6(O)',10.5,'suv','diesel',16.0,2,76,'["offroad","adventure"]',4,8,3.700000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(46,'Mahindra','XUV400 EV','EL Pro LR',18.19999999999999929,'suv','electric',7.599999999999999645,5,150,'["city","family"]',7,5,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(47,'Mahindra','BE 6','Pack Two',26.89999999999999858,'suv','electric',6.5,5,286,'["city","highway","performance","luxury"]',9,5,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(48,'Kia','Sonet','HTX+ Turbo DCT',14.5,'suv','petrol',18.30000000000000071,3,120,'["city","first-car"]',7,7,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(49,'Kia','Sonet','HTX+ Diesel AT',15.19999999999999929,'suv','diesel',19.0,3,115,'["city","highway","first-car"]',7,7,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(50,'Kia','Seltos','HTX+ Turbo DCT',19.80000000000000071,'suv','petrol',17.89999999999999857,4,160,'["city","highway","family"]',8,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(51,'Kia','Seltos','X-Line Diesel AT',20.5,'suv','diesel',18.69999999999999929,4,115,'["highway","family","adventure"]',8,7,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(52,'Kia','Carens','Luxury+ Turbo DCT',18.39999999999999857,'mpv','petrol',16.5,3,160,'["family","highway","city"]',8,6,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(53,'Kia','EV6','GT Line AWD',65.0,'suv','electric',5.799999999999999823,5,325,'["luxury","performance","highway"]',10,5,4.599999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(54,'Kia','EV9','GT Line',75.0,'suv','electric',5.200000000000000177,5,384,'["luxury","family","highway","performance"]',10,5,4.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(55,'Toyota','Glanza','V AMT',9.40000000000000035,'hatchback','petrol',22.89999999999999857,3,90,'["city","first-car"]',7,8,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(56,'Toyota','Urban Cruiser Hyryder','V Hybrid',18.60000000000000143,'suv','hybrid',27.89999999999999858,4,116,'["city","highway","family"]',8,8,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(57,'Toyota','Innova Hycross','ZX(O) Hybrid AT',28.30000000000000071,'mpv','hybrid',21.10000000000000143,5,186,'["family","highway","luxury"]',9,9,4.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(58,'Toyota','Innova Crysta','ZX AT Diesel',25.5,'mpv','diesel',16.0,4,150,'["family","highway"]',8,9,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(59,'Toyota','Fortuner','Legender AT 4x4',42.5,'suv','diesel',14.19999999999999929,4,204,'["highway","offroad","luxury","adventure"]',8,9,4.400000000000000356,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(60,'Toyota','Fortuner','4x2 AT Diesel',36.0,'suv','diesel',15.0,4,204,'["highway","family","luxury"]',8,9,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(61,'Toyota','Camry','Hybrid',48.0,'sedan','hybrid',19.10000000000000143,5,218,'["luxury","highway","city"]',10,7,4.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(62,'Toyota','Rumion','V AT',12.5,'mpv','petrol',20.30000000000000071,3,105,'["family","city"]',7,7,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(63,'Honda','City','ZX CVT',15.5,'sedan','petrol',18.39999999999999857,4,121,'["city","highway","family"]',8,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(64,'Honda','City Hybrid','ZX e:HEV',20.5,'sedan','hybrid',26.5,4,126,'["city","highway","family"]',8,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(65,'Honda','Amaze','VX CVT',9.90000000000000035,'sedan','petrol',18.60000000000000143,4,90,'["city","family","first-car"]',7,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(66,'Honda','Elevate','ZX CVT',16.0,'suv','petrol',15.30000000000000071,5,121,'["city","highway","family"]',8,6,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(67,'Volkswagen','Taigun','GT Plus DSG',19.19999999999999929,'suv','petrol',17.69999999999999929,5,150,'["city","highway","performance"]',8,6,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(68,'Volkswagen','Virtus','GT Plus DSG',18.80000000000000071,'sedan','petrol',18.10000000000000143,5,150,'["highway","city","performance"]',8,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(69,'Skoda','Kushaq','Style 1.5 TSI DSG',19.60000000000000143,'suv','petrol',17.0,5,150,'["city","highway","performance"]',8,5,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(70,'Skoda','Slavia','Style 1.5 TSI DSG',19.19999999999999929,'sedan','petrol',18.69999999999999929,5,150,'["highway","city","performance"]',8,5,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(71,'Skoda','Kodiaq','Style AT',39.89999999999999858,'suv','petrol',12.69999999999999929,5,190,'["highway","family","luxury"]',9,5,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(72,'Skoda','Superb','L&K AT',38.0,'sedan','petrol',14.09999999999999965,5,190,'["luxury","highway","city"]',10,5,4.400000000000000356,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(73,'MG','Hector','Sharp Pro AT',21.5,'suv','petrol',14.09999999999999965,4,170,'["family","highway","city"]',8,5,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(74,'MG','Hector Plus','Sharp Pro AT',22.5,'suv','petrol',14.09999999999999965,4,170,'["family","highway"]',8,5,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(75,'MG','Astor','Sharp AT',16.5,'suv','petrol',14.19999999999999929,4,140,'["city","highway"]',7,5,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(76,'MG','ZS EV','Exclusive Pro',25.0,'suv','electric',6.799999999999999823,4,176,'["city","family"]',8,4,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(77,'MG','Comet EV','Play',8.0,'hatchback','electric',9.199999999999999289,2,42,'["city","first-car"]',4,4,3.600000000000000088,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(78,'MG','Windsor EV','Essence',17.0,'suv','electric',7.099999999999999645,4,136,'["city","family"]',8,4,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(79,'Renault','Kiger','RXZ Turbo CVT',11.0,'suv','petrol',18.5,3,100,'["city","first-car"]',6,5,3.799999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(80,'Nissan','Magnite','XV Premium Turbo CVT',11.5,'suv','petrol',17.69999999999999929,3,100,'["city","first-car"]',6,5,3.899999999999999912,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(81,'Jeep','Compass','Model S Diesel AT 4x4',36.5,'suv','diesel',16.30000000000000071,4,170,'["offroad","highway","adventure","luxury"]',8,5,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(82,'Jeep','Meridian','Limited (O) Diesel AT',37.0,'suv','diesel',15.5,4,170,'["highway","offroad","family","luxury"]',8,4,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(83,'Citroen','C3','Shine Turbo',8.5,'hatchback','petrol',19.80000000000000071,2,110,'["city","first-car"]',6,4,3.700000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(84,'Citroen','C3 Aircross','Shine AT',13.0,'suv','petrol',18.10000000000000143,3,110,'["family","city"]',7,4,3.799999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(85,'Citroen','eC3','Shine',13.5,'hatchback','electric',8.5,3,57,'["city","first-car"]',6,3,3.5,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(86,'BYD','Atto 3','Superior',34.0,'suv','electric',6.200000000000000177,5,204,'["city","family","highway"]',9,4,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(87,'BYD','Seal','Performance',50.0,'sedan','electric',5.5,5,530,'["luxury","performance","highway"]',9,4,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(88,'BYD','eMAX 7','Premium',30.0,'mpv','electric',6.0,5,204,'["family","city","highway"]',9,4,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(89,'Mercedes-Benz','A-Class Limousine','A200d',45.0,'sedan','diesel',18.0,5,150,'["luxury","city","highway"]',9,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(90,'Mercedes-Benz','GLA','220d 4MATIC',52.0,'suv','diesel',17.0,5,190,'["luxury","city","highway"]',9,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(91,'BMW','2 Series Gran Coupe','220i M Sport',42.0,'sedan','petrol',14.5,5,190,'["luxury","performance","city"]',8,6,4.200000000000000177,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(92,'BMW','X1','sDrive20i M Sport',49.5,'suv','petrol',13.90000000000000035,5,204,'["luxury","city","highway"]',9,6,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(93,'BMW','iX1','xDrive30',66.5,'suv','electric',5.5,5,313,'["luxury","city","performance"]',9,5,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(94,'Maruti Suzuki','Celerio','ZXi+ AMT',6.900000000000000355,'hatchback','petrol',25.19999999999999929,2,67,'["city","first-car"]',5,7,3.799999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(95,'Maruti Suzuki','S-Presso','VXi+ AMT',5.799999999999999823,'hatchback','petrol',24.80000000000000071,1,67,'["city","first-car"]',4,7,3.600000000000000088,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(96,'Hyundai','Creta N Line','N8 Turbo DCT',21.5,'suv','petrol',17.0,5,160,'["city","highway","performance"]',8,7,4.299999999999999823,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(97,'Tata','Punch EV','Empowered+ LR',14.0,'suv','electric',8.0,5,122,'["city","first-car","adventure"]',7,5,4.099999999999999644,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(98,'Kia','Syros','HTX+ Turbo AT',14.80000000000000071,'suv','petrol',18.19999999999999929,4,120,'["city","first-car","family"]',7,6,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO cars VALUES(99,'Toyota','Taisor','S+ Turbo AT',11.5,'suv','petrol',21.5,3,100,'["city","first-car","highway"]',7,7,4.0,NULL,'2026-05-31 16:06:41');
INSERT INTO sqlite_sequence VALUES('cars',99);
COMMIT;
