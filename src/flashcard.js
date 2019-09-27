import React from "react";
import FlashcardFront from "./flashcardFront";
import FlashcardBack from "./flashcardBack";
import FrontAndBackButtons from "./frontAndBackButtons";
import "./flashcard.css";
import ReactCardFlip from "react-card-flip";
// https://www.npmjs.com/package/react-card-flip

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "front" };
  }
  onClickBack() {
    this.setState({ display: "back" });
  }
  onClickFront() {
    this.setState({ display: "front" });
  }
  render() {
    return (
      <div className="flashcard">
        <ReactCardFlip
          isFlipped={this.state.display === "back" ? true : false}
          flipDirection="vertical"
        >
          <FlashcardFront
            className="flashcardFront"
            key="front"
            character={this.props.card.character}
            fontClassName={this.props.fontClassName}
          />
          <FlashcardBack
            className="flashcardBack"
            key="back"
            pinyin={this.props.card.pinyin}
            meaning={this.props.card.meaning}
            level={this.props.card.level}
            exampleSentence={this.props.card.exampleSentence}
          />
        </ReactCardFlip>
        <FrontAndBackButtons
          className="frontAndBackButtons"
          onClickBack={() => {
            this.onClickBack();
          }}
          onClickFront={() => {
            this.onClickFront();
          }}
        />
      </div>
    );
  }
}
