import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
      default: () => [
        <li key="1">
          <Payments />
        </li>,
        <li key="3" style={{ margin: '0 10px' }}>
          Credits: {this.props.auth.credits}
        </li>,
        <li key="2">
          <a href="api/logout">Logout</a>
        </li>
      ]
    };

    return (actions[this.props.auth] || actions.default)();
  }

  render() {
    return (
      <nav className="light-blue">
        <div className="nav-wrapper container">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
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
