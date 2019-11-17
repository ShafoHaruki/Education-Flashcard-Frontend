import React from "react";
import axios from "axios";

export default class CardManipulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "",
      pinyin: "",
      meaning: "",
      level: "",
      exampleChineseSentence: "",
      exampleChinesePinyin: "",
      exampleEnglishTranslation: "",
      cardManipulatorStatus: "Click the button below to add a card"
    };
  }
  onClickAdd = () => {
    const url = "http://localhost:3000/flashcards/new";
    axios
      .post(
        url,
        {
          character: this.state.character,
          pinyin: this.state.pinyin,
          meaning: this.state.meaning,
          level: this.state.level,
          exampleSentence: {
            exampleChineseSentence: this.state.exampleChineseSentence,
            exampleChinesePinyin: this.state.exampleChinesePinyin,
            exampleEnglishTranslation: this.state.exampleEnglishTranslation
          }
        },
        { withCredentials: true }
      )
      .then(res => {
        this.props.onAdd(res.data);
      })
      .then(res => {
        this.setState({
          character: "",
          pinyin: "",
          meaning: "",
          level: "",
          exampleChineseSentence: "",
          exampleChinesePinyin: "",
          exampleEnglishTranslation: ""
        });
      })
      .then(res => {
        this.setState({
          cardManipulatorStatus: "Card added, try adding more!"
        })
      })
  };
  characterInputHandler = character => {
    this.setState({ character: character.target.value });
  };
  pinyinInputHandler = pinyin => {
    this.setState({ pinyin: pinyin.target.value });
  };
  meaningInputHandler = meaning => {
    this.setState({ meaning: meaning.target.value });
  };
  levelInputHandler = level => {
    this.setState({ level: level.target.value });
  };
  exampleChineseSentenceInputHandler = exampleChineseSentence => {
    this.setState({
      exampleChineseSentence: exampleChineseSentence.target.value
    });
  };
  exampleChinesePinyinInputHandler = exampleChinesePinyin => {
    this.setState({ exampleChinesePinyin: exampleChinesePinyin.target.value });
  };
  exampleEnglishTranslationInputHandler = exampleEnglishTranslation => {
    this.setState({
      exampleEnglishTranslation: exampleEnglishTranslation.target.value
    });
  };

  render() {
    return (
      <div>
        <p>This is the Card Manipulator section.</p>
        <input
          value={this.state.character}
          onChange={this.characterInputHandler}
          type="text"
          placeholder="Character"
        />
        <input
          value={this.state.pinyin}
          onChange={this.pinyinInputHandler}
          type="text"
          placeholder="Pinyin"
        />
        <input
          value={this.state.meaning}
          onChange={this.meaningInputHandler}
          type="text"
          placeholder="Meaning"
        />
        <input
          value={this.state.level}
          onChange={this.levelInputHandler}
          type="text"
          placeholder="Level"
        />
        <input
          value={this.state.exampleChineseSentence}
          onChange={this.exampleChineseSentenceInputHandler}
          type="text"
          placeholder="Example Chinese Sentence"
        />
        <input
          value={this.state.exampleChinesePinyin}
          onChange={this.exampleChinesePinyinInputHandler}
          type="text"
          placeholder="Example Chinese Pinyin"
        />
        <input
          value={this.state.exampleEnglishTranslation}
          onChange={this.exampleEnglishTranslationInputHandler}
          type="text"
          placeholder="Example English Translation"
        />
        {/* <p>Click the button below to add a card</p> */}
        <p>{this.state.cardManipulatorStatus}</p>
        <button onClick={this.onClickAdd}>Add flashcard</button>
      </div>
    );
  }
}
