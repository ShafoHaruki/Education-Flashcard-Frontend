import React from "react";
import "./App.css";
// import KeywordSearch from "./keywordSearch";
// import LevelSelector from "./levelSelector";
import FontSelector from "./fontSelector";
import CardList from "./cardList";
import TopNav from "./topNav";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontClassName: ""
    };
  }

  handleChangeFontName(fontName) {
    this.setState({ fontClassName: fontName });
  }

  render() {
    return (
      <div className="lowerPortion">
        <CardList fontClassName={this.state.fontClassName} />
        <div className="rightNav">
          <FontSelector
            onFontSelect={font => this.handleChangeFontName(font)}
          />
          {/* <KeywordSearch /> */}
          {/* <LevelSelector /> */}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="topNavAndLowerPortion">
        <TopNav />
        <Content />
      </div>
    </div>
  );
}

export default App;
