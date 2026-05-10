import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClassicScrollRegion, ClassicUnitToken } from "../src";

describe("ClassicUnitToken", () => {
  it("renders unit id", () => {
    render(<ClassicUnitToken unitId="E201" status="ENROUTE" />);
    expect(screen.getByText("E201")).toBeInTheDocument();
  });

  it("renders status", () => {
    render(<ClassicUnitToken unitId="E201" status="ENROUTE" />);
    expect(screen.getAllByText("ENROUTE").length).toBeGreaterThan(0);
  });

  it("renders context/timer", () => {
    render(<ClassicUnitToken unitId="E201" status="ENROUTE" context="ETA 02:14" />);
    expect(screen.getByText("ETA 02:14")).toBeInTheDocument();
  });

  it("uses native semantic markup", () => {
    const { container } = render(<ClassicUnitToken unitId="E201" status="ENROUTE" />);
    expect(container.querySelector("article")).toBeInTheDocument();
  });

  it("does not render MUI classes", () => {
    const { container } = render(<ClassicUnitToken unitId="E201" status="ENROUTE" />);
    expect(container.querySelector('[class*="Mui"]')).not.toBeInTheDocument();
  });
});

describe("ClassicScrollRegion", () => {
  it("renders a scroll region container", () => {
    const { container } = render(<ClassicScrollRegion aria-label="Scrollable">Content</ClassicScrollRegion>);
    const el = screen.getByLabelText("Scrollable");
    expect(el).toBeInTheDocument();
    expect(container.querySelector(".classic-scroll-region")).toBeInTheDocument();
  });
});
