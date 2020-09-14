import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChatsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded:false,
      messages: [],
      newMessage: '',
      user: props.user
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages();

    Echo.join('chat').listen('MessageSent', (event) => {
      const {messages, user} = this.state;
      const currentMessage = {
        user: event.message.user,
        message: event.message.message
      };

      messages.push(currentMessage);

      this.setState({
        messages
      });

    });
  }

  getMessages() {
    axios.get('/messages').then(response => {
      this.setState({
        loaded: true,
        messages: response.data
      });
    });
  }

  onKeyUp(event) {
    if(event.charCode === 13) {
      const {messages, user} = this.state;
      const currentMessage = event.target.value;
      const added = {
        user: user,
        message: event.target.value
      };

      messages.push(added);

      this.setState({
        messages
      });


      axios.post('/messages', {message: currentMessage});

      const messager = document.getElementById('messager');
      messager.value = '';
      this.getMessages();

    }
  }

  render() {
    const { messages, loaded, user } = this.state;
    return(
      <>
      <div className="row">
        <div className="col-8">
          <div className="card card-default">
            <div className="card-header">Messages</div>
            <div className="card-body p-0">
              <ul className="list-unstyled" style={{height: '300px', overflowY:'scroll'}}>
              {loaded ? messages.map(message => (
                  <li key={message.id} className="p-2">
                  <strong key={message.id}>{message.user.name}</strong>
                  {message.message}
                  </li>
              )) : 'Loading Messages....'}
              </ul>
            </div>
            <input
            id="messager"
            type="text"
            name="message"
            className="form-control"
            placeholder="Enter message"
            onKeyPress={this.onKeyUp}/>
          </div>
          <span className="text-muted"> user is typing...</span>
        </div>

        <div className="col-4">
          <div className="card card-default">
            <div className="card-header">Active Users</div>
            <div className="card-body">
              <ul>
                <li className="py-2">Nic</li>
              </ul>
          </div>
        </div>
      </div>
      </div>
    </>
    );
  }
}

export default ChatsComponent;

if (document.getElementById('chats')) {
  const component = document.getElementById("chats");
  const props = Object.assign({}, component.dataset);

  ReactDOM.render(<ChatsComponent {...props} />, component);
}
