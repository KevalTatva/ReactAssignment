import React from "react";
import "./styles.css";
import InputType from "./FormField";
import ButtonType from "./FormField";

var UserJson = [
  { UserName: "John", Password: "Doe" },
  { UserName: "Anna", Password: "Smith" },
  { UserName: "Peter", Password: "Jones" }
];

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
    //alert(this.state.UserName + this.state.Password);
    var Isvalid = UserJson.map(item => {
      if (
        item.UserName === this.state.UserName &&
        item.Password === this.state.Password
      ) {
        return true;
      } else {
        this.setState({ UserName: "", Password: "" });
        return false;
      }
    });
    if (Isvalid) alert("Yup!");
    else alert("Invalid UserName or Password");
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
