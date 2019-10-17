import React from "react";
import CardList from "../cardList";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("2 + 2 should return 4", () => {
  expect(2 + 2).toEqual(4);
});

it("Shows a card with 不好意思", () => {
  const { getByText } = render(<CardList />);
  expect(getByText("不好意思")).toBeInTheDocument();
});

// it("xxx", () => {
//   const { getByText } = render(<CardList />);
//   fireEvent.click(getByText("Back")).toBeInTheDocument;
//   expect(getByText("meaning")).toBeInTheDocument();
// });


