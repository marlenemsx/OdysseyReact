import React, { Component } from "react";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // elements bindés
    this.updateprenomField = this.updateprenomField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updateconfirmpasswordField = this.updateconfirmpasswordField.bind(
      this
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  updateprenomField(event) {
    let prenom = event.target.value;
    this.setState({ prenom: event.target.value });
  }
  updateNameField(event) {
    let name = event.target.value;
    this.setState({ name: event.target.value });
  }
  updateEmailField(event) {
    let email = event.target.value;
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    let password = event.target.value;
    this.setState({ password: event.target.value });
  }
  updateconfirmpasswordField(event) {
    let confirmpassword = event.target.value;
    this.setState({ confirmpassword: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>
          Vos données sont:
          <pre>{JSON.stringify(this.state, 1, 1)}</pre>
        </h3>
        <form onSubmit={this.handleSubmit}>
          {/* prenom */}
          <input
            value={this.state.prenom}
            onChange={this.updateprenomField}
            type="nom"
            name="prenom"
            placeholder="Enter your surname"
          />
          {/* nom */}
          <input
            value={this.state.name}
            type="nom"
            name="nom"
            placeholder="Enter your name"
            onChange={this.updateNameField}
          />
          {/* email */}
          <input
            value={this.state.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.updateEmailField}
          />
          {/* password */}
          <input
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password:"
            onChange={this.updatePasswordField}
          />
          {/* confirm password */}
          <input
            value={this.state.confirmpassword}
            type="password"
            name="confirmpassword"
            placeholder="Confirm password:"
            onChange={this.updateconfirmpasswordField}
          />
          <button type="submit" value="Submit">
            OK
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
