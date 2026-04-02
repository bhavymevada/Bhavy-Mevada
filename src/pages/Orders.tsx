import { useStore } from '../context/StoreContext';
import { Package, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Orders() {
  const { user, logout } = useStore();

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Please login to view your orders</h2>
        <Link
          to="/login"
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors shadow-md"
        >
          Login
        </Link>
      </div>
    );
  }

  // Mock orders data
  const mockOrders = [
    {
      id: 'ORD-2026-0401',
      date: 'April 1, 2026',
      status: 'Processing',
      total: 35000,
      items: [
        { name: 'Penang Corner Sofa', quantity: 1, price: 35000 }
      ]
    },
    {
      id: 'ORD-2026-0315',
      date: 'March 15, 2026',
      status: 'Delivered',
      total: 12000,
      items: [
        { name: 'Premium Plywood Double Bed', quantity: 1, price: 12000 }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">My Orders</h1>
          <button
            onClick={logout}
            className="text-sm font-medium text-red-600 hover:text-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl font-bold">
                {user.phone.substring(0, 1) || 'U'}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
                <p className="text-gray-500 text-sm">Phone: {user.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order ID: {order.id}</p>
                  <p className="text-sm font-medium text-gray-900">Placed on {order.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {order.status === 'Delivered' ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <CheckCircle className="w-4 h-4 mr-1.5" />
                      Delivered
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                      <Clock className="w-4 h-4 mr-1.5" />
                      Processing
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <ul className="divide-y divide-gray-100">
                  {order.items.map((item, index) => (
                    <li key={index} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">₹{item.price.toLocaleString('en-IN')}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Total Amount</span>
                <span className="text-lg font-bold text-gray-900">₹{order.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
