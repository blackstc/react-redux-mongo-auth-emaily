import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    const actions = {
      null: () => {
        return;
      },
      false: () => (
        <li>
          <a href="auth/google">Login With Google</a>
        </li>
      ),
      default: () => (
        <li>
          <a href="api/logout">Logout</a>
        </li>
      )
    };

    return (actions[this.props.auth] || actions.default)();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
