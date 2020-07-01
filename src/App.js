import React from "react";
import "./styles.css";
import { render } from "react-dom";
import InputType from "./FormField";
import ButtonType from "./FormField";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert(this.state.UserName + this.state.Password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputType
          type="input"
          placeholder="User Name"
          value={this.state.UserName}
          onChange={event => this.setState({ UserName: event.target.value })}
        />
        <InputType
          type="Password"
          placeholder="Password"
          value={this.state.Password}
          onChange={event => this.setState({ Password: event.target.value })}
        />
        <ButtonType type="submit" value="Log On" />
      </form>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Log On</h1>
      <LoginForm />
    </div>
  );
}
