export type CalculatorId =
  | "strength"
  | "protein"
  | "calories"
  | "macros"
  | "waist-height"
  | "lean-mass";

export type CalculatorMeta = {
  id: CalculatorId;
  slug: string;
  title: string;
  summary: string;
  status: "planned" | "development" | "available";
};
