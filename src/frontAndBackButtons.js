import React from "react";

export default class FrontAndbackButtons extends React.Component {
  clickedFront() {
    this.props.onClickFront();
  }
  clickedBack() {
    this.props.onClickBack();
  }
  render() {
    return (
      <div className="frontAndBackButtons">
        <button
          onClick={() => {
            this.clickedFront();
          }}
          style={{ backgroundColor: "greenyellow" }}
          className="frontButton"
        >
          Front
        </button>
        <button
          onClick={() => {
            this.clickedBack();
          }}
          style={{ backgroundColor: "hotpink" }}
          className="backButton"
        >
          Back
        </button>
      </div>
    );
  }
}
