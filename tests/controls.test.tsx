import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ClassicButton,
  ClassicFieldset,
  ClassicInput,
  ClassicSelect,
  ClassicTextarea
} from "../src";

describe("classic controls", () => {
  it("ClassicButton includes btn and preserves caller className", () => {
    render(
      <ClassicButton className="caller-class" type="button">
        Click me
      </ClassicButton>
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("caller-class");
  });

  it("ClassicInput includes input class", () => {
    render(<ClassicInput aria-label="Username" />);

    expect(screen.getByRole("textbox", { name: "Username" })).toHaveClass("input");
  });

  it("ClassicTextarea includes textarea class", () => {
    render(<ClassicTextarea aria-label="Description" />);

    expect(screen.getByRole("textbox", { name: "Description" })).toHaveClass("textarea");
  });

  it("ClassicSelect renders dropdown structure", () => {
    const { container } = render(
      <ClassicSelect aria-label="Favorite theme">
        <option value="win9x">Windows 9x</option>
      </ClassicSelect>
    );

    expect(container.querySelector(".dropdown")).toBeInTheDocument();
    expect(container.querySelector("select.dropdown-select")).toBeInTheDocument();
    expect(container.querySelector('.dropdown-button[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("ClassicFieldset renders legend", () => {
    render(
      <ClassicFieldset legend="Profile">
        <ClassicInput aria-label="First name" />
      </ClassicFieldset>
    );

    expect(screen.getByText("Profile", { selector: "legend" })).toBeInTheDocument();
  });
});
