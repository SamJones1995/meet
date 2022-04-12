import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.position = "fixed";
    this.padding = "5px";
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#2b6777';
  }

  getStyle = () => {
    return {
      color: this.color,
      top: 0,
      right: 0,
      position: "fixed",
      padding: "5px"
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#cc3300';
  }

  getStyle = () => {
    return {
      color: this.color,
      right: 0,
      top: 50,
      position: "fixed",
      padding: "5px"
    };
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#cc3300';
  }

  getStyle = () => {
    return {
      color: this.color,
      top: 0,
      left: 0,
      width: "200px",
      fontStyle: 'Helvetica'
    };
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };