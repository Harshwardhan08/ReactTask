import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import App from './App.js'
import SCom from './secondComponent.js';
import Drop from './Drop.js';
import Radio from './Radio.js';



export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '',lname : '', email : '', no : '',status : ''};
    this.validate = this.validate.bind(this);
  }
  componentWillMount()
  {
    this.setState({fname : user.fname, lname : user.lname, email : user.email, no : user.contact});
  }
  f(e)
  {
    this.setState({fname : e.target.value});
    this.validate(e);
  }
  l(e)
  {
    this.setState({lname : e.target.value});
    this.validate(e);
  }
  e(e)
  {
    this.setState({email : e.target.value});
    this.validate(e);
  }
  n(e)
  {
    this.setState({no : e.target.value});
    this.validate(e);
  }
  
  shouldComponentUpdate()
  {
    if(this.state.fname.length>15)
      return false;
    if(this.state.lname.length<=4&&this.state.lname.length>0)
    {
      this.setState({lname:""});
      return false;
    }
    return true;
  }


  componentDidUpdate()
  {
    if(this.state.fname==user.fname&&this.state.lname==user.lname&&this.state.status!="success")
      this.setState({status : "success"});
    
  }
  validate(e)
  {
    switch(e.target.id)
    {
      case 'fname':if(e.target.value.match(/^[a-zA-Z]+$/)) 
                  {
                    this.setState({fname : e.target.value});
                  }
                  else
                  {
                    this.setState({fname : "Invalid FirstName"});
                  }
                  break;
      case 'lname':if(e.target.value.match(/^[a-zA-Z]+$/)) 
                  {
                    this.setState({lname : e.target.value});
                  }
                  else
                  {
                    this.setState({lname : "Invalid LastName"});
                  }
                  break;
      case 'email':if(e.target.value.match(/^[\w]+[@][a-zA-Z]+[.][a-zA-Z]{2,4}$/))
                  {
                    this.setState({email : e.target.value});
                  }
                  else
                  {
                    this.setState({email : "Invalid Email"});
                  }break;
      case 'no':if(e.target.value.match(/^[\d]{0,8}$/))
                {
                  this.setState({no : "Minimum Length 8"});
                }
                else
                if(e.target.value.match(/^[\d]{8,12}$/))
                {
                  this.setState({no : e.target.value});
                }
                else
                if(e.target.value.match(/^[\d]{13,}$/))
                {
                  this.setState({no : "Limit Exceeded!"});
                }
                else
                  {
                    this.setState({no : "Invalid Number"});
                  }
                
                break;
    }
  }

  render() {
    let fname = this.state.fname;
    let lname = this.state.lname;
    let email = this.state.email;
    let no = this.state.no;
    return (
      <div>
        <form>
            <label className="form-control">
              <input className="form-control"  type="text" id="fname" placeholder="FirstName" defaultValue={fname} onChange = {this.f.bind(this)}/>  <br/>
              <input className="form-control" type="text" id="lname" placeholder="LastName" defaultValue={lname} onChange = {this.l.bind(this)}/>  <br/>
              <input className="form-control" type="email" id="email" placeholder="Email" defaultValue={email} onChange = {this.e.bind(this)}/>  <br/>
              <input className="form-control" type="text" id="no"  placeholder='Contact' defaultValue={no} onChange = {this.n.bind(this)}/>  <br/>
            </label>
          
          
        </form>
        <Radio />
        <Drop />
        <br/>
        {this.state.status}
        <SCom fname = {fname} lname = {lname} email = {email} no = {no}/>
      </div>
    );
  }

}
  
