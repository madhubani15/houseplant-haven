import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';


export default function PlantCard({ plant }){
const dispatch = useDispatch();
const inCart = useSelector(s => !!s.cart.items[plant.id]);


const onAdd = () => dispatch(addToCart(plant));


return (
<div className="plant-card">
<img src={plant.thumbnail} alt={plant.name} />
<div className="info">
<h4>{plant.name}</h4>
<p>${plant.price.toFixed(2)}</p>
<button onClick={onAdd} disabled={inCart}>{inCart ? 'Added' : 'Add to Cart'}</button>
</div>
</div>
);
}
