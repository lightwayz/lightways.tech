"use client";
export type ExperiencePanel = "enquiry" | "preferences" | "gallery";
export function openExperience(panel: ExperiencePanel, trigger?: HTMLElement, startingPoint?: string) {
  window.dispatchEvent(new CustomEvent("lightways:experience", { detail: { panel, trigger, startingPoint } }));
}
export const preferenceKey = "lightways:motion:v1";
export function storedMotion(): "auto" | "reduced" {
  try { return window.localStorage.getItem(preferenceKey) === "reduced" ? "reduced" : "auto"; }
  catch { return "auto"; }
}
