import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ClientWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: [
        'a hair cut',
        'a shave',
        'service',
      ],
      current: 'help'
    };
  }

  componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({current: this.state.choice[Math.floor(Math.random() * this.state.choice.length)]});
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval)
}

  render() {
    return(
      <div className='ws-1-choice'>I want <div>{this.state.current}</div> </div>
    );
  }
}

export default ClientWelcome;

if (document.getElementById('client-welcome')) {
    ReactDOM.render(<ClientWelcome />, document.getElementById('client-welcome'));
}
