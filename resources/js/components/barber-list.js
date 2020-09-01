import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class BarbersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barbers: [],
      loaded: false,
      error: ''
    };
  }
  componentDidMount() {
      axios.get('/api/barbers').then(response => {
        this.setState({
          loaded: true,
          barbers: response.data
        });
      });
  }

  render() {
    const { barbers, loaded } = this.state;

    return (
      <ul>
        {loaded ? barbers.map(barber => (
            <a key={barber.id} href={`/stylists/${barber.id}`}> <li>{barber.name}</li></a>
        )) : 'Loading Barbers....'}
      </ul>
    );
  }
}

export default BarbersList;

if (document.getElementById('barbers-list')) {
    ReactDOM.render(<BarbersList />, document.getElementById('barbers-list'));
}
