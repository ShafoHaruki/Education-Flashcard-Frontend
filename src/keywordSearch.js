import React from "react";
import "./keywordSearch.css";

export default class KeywordSelector extends React.Component {
  render() {
    return (
      <div className="keywordSelector">
        <p className="keywordSearchHeader">
          THIS IS A KEYWORD SEARCH COMPONENT
        </p>
        <input type="text" placeholder="Type here to filter cards by keyword" />
        <button>Search</button>
      </div>
    );
  }
}
