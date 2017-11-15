import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../actions/index';
// import axios from 'axios';

// import 'src/assets/stylesheets/base.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
    const userObj = {
      email: this.state.email,
      password: this.state.password,
      integer: 0
    };
    this.props.registerUser(userObj);
    this.props.history.push('/login');
    // this.state.users.push(userObj);
    // axios.post(this.props.route.url, userObj)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
          <input
            onChange={this.handleEmail} 
            placeholder='Email' 
            type='email'
          />
          <input 
            onChange={this.handlePassword}
            placeholder='Password' 
            type='password'
          />
          <button type='submit'>Register</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
