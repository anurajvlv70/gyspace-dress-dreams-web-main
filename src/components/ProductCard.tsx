
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { ShoppingBag } from 'lucide-react';

// interface ProductCardProps {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   tag?: string;
//   isNew?: boolean;
//   isSale?: boolean;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   id,
//   name,
//   price,
//   image,
//   tag,
//   isNew = false,
//   isSale = false
// }) => {
//   return (
//     <div className="product-card group">
//       {isNew && <span className="product-tag bg-gispace-purple">New</span>}
//       {isSale && <span className="product-tag bg-red-500">Sale</span>}
//       {tag && <span className="product-tag">{tag}</span>}
      
//       <Link to={`/product/${id}`} className="block product-image-container">
//         <img
//           src={image}
//           alt={name}
//           className="product-image w-full h-[350px] object-cover transition-all duration-700"
//         />
//       </Link>
      
//       <div className="product-details">
//         <Link to={`/product/${id}`}>
//           <h3 className="text-lg font-medium truncate hover:text-gispace-purple transition-colors">
//             {name}
//           </h3>
//         </Link>
//         <div className="flex justify-between items-center mt-2">
//           <span className="font-semibold">${price.toFixed(2)}</span>
//           <Button 
//             variant="ghost" 
//             size="sm"
//             className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gispace-pink hover:text-gispace-purple"
//           >
//             <ShoppingBag className="h-4 w-4 mr-1" />
//             Add
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
