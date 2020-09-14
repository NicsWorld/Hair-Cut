import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BarbersProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      email: props.email,
      zip_code: props.zip,
      loaded: false,
      error: ''
    };
  }


  render() {
    const { name, email, zip_code } = this.state;
    return (
      <div className='profile-container'>
      <div className="profile-picture"></div>
        <h5>Name: {name}</h5>
        <div>Email: {email}</div>
        <div>Zip Code: {zip_code}</div>
      </div>
    );
  }
}

export default BarbersProfile;

if (document.getElementById('profile')) {
    const component = document.getElementById("profile");
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<BarbersProfile {...props} />, component);
}
