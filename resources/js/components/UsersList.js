import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false
    };
  }
  componentDidMount() {
    axios.get('/api/users').then(response => {
      this.setState({
        loaded: true
      });
      this.setState({
        users: response.data
      });
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

if (document.getElementById('usersList')) {
    ReactDOM.render(<UsersList />, document.getElementById('usersList'));
}
