import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.name
    }
  }

  _handleChangeMessage(e) {
    if (e.key === 'Enter') {
      let newMessage = { username: this.state.currentUser, content: e.target.value};
      this.props.message(newMessage);
      e.target.value = '';

    }
  };

  _handleChangeUsername(e) {
      let oldUserName = this.state.currentUser;
      let newUserName = e.target.value;
      this.setState({currentUser: newUserName});
      console.log("UserName changed from '" + oldUserName + "' to '" + newUserName + "'");
  };

  render() {
  console.log("Rendering <ChatBar/>")

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.currentUser} onBlur={this._handleChangeUsername.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._handleChangeMessage.bind(this)}/>
      </footer>
    );
  }

}
export default ChatBar;

