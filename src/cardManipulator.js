import React from "react";
import axios from "axios";

export default class CardManipulator extends React.Component {
  onClickAdd = () => {
    const url = "http://localhost:3000/flashcards/new";
    axios.post(
      url,
      {
        id: 888,
        character: "888",
        pinyin: "pinyin7",
        meaning: "7meaning",
        level: 4,
        exampleSentence: {
          exampleChineseSentence: "a777",
          exampleChinesePinyin: "b777",
          exampleEnglishTranslation: "c777"
        }
      },
      { withCredentials: true }
    );
  };
  render() {
    return (
      <div>
        <p>This is the Card Manipulator section.</p>
        <p>Input fields below to </p>
        <input placeholder="Character" />
        <input placeholder="Pinyin" />
        <input placeholder="Meaning" />
        <input placeholder="Level" />
        <input placeholder="Example Chinese Sentence" />
        <input placeholder="Example Chinese Pinyin" />
        <input placeholder="Example English Translation" />
        <p>Click the button below to add a card</p>
        <button onClick={this.onClickAdd}>Add flashcard</button>
      </div>
    );
  }
}
