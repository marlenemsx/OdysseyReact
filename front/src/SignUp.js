import React, { Component } from "react";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  updateEmailField(event) {
    let email = event.target.value;
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <h1>Votre email est: {this.state.email}</h1>
          <input
            value={this.state.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.updateEmailField.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
