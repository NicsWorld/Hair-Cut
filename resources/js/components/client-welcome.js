import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ClientWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: 'I need a stylist'
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
      <section className="client ws-1-choice">
        <h2 className='ws-1-title'><span className='spacer'>{this.state.choice}</span></h2>
        <span>Start your free search for care in your area.</span>
        <button>Find a pro</button>
      </section>
    );
  }
}

export default ClientWelcome;

if (document.getElementById('client-welcome')) {
    ReactDOM.render(<ClientWelcome />, document.getElementById('client-welcome'));
}
