import React from "react";

export default class DeleteButton extends React.Component {
  clickedDelete() {
    this.props.onClickDelete();
  }
  render() {
    return (
      <button
        onClick={() => this.clickedDelete()}
        style={{ backgroundColor: "Red" }}
        className="deleteButton"
      >
        Delete
      </button>
    );
  }
}
