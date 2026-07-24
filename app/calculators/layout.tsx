import { CalculatorRouteAnalytics } from "@/components/analytics/CalculatorRouteAnalytics";

export default function CalculatorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CalculatorRouteAnalytics />
      {children}
    </>
  );
}
