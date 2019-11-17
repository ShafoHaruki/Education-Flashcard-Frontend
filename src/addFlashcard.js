import React from "react";

export default class AddFlashcard extends React.Component {
    addedFlashcard() {
      this.props.onClickAddFlashcard();
    }
    render() {
      return (
        <button
          onClick={() => this.addedFlashcard()}
          style={{ backgroundColor: "green" }}
          className="addFlashcard"
        >
          Delete
        </button>
      );
    }
  }
  