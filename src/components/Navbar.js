import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://localhost:3000/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pramanik Shashtra
        </a>
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                   <p></p>
                   <p> current user:&ensp;
                {this.props.account.substring(0,9)}...{this.props.account.substring(38,42)}

            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
            </p>
            </a>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;