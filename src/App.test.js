import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import TopNav from "./topNav";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it("should display top Nav", () => {
  //   const { getByText } = render(<App />);
  //   expect(
  //     getByText("Let's learn (basic) Chinese through flashcards!")
  //   ).toBeInTheDocument();
  // });
});

// it("should have a RESET button", () => {
//   const { getByText } = render(<Counter />);
//   expect(getByText("RESET")).toBeInTheDocument();
// });
