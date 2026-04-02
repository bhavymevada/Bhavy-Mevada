import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-amber-500">New Krishna Furniture</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium furniture for your modern home. We craft pieces that blend comfort, durability, and timeless elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=Beds" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Beds</Link></li>
              <li><Link to="/shop?category=Sofas" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Sofas</Link></li>
              <li><Link to="/shop?category=L-Shaped Sofas" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">L-Shaped Sofas</Link></li>
              <li><Link to="/shop?category=Wooden Cupboards" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Wooden Cupboards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">New Krishna Furniture, Behind Nager Palika, Palanpur (385001), India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+919327288504" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">+91 9327288504</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@newkrishnafurniture.com" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">info@newkrishnafurniture.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} New Krishna Furniture. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">UPI</span>
            <span className="text-gray-500 text-sm">Cards</span>
            <span className="text-gray-500 text-sm">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
