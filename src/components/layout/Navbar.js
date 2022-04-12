import React, { Component } from 'react';
import propTypes from 'prop-types'


export class Navbar extends Component {
  static defaultProps = {
      title: 'Github Findah',
      icon: 'fab fa-github'
  };

  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  }

  render() {
    return (
      <div className="container-fluid bg-info text-white">
        <div className='navbar'>
            <h1>
                <i className={this.props.icon} /> {this.props.title}
            </h1>
        </div>
      </div>
    )
  };
}

export default Navbar