import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.clickIP = this.clickIP.bind(this);
  }

  clickIP(e) {
    console.log('You clicked on the IP!');
  }

  clickPort(e) {
    console.log('You clicked on the Port!');
  }

  clickHostname(e) {
    console.log('You clicked on the Hostname!');
  }
  
  render() {
    return <div>
      <h1>Hello world!</h1>

      <a href="/contact">Contact us!</a>

      <p onClick={this.clickIP}>Client IP: {this.props.ip}</p>
      <p onClick={this.clickPort}>Current port IP: {this.props.port}</p>
      <p onClick={this.clickHostname}>Server hostname: {this.props.hostname}</p>
    </div>
  }
}