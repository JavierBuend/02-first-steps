import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const productName = "Test item";
    render(<ItemCounter productName={productName} quantity={1} />);

    expect(screen.getByText(productName)).toBeDefined();
    expect(screen.getByText(productName)).not.toBeNull();
  });

  test("should render with with custom cuantity", () => {
    const productName = "Test item";
    const quantity = 10;
    render(<ItemCounter productName={productName} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });
});
