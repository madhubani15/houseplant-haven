import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, deleteItem } from '../features/cartSlice';


export default function CartItem({ entry }){
const { plant, qty } = entry;
const dispatch = useDispatch();
return (
<div className="cart-item">
<img src={plant.thumbnail} alt={plant.name} />
<div className="ci-info">
<h4>{plant.name}</h4>
<p>Unit: ${plant.price.toFixed(2)}</p>
<div className="qty-controls">
<button onClick={() => dispatch(decreaseQty(plant.id))}>-</button>
<span>{qty}</span>
<button onClick={() => dispatch(increaseQty(plant.id))}>+</button>
</div>
</div>
<div className="ci-actions">
<button onClick={() => dispatch(deleteItem(plant.id))}>Delete</button>
</div>
</div>
);
}
