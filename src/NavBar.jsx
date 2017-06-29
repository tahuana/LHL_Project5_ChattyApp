import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand" >Chatty</a>
          <span className="connections">{this.props.totalOfConnections} users online</span>
        </nav>
      </div>
    );
  }
}

export default NavBar;


