import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BarberWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='ws-1-choice'>I want a <div>job</div></div>
    );
  }
}

export default BarberWelcome;

if (document.getElementById('barber-welcome')) {
    ReactDOM.render(<BarberWelcome />, document.getElementById('barber-welcome'));
}
