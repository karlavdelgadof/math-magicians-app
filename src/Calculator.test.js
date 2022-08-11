import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./components/Calculator.js";

describe("User makes a calculation", () => {
  test("Key 2, key 4 divide operation sign by key 3 ", () => {
    const component = render(<Calculator />);
    const calcDisplay = document.getElementById("calc-display");

    const keyTwo = screen.getByText("2");
    const keyFour = screen.getByText("4");
    const operator = screen.getByText("÷");
    const keyThree = screen.getByText("3");

    const equalOperator = screen.getByText("=");

    fireEvent.click(keyTwo);
    fireEvent.click(keyFour);
    fireEvent.click(operator);
    fireEvent.click(keyThree);
    fireEvent.click(equalOperator);

    expect(calcDisplay.textContent).toBe("8");
  })
});