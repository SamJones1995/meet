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
      marginLeft: '30px',
      fontStyle: 'Helvetica'
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
      position: "fixed",
      bottom: 0,
      width: "200px",
      //backgroundColor: "#c8d8e4",
      marginBottom: "5px",
      borderRadius: "25px",
      padding: "5px",
      fontStyle: 'Helvetica'
    };
  }
}

export { InfoAlert, ErrorAlert };