import React from "react";
import FlashcardFront from "./flashcardFront";
import FlashcardBack from "./flashcardBack";
import FrontAndBackButtons from "./frontAndBackButtons";
import "./CSS/flashcard.css";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
// https://www.npmjs.com/package/react-card-flip

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "front", flashcard: [] };
  }
  onClickBack() {
    this.setState({ display: "back" });
  }
  onClickFront() {
    this.setState({ display: "front" });
  }

  fetchAllFlashcards = () => {
    const url = "http://localhost:3000/flashcards";
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        this.setState({ flashcard: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  onClickDelete = id => {
    const url = "http://localhost:3000/flashcards/" + id;
    axios
      .delete(url, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.fetchAllFlashcards();
      })
      .catch(err => {
        console.error(err);
      });
  };
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
