import React from "react";
import FontSelector from "../fontSelector";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("one is equal to one", () => {
  expect(1).toEqual(1);
});

it("should show: 'Font 1 : Default Font'", () => {
  const { getByText } = render(<FontSelector />);
  expect(getByText("Font 1 : Default Font")).toBeInTheDocument();
});

it("should show: 'Font 2 : Liu Jian Mao Cao'", () => {
  const { getByText } = render(<FontSelector />);
  expect(getByText("Font 2 : Liu Jian Mao Cao")).toBeInTheDocument();
});

it("should show: 'Font 3 : ZCOOL KuaiLe'", () => {
  const { getByText } = render(<FontSelector />);
  expect(getByText("Font 3 : ZCOOL KuaiLe")).toBeInTheDocument();
});

it("should show: 'Font 4 : Long Cang'", () => {
  const { getByText } = render(<FontSelector />);
  expect(getByText("Font 4 : Long Cang")).toBeInTheDocument();
});

it("should show: 'Font 5 : Ma Shan Zheng'", () => {
  const { getByText } = render(<FontSelector />);
  expect(getByText("Font 5 : Ma Shan Zheng")).toBeInTheDocument();
});
