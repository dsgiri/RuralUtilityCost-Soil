export interface ToolConfig {
  id: string;
  title: string;
  description: string;
  category: string;
  path: string;
}

export const TOOLS: ToolConfig[] = [
  {
    id: "soil-test-converter",
    title: "Soil Test Interpreter",
    description: "Convert soil test data into recommended application rates and view interpretation scales.",
    category: "test interpretation",
    path: "/test",
  },
  {
    id: "fertilizer-calculator",
    title: "NPK Fertilizer Calculator",
    description: "Calculate exact fertilizer needs from crop nutrient recommendations.",
    category: "fertilizer recommendation",
    path: "/recommend",
  },
  {
    id: "nutrient-removal",
    title: "Nutrient Removal Calculator",
    description: "Estimate nutrient removal by crop type and yield.",
    category: "nutrient removal",
    path: "/removal",
  },
  {
    id: "cost-per-nutrient",
    title: "Cost Per Pound Builder",
    description: "Calculate the exact cost per pound of actual N, P, or K for any fertilizer.",
    category: "cost per nutrient",
    path: "/cost",
  },
  {
    id: "product-comparison",
    title: "Fertilizer Product Compare",
    description: "Compare multiple fertilizer products by actual nutrient cost.",
    category: "cost per nutrient",
    path: "/compare",
  },
  {
    id: "lime-planner",
    title: "Lime Requirement Estimator",
    description: "Estimate lime needs based on soil pH, buffer pH, and target pH.",
    category: "lime",
    path: "/lime",
  }
];

export const CATEGORIES = Array.from(new Set(TOOLS.map((t) => t.category)));
