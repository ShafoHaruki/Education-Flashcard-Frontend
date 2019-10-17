import React from "react";
import "./CSS/flashcardBack.css";

export default class FlashcardBack extends React.Component {
  render() {
    return (
      <div className="flashcardBackBody">
        <div className="flashcardBackInfo">
          <p>{this.props.pinyin}</p>
          <p>{this.props.meaning}</p>
          <p>{this.props.level}</p>
          <p>{this.props.exampleSentence.exampleChineseSentence}</p>
          <p>{this.props.exampleSentence.exampleChinesePinyin}</p>
          <p>{this.props.exampleSentence.exampleEnglishTranslation}</p>
        </div>
      </div>
    );
  }
}
