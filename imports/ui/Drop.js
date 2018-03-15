import React, { Component } from 'react';

export default class Drop extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Minor'};
    }
    func(e){
      this.setState({value: e.target.value});
    }
    show(e){
      document.getElementById("sel").innerHTML = "You Selected : " + this.state.value;
    }
  
    render() {
      return (
        <form >
          <label>
            Age:
            <select className="form-control" onChange={this.func.bind(this)}>
            <option value="Minor">Under 19</option>
              <option value="Adult">19 to 60</option>
              <option value="Senior">Above 60</option>
            </select>
          </label>
          <button className="form-control" type="button" onClick={this.show.bind(this)}>Submit</button>
          <p id='sel'></p>
        </form>
      );
    }
  }
  
