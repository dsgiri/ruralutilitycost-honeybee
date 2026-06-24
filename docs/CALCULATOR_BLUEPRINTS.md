# Calculator Blueprints

This document outlines the data models, inputs, algorithms, and outputs for all calculators in the Honeybee module. It serves as the implementation specification (blueprint) for the interactive React components.

## 1. Honey Production Estimator (`t-honey-estimator`)
**Category:** Honey Production
**Goal:** Estimate potential honey harvest based on hive conditions and environment.

* **Inputs:**
  * Number of Active Hives (Number, min 0)
  * Colony Strength (Select: Weak [-30%], Average [Base], Strong [+40%])
  * Nectar Flow Quality (Select: Poor [-40%], Average [Base], Excellent [+50%])
  * Foraging Season Length (Select: Short [-20%], Average [Base], Long [+20%])
* **Constants:**
  * Base yield per average hive = 60 lbs
* **Algorithm:**
  * `YieldPerHive = BaseYield * StrengthModifier * FlowModifier * SeasonModifier`
  * `TotalYield = YieldPerHive * NumberOfHives`
* **Outputs:**
  * Total Estimated Harvest (lbs)
  * Average Yield per Hive (lbs)
  * UI Suggestion: Display a jar equivalent (e.g., "≈ X 1lb jars").

---

## 2. Hive Cost Calculator (`t-hive-cost`)
**Category:** Cost Planning
**Goal:** Budget for apiary equipment, bees, and protective gear.

* **Inputs:**
  * Number of New Hives (Number, min 0)
  * Hive Configuration (Select: 2 Deeps, 1 Deep + 2 Mediums)
  * Woodware Quality (Select: Budget, Standard, Premium)
  * Source of Bees (Select: Package, Nuc, Swarm [Free], None)
  * Include Protective Gear & Tools? (Checkbox: Suit, Smoker, Hive Tool)
* **Constants (Approximate pricing):**
  * Deep Box + Frames: Budget $40, Standard $55, Premium $75
  * Medium Box + Frames: Budget $35, Standard $45, Premium $60
  * Bottom/Top Covers: Budget $30, Standard $40, Premium $60
  * Bees: Package $150, Nuc $180, Swarm $0
  * Gear Bundle: $120
* **Algorithm:**
  * `CostPerHive = (Boxes * BoxPrice) + CoversPrice + BeePrice`
  * `TotalCost = (CostPerHive * NumberOfHives) + (IncludeGear ? GearBundle : 0)`
* **Outputs:**
  * Total Setup Cost ($)
  * Estimated Cost per Hive ($)
  * Itemized breakdown table.

---

## 3. Swarm Timing Planner (`t-swarm-planner`)
**Category:** Swarm Timing
**Goal:** Forecast swarm behavior and trigger preventative management tasks.

* **Inputs:**
  * Date of First Spring Bloom (Date picker or "Average last frost date")
  * Colony Winter Survival Strength (Select: Weak, Average, Strong)
* **Algorithm:**
  * Strong Colonies: High risk begins 4 weeks after first bloom.
  * Average Colonies: High risk begins 6 weeks after first bloom.
  * Weak Colonies: High risk begins 8 weeks after first bloom.
  * *Swarm Preparation Window* = 14 days before high risk date (time to split/add space).
* **Outputs:**
  * "Action Required By" Date (Swarm prep window).
  * "Peak Swarm Risk" Date Range.
  * Checklist of swarm prevention steps (e.g., add supers, checkerboarding, split).

---

## 4. Queen Development Timeline (`t-queen-timeline`)
**Category:** Queen Timing
**Goal:** Track the 16-day cycle from egg to emerged queen.

* **Inputs:**
  * Starting Event (Select: Egg Laid, Grafting [Day 4], Hive Split / Queenless [Assumes 2-3 day old larva, Day 4-5])
  * Event Date (Date picker)
* **Constants (Queen Lifecycle):**
  * Day 0: Egg Laid
  * Day 3: Hatches to Larva
  * Day 8: Cell Capped
  * Day 16: Queen Emerges
  * Day 20-24: Mating Flights
  * Day 28+: Starts Laying Eggs
* **Algorithm:**
  * Add relative days to the `Event Date` based on the `Starting Event` offset.
* **Outputs:**
  * Visual timeline showing specific dates for: Capping, Emergence, Mating, Laying.
  * Highlight "Do Not Disturb" window (Days 14 - 24) to prevent queen loss during emergence and mating.

---

## 5. Sugar Syrup Mixing Calculator (`t-syrup-mixer`)
**Category:** Feed / Sugar Solution
**Goal:** Calculate precise ratios for feeding bees.

* **Inputs:**
  * Target Feed Type (Select: 1:1 Spring/Stimulative, 2:1 Fall/Winter Weight)
  * Input Method (Toggle: "I have X amount of sugar", "I need X gallons of syrup")
  * Amount (Number)
* **Algorithm:**
  * *1:1 Ratio*: 1 lb sugar + 1 pt (1 lb) water. Yields ~1.5 pints of syrup.
  * *2:1 Ratio*: 2 lb sugar + 1 pt (1 lb) water. Yields ~2 pints of syrup.
  * If calculating from sugar weight: Divide by ratio to get water volume.
  * If calculating from target volume: Reverse calculate required sugar/water based on yield multipliers.
* **Outputs:**
  * Required Sugar (lbs)
  * Required Water (pints/gallons)
  * Final Expected Volume (gallons).

---

## 6. Apiary Setup Planner (`t-apiary-setup`)
**Category:** Hive Planning
**Goal:** Determine spacing and layout requirements.

* **Inputs:**
  * Number of Hives (Number, min 1)
  * Layout Style (Select: Straight Line, U-Shape, Multiple Rows)
* **Constants:**
  * Hive spacing: 3 ft between hives.
  * Row spacing: 6 ft between rows (if multiple).
  * Front flight path clearance: 15 ft.
  * Rear working space: 4 ft.
* **Algorithm:**
  * Calculate row lengths based on style and hive spacing.
  * Calculate total footprint (`(Width + working space) * (Length + flight path)`).
* **Outputs:**
  * Total Required Space (Sq Ft).
  * Ideal width x depth footprint.
  * Setup recommendations (windbreaks, water source distance).

---

## 7. Honey Harvest Yield Calculator (`t-harvest-yield`)
**Category:** Harvest Planning
**Goal:** Estimate final bottled volume from pulled supers.

* **Inputs:**
  * Deep Supers - 8/10 Frame (Number)
  * Medium Supers - 8/10 Frame (Number)
  * Shallow Supers - 8/10 Frame (Number)
  * Extraction Efficiency (Select: Commercial Extractor [95%], Hand Crank [85%], Crush & Strain [75%])
* **Constants:**
  * Full Deep Super = 70 lbs raw
  * Full Medium Super = 45 lbs raw
  * Full Shallow Super = 30 lbs raw
  * 1 Gallon Honey = 12 lbs
* **Algorithm:**
  * `RawYield = (Deeps*70) + (Mediums*45) + (Shallows*30)`
  * `FinalYield = RawYield * ExtractionEfficiency`
* **Outputs:**
  * Total Extracted Weight (lbs).
  * Gallon Equivalent.
  * Container Estimate (e.g., How many 16oz or 32oz jars this fills).

---

## 8. Seasonal Hive Action Checklist (`t-season-checklist`)
**Category:** Season Planning
**Goal:** Month-to-month management strategy based on climate.

* **Inputs:**
  * Region Climate (Select: Cold Winter [Zone 3-5], Moderate [Zone 6-8], Warm/No Winter [Zone 9+])
  * Current Month (Select)
* **Algorithm:**
  * Map the selected month and climate to a JSON dictionary of tasks.
  * Categories of tasks per month: Inspections, Feeding, Mite Management, Equipment.
* **Outputs:**
  * High-priority checklist for the selected month.
  * "Looking ahead" preview for the next month.
