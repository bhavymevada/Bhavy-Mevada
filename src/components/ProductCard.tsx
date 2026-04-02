import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product, useStore } from '../context/StoreContext';
import React from 'react';

export function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-amber-600 hover:bg-white transition-colors shadow-sm"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-amber-600 text-amber-600' : ''}`} />
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs text-amber-600 font-medium mb-1 uppercase tracking-wider">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
            {product.category === 'Mattresses' && <span className="text-sm font-normal text-gray-500"> / ft</span>}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center bg-gray-900 text-white p-2.5 rounded-lg hover:bg-amber-600 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
