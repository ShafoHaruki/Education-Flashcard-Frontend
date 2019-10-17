import React from "react";
import axios from "axios";
// import "./CSS/memberLogin.css";

export default class MemberLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userStatus: "You are now logged out"
    };
  }

  loginHandler = () => {
    const url = "http://localhost:3000/users/login";
    axios
      .post(
        url,
        {
          username: this.state.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({
          username: res.data.username,
          userStatus: `Welcome back, you are now logged in as ${this.state.username}`
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          userStatus:
            "You login has just failed. Please re-enter Username and Password. Or sign up as a new user by clicking the button below."
        });
      });
  };

  signupHandler = () => {
    const url = "http://localhost:3000/users/signup";
    axios
      .post(
        url,
        {
          username: this.state.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({
          userStatus: `Congratulations, you have just signed up as Username: ${this.state.username}`
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ userStatus: "Sign-up fail, please try again." });
      });
  };

  logoutHandler = () => {
    this.setState({
      userStatus: "You have logged out, please come back again"
    });
  };

  usernameInputHandler = username => {
    this.setState({ username: username.target.value });
  };

  passwordInputHandler = password => {
    this.setState({ password: password.target.value });
  };

  render() {
    return (
      <div className="memberLogin">
        <p>Login to create a flashcard that's uniquely yours!</p>
        <div>
          <input
            onChange={this.usernameInputHandler}
            value={this.state.username}
            type="text"
            placeholder="username"
          />
          <input
            onChange={this.passwordInputHandler}
            value={this.state.password}
            type="text"
            placeholder="password"
          />
        </div>
        <button onClick={this.loginHandler}>Member Log in</button>
        <button onClick={this.logoutHandler}>Member log out</button>
        <p>User status:</p>
        {this.state.userStatus}
        <button onClick={this.signupHandler}>
          Click here to sign up if you're not a member
        </button>
      </div>
    );
  }
}
