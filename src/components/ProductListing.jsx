import React from 'react';
import plants from '../data/plants';
import PlantCard from './PlantCard';


export default function ProductListing(){
// group by category
const grouped = plants.reduce((acc,p) => {
acc[p.category] = acc[p.category] || [];
acc[p.category].push(p);
return acc;
}, {});


return (
<main className="products">
<h2>Plants for sale</h2>
{Object.keys(grouped).map(cat => (
<section key={cat} className="category">
<h3>{cat}</h3>
<div className="grid">
{grouped[cat].map(p => <PlantCard plant={p} key={p.id} />)}
</div>
</section>
))}
</main>
);
}
