import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      let newMessage = { username: this.textInput.value, content: e.target.value};
      this.props.message(newMessage);
    }
  };

  render() {
  console.log("Rendering <ChatBar/>")

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name} ref={(input) => {this.textInput = input;}}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress.bind(this)}/>
      </footer>
    );
  }

}
export default ChatBar;

