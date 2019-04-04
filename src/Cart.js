import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx";

const product = {
  	name: "Apple",
  	cost: 2,
  	count: 2,
};
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }
  handleRemoveCart(item) {
    let copy = [...this.state.cartItems];
    let curr = null;
    for(let i = 0; i < copy.length; i++) {
        if(copy[i].name === item.name) {
          curr = copy[i]; 
        }
      }
    if(curr == null) {
      return;
    }
    if(curr.count == 1) {
      let arr = copy.filter((i) => {return i.name !== item.name})
      this.setState({
          cartItems: arr
      })
    } else {
      for(let i = 0; i < copy.length; i++) {
        if(copy[i].name === item.name) {
          copy[i].count -= 1; 
        }
      }
      this.setState({
          cartItems: copy
      })
    }
  }
  handleAddToCart(item) {
    let copy = [...this.state.cartItems];
    let flag = false;
    for(let i = 0; i < copy.length; i++) {
      if(copy[i].name === item.name) {
        copy[i].count += 1; 
        this.setState({
          cartItems: copy
        })
        flag = true;
      }
    }
    if(!flag) {
      this.setState({
        cartItems: this.state.cartItems.concat({"name": item.name, "cost": item.cost, "count": 1})
      });
    }
  }
  render() {
    return (
        <div className="page-content">
        	{ProductData.products.map(p => (<h2>
            <Product
            item = {p}
            name={p.name}
            cost={p.cost}
            count={p.count}
            handleAddToCart={(item)=>this.handleAddToCart(item)}
            handleRemoveCart={(item) => this.handleRemoveCart(item)}
          	/>
          </h2>
          ))}
          <Receipt items = {this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
