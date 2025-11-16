import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header(){
const totalItems = useSelector(state => state.cart.totalItems);
return (
<header className="header">
<div className="brand">
<Link to="/">Houseplant Haven</Link>
</div>
<nav>
<Link to="/products">Products</Link>
<Link to="/cart" className="cart-link">
🛒
<span className="badge">{totalItems}</span>
</Link>
</nav>
</header>
);
}
