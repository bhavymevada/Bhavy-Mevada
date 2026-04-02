import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist, user } = useStore();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="New Krishna Furniture Logo" className="h-12 w-auto object-contain mr-2" />
              <span className="font-serif text-2xl font-bold text-amber-600 tracking-tight hidden sm:block">
                New Krishna Furniture
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <a href="https://wa.me/919327288504" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <Phone className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">9327288504</span>
            </a>
            
            <Link to="/wishlist" className="text-gray-600 hover:text-amber-600 relative transition-colors">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="text-gray-600 hover:text-amber-600 relative transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <Link to="/orders" className="text-gray-600 hover:text-amber-600 transition-colors">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-amber-600 transition-colors">
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-amber-500 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-amber-500 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-amber-500 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-amber-500 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-6 justify-around">
              <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-600 relative">
                <Heart className="h-6 w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-600 relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              {user ? (
                <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-600">
                  <User className="h-6 w-6" />
                </Link>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-600">
                  <User className="h-6 w-6" />
                </Link>
              )}
            </div>
            <div className="mt-4 px-4">
              <a href="https://wa.me/919327288504" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
