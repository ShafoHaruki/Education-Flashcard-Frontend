import React from "react";
import "./CSS/cardList.css";
// import { chineseCardsData } from "./data";
import Flashcard from "./flashcard";
import axios from "axios";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcard: []
    };
  }
  getFlashcard = () => {
    const url = "http://localhost:3000/flashcards";
    axios
      .get(url)
      .then(res => {
        console.log(res)
        this.setState({ flashcard: res.data });
      })
      .catch(err => {
        console.error(err);
        this.setState({ flashcard: [] });
      });
  };

  componentDidMount() {
    this.getFlashcard();
  }
  render() {
    return (
      <div>
        <div className="cardList">
          {this.state.flashcard.map(v => {
            return (
              <Flashcard
                key={v.id}
                card={v}
                fontClassName={this.props.fontClassName}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
