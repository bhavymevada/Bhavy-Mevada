import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ShoppingCart, Heart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/shop')}
          className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-amber-600 font-medium flex items-center mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-w-4 aspect-h-3 lg:aspect-h-4 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-amber-600 hover:bg-white transition-colors shadow-md"
            >
              <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-amber-600 text-amber-600' : ''}`} />
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-sm text-amber-600 font-medium uppercase tracking-wider">{product.category}</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
                {product.category === 'Mattresses' && <span className="text-lg font-normal text-gray-500"> / ft</span>}
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8">
              <p className="text-base leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium border-x border-gray-300 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-amber-600 transition-colors flex items-center justify-center shadow-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </button>
                <button
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                  className="flex-1 bg-amber-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-amber-600 transition-colors flex items-center justify-center shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-amber-600" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-amber-600" />
                <span>7 Days Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
