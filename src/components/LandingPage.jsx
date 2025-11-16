import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage(){
return (
<main className="landing" style={{backgroundImage: 'url(/landing-bg.jpg)'}}>
<div className="landing-content">
<h1>Houseplant Haven</h1>
<p>We sell carefully nurtured houseplants to brighten your home and purify the air.</p>
<Link to="/products" className="btn">Get Started</Link>
</div>
</main>
);
}
