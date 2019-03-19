import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data"

const product = {
  	name: "Apple",
  	cost: 2,
  	stock: 2,
};
class Cart extends React.Component {
  render() {
    return (
        <div className="page-content">
        	{ProductData.products.map(p => (<h2>
            <Product
            name={p.name}
            cost={p.cost}
            stock={p.stock}
          	/>
          </h2>
          ))}
        </div>
    );
  }

}

export default Cart;
