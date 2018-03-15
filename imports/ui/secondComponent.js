import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Vali extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return(
        <div>
          <h1>{this.props.fname} {this.props.lname}</h1>
          <h1>{this.props.email}</h1>
          <h1>{this.props.no}</h1>
        </div>
      );
  }
}