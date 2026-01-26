import { fireEvent, render, screen } from "@testing-library/react";
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

  test("should increase count when +1 is pressed", () => {
    render(<ItemCounter productName={"Test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 is pressed", () => {
    //quantity = 5
    const quantity = 5;
    render(<ItemCounter productName={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 is pressed and quantity is 1", () => {
    const quantity = 1;
    render(<ItemCounter productName={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red when count is 1", () => {
    const quantity = 1;
    const productName = "Test item";
    render(<ItemCounter productName={"Test item"} quantity={quantity} />);

    const itemText = screen.getByText(productName);

    expect(itemText.style.color).toBe("red");
  });

  test("should change to black when count is greate than 1", () => {
    const quantity = 2;
    const productName = "Test item";
    render(<ItemCounter productName={"Test item"} quantity={quantity} />);

    const itemText = screen.getByText(productName);

    expect(itemText.style.color).toBe("black");
  });
});
