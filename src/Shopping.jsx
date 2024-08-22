import React from "react";
import { Component } from "react";
import "./shop.css";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";


class Shopping extends Component {

state ={
    Shoppingdata:[]
}

  componentDidMount() {
this.handlefetch()

  }

  async handlefetch() {
    let response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json( );
    console.log(data);
this.setState({Shoppingdata:data})

  }

  render() {
    return (
      <div>
      <div className="firsts">
      
      <div className="navbar">
      <CgProfile id/>
   <a href="#">Login</a>
      </div>
      <div className="navbar">
      <IoCartOutline /><a href="#">Cart</a>
      </div>
      <div className="navbar">
      <CiShop /><a href="#">Shop</a>
      </div>
      <div className="navbar-search">
      <CiSearch /> 
      <input  type="text" id="search" name="search" placeholder="Search for Products,Brands and more"  width={500}/>
      </div>
      </div>
    <div className="shops">
        <h1>Shopping</h1>
        <div className="shop">
        {this.state.Shoppingdata.map ((data) =>  (
<div className="shopping">
    <img src={data.image}  height={200} width={200}/>
    <h3 >{data.title}</h3>
    <p>${data.price}</p>
    <button>buy</button>
</div>
        ))}
        </div>
        </div>
        
        </div>
    )
  }
}

export default Shopping;
