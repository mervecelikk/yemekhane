import React, { Component } from 'react';


class Navbar extends Component {
    render() {
      return (
        <div className="Navbar">
          <header className="Navbar-header">
           
  
           <nav className="navbar navbar-danger bg-danger justify-content-between">
    <a className=" text-white bg-darknavbar-brand"> Araç Takip</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Ara..." aria-label="Search"/>
      <button className="border border-white text-white btn btn-outline-success my-2 my-sm-0"  type="submit">Ara</button>
       </form>
       </nav>
  
  
          </header>
    
         
        </div>
      );
    }
  }
  
  export default Navbar;