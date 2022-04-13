import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
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
      marginBottom: '5px !important',
    };
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };