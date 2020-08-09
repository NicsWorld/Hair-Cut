import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
      error: ''
    };
  }
  componentDidMount() {
      axios.get('/api/users').then(response => {
        this.setState({
          loaded: true,
          users: response.data
        }, console.log('hi'));
      });
  }

  render() {
    const { users, loaded } = this.state;

    return (
      <ul>
        {loaded ? users.map(user => (
            <li key={user.id}>{user.name}</li>
        )) : 'Loading Users....'}
      </ul>
    );
  }
}

export default UsersList;

if (document.getElementById('users-list')) {
    ReactDOM.render(<UsersList />, document.getElementById('users-list'));
}
