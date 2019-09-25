import React from "react";
import "./cardList.css";
import { chineseCardsData } from "./data";
import Flashcard from "./flashcard";

export default class CardList extends React.Component {
  render() {
    return (
      <div>
        <div className="cardList">
          {chineseCardsData.map(v => {
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
