import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.name
    };
  }

  _handleChangeMessage = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      let newMessage = { type: "postMessage", username: this.state.currentUser, content: e.target.value};
      this.props.message(newMessage);
      e.target.value = '';
    }
  };

  _handleChangeUsername = (e) => {
      let oldUserName = this.state.currentUser;
      let newUserName = "Anonymous";

      if (e.target.value.length > 0) {
        newUserName = e.target.value;
      }


      if (oldUserName !== newUserName) {
        this.setState({currentUser: newUserName});
        let newMessage = { type: "postNotification", content: `${oldUserName} changed their name to ${newUserName}`, username: newUserName};
        this.props.message(newMessage);
      }
  };


  render() {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.currentUser} onBlur={this._handleChangeUsername.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._handleChangeMessage.bind(this)}/>
      </footer>
    );
  }

}
export default ChatBar;

