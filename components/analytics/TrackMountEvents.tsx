"use client";

import { useEffect } from "react";
import {
  trackFieldGuideOpen,
  trackCalculatorOpen,
} from "@/lib/analytics";

type TrackFieldGuideOpenProps = {
  pageSection?: string;
};

/** Fires field_guide_open once per session for the Field Guide surface. */
export function TrackFieldGuideOpen({
  pageSection = "field_guide",
}: TrackFieldGuideOpenProps) {
  useEffect(() => {
    trackFieldGuideOpen(pageSection);
  }, [pageSection]);

  return null;
}

type TrackCalculatorOpenProps = {
  calculatorType: string;
};

/** Fires calculator_open once per session per calculator type. */
export function TrackCalculatorOpen({
  calculatorType,
}: TrackCalculatorOpenProps) {
  useEffect(() => {
    trackCalculatorOpen(calculatorType);
  }, [calculatorType]);

  return null;
}
