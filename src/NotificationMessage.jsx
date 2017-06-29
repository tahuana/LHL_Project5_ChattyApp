import React, {Component} from 'react';

class NotificationMessage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
  console.log("Rendering <NotificationMessage/>")
  console.log("data: ", this.props.notification)
    return (
      <div>
        <div className="message system">
          <span className="notification-content">{this.props.message.content}</span>
        </div>
      </div>
    );
  }
}
export default NotificationMessage;


