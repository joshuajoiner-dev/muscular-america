import type { CalculatorMeta } from "@/types";

export const calculators: CalculatorMeta[] = [
  {
    id: "strength",
    slug: "strength",
    title: "Strength",
    summary: "Estimate relative strength from lifts and body mass.",
    status: "planned",
  },
  {
    id: "protein",
    slug: "protein",
    title: "Protein",
    summary: "Estimate daily protein ranges from body mass and goals.",
    status: "planned",
  },
  {
    id: "calories",
    slug: "calories",
    title: "Calories",
    summary: "Estimate energy needs from common predictors.",
    status: "planned",
  },
  {
    id: "macros",
    slug: "macros",
    title: "Macros",
    summary: "Distribute calories across protein, carbohydrate, and fat.",
    status: "planned",
  },
  {
    id: "waist-height",
    slug: "waist-height",
    title: "Waist-to-Height Ratio",
    summary: "Compute waist-to-height ratio with clear units and limits.",
    status: "planned",
  },
  {
    id: "lean-mass",
    slug: "lean-mass",
    title: "Lean Mass",
    summary: "Estimate lean mass from common anthropometric inputs.",
    status: "planned",
  },
];
