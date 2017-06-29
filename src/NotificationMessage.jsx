import React, {Component} from 'react';

class NotificationMessage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
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


