import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'

export  class Navbar extends Component {

constructor(){
  super();
  this.state = {
    name: null,
  }
}

componentDidMount(){
  $(".button-collapse").sideNav({


    menuWidth: 250, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor

  });
   this.getName();
}

  logout = (e) => {
    e.preventDefault();
    console.log('logout');
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      }
      FlowRouter.go('/')
    });
  }

  getName(){
    if(this.props.user == undefined){
      return null;
    }
    const user = Meteor.user();
    const name = user.profile.name;
    console.log(Meteor.user()); 
    this.setState({name})
  }

  render() {
    
    

    return(
      <div className="navbar-fixed">
    {
      Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav">
    <li>
      <div className="user-view">
      <div className="background">
        <img src="assets/bane.jpeg"></img>
      </div>
      <a href="#!name"><span className="white-text name">{this.state.name}</span></a>
      <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div>
  </li>

    <li><a href="/profile" className={`${this.profile} link`}>profile</a></li>
    <div className="divider"></div>
    <li><a href="/property" className={`${this.property} link`}>add property</a></li>

    <li><div className="divider"></div></li>


  </ul>
  <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="material-icons">menu</i></a>



  <div className="right logged-nav-button">
  
    <a href="/" className={` link`}><button id="nav-buttons">Home</button></a>
    <a href="/about" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
    <a href="#" onClick={e => this.logout(e)}><button>Logout</button></a>

  </div>
</>
    :
<>

<a href="/" className={` link`}><h6>LOGO</h6></a>
<div className="right nav-button">

  <a href="/registration" className={`${this.registration} link`}><button id="nav-buttons">signup</button></a>

<a href="/about" className={`${this.about} link`}><button id="nav-buttons">about</button></a>
<a href="/login" className={`${this.login} link`}><button>login</button></a>
</div>
</>
    }


  </div>

    )
  }
}

export default withTracker(() => {
  
    return {user: Meteor.user()}
  })(Navbar)
  