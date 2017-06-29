import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: 'Bob', // optional. if currentUser is not defined, it means the user is Anonymous
      totalOfConnections: 0,
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
          type: "incomingMessage"
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          type: "incomingMessage"
        }
      ]
    };
  }


  handleNewMessages = (newMessage) => {
      this.socket.send(JSON.stringify(newMessage));
  }

  componentDidMount() {
    // console.log("componentDidMount <App />");

    this.socket.onopen = function (event) {
      console.log('Successfully connected to the server!!')
    };

    this.socket.onmessage = (data) => {
      const incoming = JSON.parse(data.data);
      let messages;

      switch(incoming.type) {
        case "incomingMessage":
          messages = this.state.messages.concat(incoming);
          this.setState({messages: messages});
          break;
        case "incomingNotification":
          messages = this.state.messages.concat(incoming);
          this.setState({messages: messages, currentUser: incoming.username});
          break;
        case "connections":
          this.setState({totalOfConnections: incoming.totalOfConnections});
          break;
        default:
          throw new Error("Unknown event type " + incoming.type);
      }
    };


    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);


  };

  render() {
    return (
      <div>
        <NavBar totalOfConnections={this.state.totalOfConnections} />
        <MessageList messagesList={this.state.messages}/>
        <ChatBar name={this.state.currentUser} message={this.handleNewMessages.bind(this)}/>
      </div>
    );
  }
}
export default App;
