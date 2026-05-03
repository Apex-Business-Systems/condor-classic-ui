import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { C5ModifyIncidentReference } from "../src/examples/C5ModifyIncidentReference";

describe("C5ModifyIncidentReference", () => {
  it("uses classic primitives backed by native controls", () => {
    const { container } = render(<C5ModifyIncidentReference />);

    expect(container.querySelectorAll("button.btn").length).toBeGreaterThan(0);
    expect(container.querySelectorAll("input.input").length).toBeGreaterThan(0);
    expect(container.querySelectorAll("textarea.textarea").length).toBe(1);
    expect(container.querySelectorAll("select.dropdown-select").length).toBeGreaterThan(0);
    expect(container.querySelector("table.detailed-table")).toBeTruthy();
    expect(container.querySelector("[class*='Mui']")).toBeFalsy();
  });

  it("keeps scroll ownership inside window regions", () => {
    const { container } = render(<C5ModifyIncidentReference />);

    expect(container.querySelector("[data-testid='activity-scroll-region']")).toBeTruthy();
    expect(container.querySelector("[data-testid='comments-scroll-region']")).toBeTruthy();
    expect(container.querySelector("[data-testid='c5-reference-window']")?.className).toContain("c5-reference");
  });
});
