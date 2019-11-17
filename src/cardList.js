import React from "react";
import "./CSS/cardList.css";
import Flashcard from "./flashcard";

//functional component because it doesn't depends on a state or life-cycle
export default function CardList(props) {
  return (
    <div>
      <div className="cardList">
        {props.flashcard.map(v => {
          return (
            <p key={v._id || v.id}>
              <div>
                <Flashcard
                  key={v._id || v.id}
                  card={v}
                  fontClassName={props.fontClassName}
                />
                <button
                  className="deleteFlashcardButton"
                  style={{ backgroundColor: "Red" }}
                  onClick={() => props.onDelete(v._id || v.id)}
                >
                  Delete flashcard
                </button>
              </div>
            </p>
          );
        })}
      </div>
    </div>
  );
}
