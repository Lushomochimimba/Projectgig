import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'

export default class Navbar extends Component {

componentDidMount(){
  $(".button-collapse").sideNav({


    menuWidth: 250, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor

  });

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



  render() {
    return(
      <div className="navbar-fixed">
    {
      Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav sidenav-style">

    <li><a href="/profile" className={`${this.profile} link`}>profile</a></li>
    <div className="divider"></div>
    <li><a href="/property" className={`${this.property} link`}>add property</a></li>
    <li><div className="divider"></div></li>
    <li><a href="/listedproperty" className={`${this.listedproperty} link`}>Listed Properties</a></li>


  </ul>
  <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="fa fa-plus menu-fa">SideNav</i></a>



  <div className="right logged-nav-button">

    <a href="/" className={` link`}><button id="nav-buttons">KUKAYA</button></a>
    <a href="/about" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
    <a href="#" onClick={e => this.logout(e)}><button  id="nav-buttons">Logout</button></a>

  </div>
</>
    :
<>

<a href="/" className={` link`}><h6>KUKAYA</h6></a>
<div className="right nav-button">

  <a href="/registration" className={`${this.registration} link`}><button id="nav-buttons">signup</button></a>

<a href="/about" className={`${this.about} link`}><button id="nav-buttons">about</button></a>
<a href="/login" className={`${this.login} link`}><button id="nav-buttons">login</button></a>
</div>
</>
    }


  </div>

    )
  }
}
