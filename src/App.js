import React from "react";
import "./styles.css";
import { render } from "react-dom";
import InputType from "./FormField";
import ButtonType from "./FormField";

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <InputType type="input" placeholder="User Name" />
        <InputType type="Password" placeholder="Password" />
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
