import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Heart } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export function Wishlist() {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <Heart className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Save your favorite premium furniture pieces here to view them later.</p>
        <Link
          to="/shop"
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors shadow-md"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-8 w-8 text-amber-600 fill-amber-600" />
          <h1 className="text-3xl font-serif font-bold text-gray-900">My Wishlist</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
