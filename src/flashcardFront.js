import React from "react";
import "./flashcardFront.css";

export default class FlashcardFront extends React.Component {
  render() {
    return (
      <div className="flashcardFrontBody">
        <div>
          <p className={`fontForChineseCharacters ${this.props.fontClassName}`}>
            {this.props.character}
          </p>
        </div>
      </div>
    );
  }
}
