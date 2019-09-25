import React from "react";
import "./levelSelector.css";

export default class LevelSelector extends React.Component {
  render() {
    return (
      <div className="levelSelector">
        <p className="levelSelectHeader">THIS IS A LEVEL FILTER COMPONENT</p>
        <button
          className="levelSelectButton"
          onClick={() => {
            this.props.onLevelSelect("level1");
          }}
        >
          Level 1
        </button>
        <button className="levelSelectButton">Level 2</button>
        <button className="levelSelectButton">Level 3</button>
        <button className="levelSelectButton">Level 4</button>
        <button className="levelSelectButton">Level 5</button>
        <button className="levelSelectButton">Level 6</button>
      </div>
    );
  }
}
