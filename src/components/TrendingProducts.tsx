
// import React from 'react';
// import ProductCard from './ProductCard';

// // Sample product data
// const products = [
//   {
//     id: "1",
//     name: "Floral Summer Dress",
//     price: 79.99,
//     image: "/placeholder.svg",
//     isNew: true
//   },
//   {
//     id: "2",
//     name: "Elegant Evening Gown",
//     price: 129.99,
//     image: "/placeholder.svg"
//   },
//   {
//     id: "3",
//     name: "Casual Day Dress",
//     price: 59.99,
//     image: "/placeholder.svg",
//     isSale: true
//   },
//   {
//     id: "4",
//     name: "Bohemian Maxi Dress",
//     price: 89.99,
//     image: "/placeholder.svg"
//   }
// ];

// const TrendingProducts = () => {
//   return (
//     <section className="section-padding bg-gispace-gray/30">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2 className="heading-lg mb-4 section-title">Trending Now</h2>
//           <p className="subheading">Our most popular styles that everyone's loving right now</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map(product => (
//             <div 
//               key={product.id} 
//               className="opacity-0 animate-fade-in"
//               style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}
//             >
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingProducts;
