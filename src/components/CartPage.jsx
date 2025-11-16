import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


export default function CartPage(){
const items = useSelector(s => s.cart.items);
const totalItems = useSelector(s => s.cart.totalItems);
const totalCost = useSelector(s => s.cart.totalCost);


return (
<main className="cart-page">
<h2>Your Cart</h2>
<p>Total plants: {totalItems}</p>
<p>Total cost: ${totalCost.toFixed(2)}</p>


<div className="cart-list">
{Object.keys(items).length === 0 ? (
<p>Your cart is empty. <Link to="/products">Continue shopping</Link></p>
) : (
Object.values(items).map(entry => <CartItem entry={entry} key={entry.plant.id} />)
)}
</div>


<div className="cart-actions">
<button onClick={() => alert('Coming Soon')}>Checkout</button>
<Link to="/products" className="btn">Continue Shopping</Link>
</div>
</main>
);
}
