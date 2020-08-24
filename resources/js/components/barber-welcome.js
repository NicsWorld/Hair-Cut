import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BarberWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: 'I want to cut hair'
    };
  }

  render() {
    return(
      <section className="stylist ws-1-choice">
        <h2 className='ws-1-title'><span className='spacer'>{this.state.choice}</span></h2>
        <span>Create a profile and search for jobs</span>
        <button>Find A Gig</button>
      </section>
    );
  }
}

export default BarberWelcome;

if (document.getElementById('barber-welcome')) {
    ReactDOM.render(<BarberWelcome />, document.getElementById('barber-welcome'));
}
