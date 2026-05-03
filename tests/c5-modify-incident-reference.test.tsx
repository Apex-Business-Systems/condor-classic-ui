import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { C5ModifyIncidentReference } from "../src/examples/C5ModifyIncidentReference";

describe("C5ModifyIncidentReference", () => {
  it("uses classic primitives backed by native controls and detailed tables", () => {
    const { container } = render(<C5ModifyIncidentReference />);

    expect(screen.getByRole("button", { name: "Attach" }).tagName).toBe("BUTTON");
    expect(screen.getByRole("textbox", { name: "Dispatch Unit" }).tagName).toBe("INPUT");
    expect(screen.getByRole("textbox", { name: "New Comment" })).toHaveClass("textarea");
    expect(container.querySelectorAll("select.dropdown-select").length).toBeGreaterThan(0);
    expect(container.querySelectorAll("table.detailed-table").length).toBe(2);
  });

  it("avoids decorative hazard glyphs and uses compact attached unit tokens", () => {
    render(<C5ModifyIncidentReference />);

    expect(screen.getAllByText("Premise Hazard:").length).toBeGreaterThan(0);
    expect(screen.queryByText("⚠")).not.toBeInTheDocument();

    const units = screen.getAllByRole("list", { name: "Attached units" })[0];
    expect(units.querySelectorAll(".c5-unit-token").length).toBe(4);
    expect(screen.getAllByText("ETA 02:14").length).toBeGreaterThan(0);
  });

  it("does not render Material UI classes and keeps scrolling internal", () => {
    const { container } = render(<C5ModifyIncidentReference />);

    expect(container.querySelector('[class*="Mui"]')).not.toBeInTheDocument();
    expect(container.querySelector(".c5-comments-scroll")).toHaveClass("c5-scroll");
    expect(container.querySelector(".c5-activity-scroll")).toHaveClass("c5-scroll");
    expect(container.querySelector(".c5-body")?.className).toContain("c5-body");
  });
});
