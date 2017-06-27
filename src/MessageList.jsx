import React, {Component} from 'react';

import Message from './Message.jsx';


class MessageList extends Component {
  render() {
  console.log("Rendering <MessageList/>");
  const messagesList = this.props.messagesList;
  const message = messagesList.map( (message) =>
    <Message key={message.id} message={message}/>
   );
  console.log("message: ", message)

    return (
      <main className="messages">
        {message}
      </main>
    );
  }
}
export default MessageList;