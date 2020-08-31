import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class QuickLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: 'I need a stylist'
    };
  }

  render() {
    return(
      <section>
      <a href='#' className='quick-link-section quick-cut'>
        <div className='quick-link-title ql-title-left'>In a hurry? Get a hair cut now</div>
        <div className='quick-link-small'>Skip registration and get a hair cut now</div>
        <button>Get A Cut</button>
      </a>

      <a  href='/stylists' className='quick-link-section cut-hair'>
        <div className='quick-link-title'>Compare Stylists</div>
        <div className='quick-link-small'>See Stylists in your area.</div>
        <button>Compare Stylists</button>
      </a>
    </section>
    );
  }
}

export default QuickLinks;

if (document.getElementById('quick-links')) {
    ReactDOM.render(<QuickLinks />, document.getElementById('quick-links'));
}
