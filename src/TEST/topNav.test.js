import React from "react";
import TopNav from "../topNav";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("mathCalculations", () => {
  it("2 + 2 should return 4", () => {
    expect(2 + 2).toEqual(4);
  });
  it("5 minus 2 should return 3", () => {
    expect(5 - 2).toEqual(3);
  });
  it("4 times 3 should return 12", () => {
    expect(4 * 3).toEqual(12);
  });
  it("20 devide 5 should return 4", () => {
    expect(20 / 5).toEqual(4);
  });
});

it("should display 'Let's learn (basic) Chinese through flashcards!'", () => {
  const { getByText } = render(<TopNav />);
  expect(
    getByText("Let's learn (basic) Chinese through flashcards!")
  ).toBeInTheDocument();
});
