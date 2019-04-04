import React from "react";
import ReactDOM from "react-dom";
const Product = props => {
	// var count = 0;
	// function addToCart(v) {
	// 	if(props.stock == 0) {
	// 		alert("This item is out of stock!");
	// 	} else if(props.stock <= count) {
	// 		alert("There are too many "+props.name+"s in your cart!");
	// 	} else {
	// 		count++;
	// 		alert("There are "+count+" "+props.name+"s in your cart!");
	// 	}
 //  	}
	return (
	<div class="ui cards">
  		<div class="card">
    		<div class="content">
      			<div class="header">{props.name}</div>
      			<div class="description">
      				Price: ${props.cost}
      			</div>
    		</div>
    		<div class="ui bottom attached button" onClick={() => {props.handleAddToCart(props.item)}}>
    			<i class="add icon"></i>
    			Add to Cart
    		</div>
        <div class="ui bottom attached button" onClick={() => {props.handleRemoveCart(props.item)}}>
          <i class="remove icon"></i>
          Remove from Cart
        </div>
  		</div>
  	</div>);
};

export default Product;