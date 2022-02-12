import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activeStyle = {
      textDecoration: "underline"
    };
    let nonActiveStyle = {
      textDecoration: "none"
    };
    let user = this.props.user;
    return (
      <header className="header">
        <div className="container flex">
          <a className="logo">Conduit.</a>
          <nav className="navbar">
            <ul className="nav-menu flex">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
              >
                <li className="nav-item">Home</li>
              </NavLink>
              {this.props.isLoggedIn && this.props.user ? (
                <>
                  <NavLink
                      to="/compose"
                      style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                      }
                    >
                      <li className="nav-item">Compose</li>
                  </NavLink>
                  <NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                      }
                    >
                      <li className="nav-item">Settings</li>
                  </NavLink>
                  <NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                      }
                    >
                      <li className="nav-item">{user.email}</li>
                  </NavLink>
                  <li onClick={this.props.Logout} className="nav-item">Logout</li>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActiveStyle
                    }
                  >
                    <li className="nav-item">Sign in</li>
                  </NavLink>
                  <NavLink
                    to="/signup"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActiveStyle
                    }
                  >
                    <li className="nav-item">Sign up</li>
                  </NavLink>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
