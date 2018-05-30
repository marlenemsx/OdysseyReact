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
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //   handleChange et handleSubmit
  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>
            Vos données sont:
            <pre> {JSON.stringify(this.state)}</pre>
          </h3>

          {/* prenom */}
          <input
            value={this.state.prenom}
            //onChange={this.handleChange}
            type="nom"
            name="prenom"
            placeholder="Enter your surname"
            onChange={this.updateprenomField.bind(this)}
          />
          {/* nom */}
          <input
            value={this.state.name}
            type="nom"
            name="nom"
            placeholder="Enter your name"
            //onChange={this.handleChange}
            onChange={this.updateNameField.bind(this)}
          />
          {/* email */}
          <input
            value={this.state.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            //onChange={this.handleChange}
            onChange={this.updateEmailField.bind(this)}
          />
          {/* password */}
          <input
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password:"
            onChange={this.updatePasswordField.bind(this)}
            //onChange={this.handleChange}
          />
          {/* confirm password */}
          <input
            value={this.state.confirmpassword}
            type="password"
            name="confirmpassword"
            placeholder="Confirm password:"
            //onChange={this.handleChange}
            onChange={this.updateconfirmpasswordField.bind(this)}
          />
        </form>
        <button type="submit" value="Submit">
          OK
        </button>
      </div>
    );
  }
}

export default SignUp;
