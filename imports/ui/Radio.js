import React, { Component } from 'react';
export default class Radio extends Component {
    constructor(props) {
      super(props);
      this.state = {value:''};
      this.show = this.show.bind(this);
    }
    
    show(e){
        this.setState({value :  "You Selected : "+e.target.value});
    }
  
    render() {
      let val =this.state.value;
      return (
        <form >
          <label className="form-control">
            <input type="radio" name="gender" value="Male"  onChange={this.show.bind(this)}/> Male<br/>
            <input type="radio" name="gender" value="Female" onChange={this.show.bind(this)}/> Female<br/>
          </label>
          {val}
        </form>
      );
    }
  }
  