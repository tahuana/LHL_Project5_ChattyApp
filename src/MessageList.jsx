import React, {Component} from 'react';

import Message from './Message.jsx';
import Notification from './NotificationMessage.jsx';


class MessageList extends Component {
  constructor(props) {
    super(props);
  };

  render() {

  const messagesList = this.props.messagesList;
  const message = messagesList.map( (message) => {
    if (message.type === "incomingMessage") {
      return <Message key={message.id} message={message}/>
    };
    if (message.type === "incomingNotification") {
      return <Notification key={message.id} message={message}/>
    };
  });

    return (
      <main className="messages">
        {message}
      </main>
    );
  }
}
export default MessageList;