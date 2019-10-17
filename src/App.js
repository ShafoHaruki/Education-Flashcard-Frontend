import React from "react";
import "./CSS/App.css";
import FontSelector from "./fontSelector";
import CardList from "./cardList";
import TopNav from "./topNav";
import MemberLogin from "./memberLogin";
import CardManipulator from "./cardManipulator";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontClassName: "",
      flashcard: []
    };
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
        this.setState({ flashcard: [] });
      });
  };

  handleChangeFontName(fontName) {
    this.setState({ fontClassName: fontName });
  }
  render() {
    return (
      <div className="lowerPortion">
        <CardList fontClassName={this.state.fontClassName} />
        <div className="rightNav">
          <MemberLogin />
          <FontSelector
            onFontSelect={font => this.handleChangeFontName(font)}
          />
          <CardManipulator />
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
