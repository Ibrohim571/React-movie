import { Component } from "react";
import "./form.css";

export default class extends Component {
  state = {
    email: "",
    check: "",
  };
  inputValue = (e) => {
    this.setState({ email: e.target.value });
  };
  checkValue = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  sendForm = () => {
    if (this.state.check == false) {
      alert("check in input");
      return;
    }
    this.setState({ email: "", check: false });
    alert("success");
  };

  emailTest = (e) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(this.state.email)) {
      alert("email hato");
      return;
    }
  };

  render() {
    let { emailVal, checkVal } = this.state;
    return (
      <div className="form-group">
        <input
          type="email"
          value={emailVal}
          onChange={this.inputValue}
          onBlur={this.emailTest}
        />
        <label>
          I agree web brauzer
          <input
            type="checkbox"
            name="check"
            checked={checkVal}
            onChange={this.checkValue}
          />
        </label>
        <button className="btn" type="button" onClick={this.sendForm}>
          Submit
        </button>
      </div>
    );
  }
}
