export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 text-white text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000"
            alt="Furniture Workshop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About New Krishna Furniture</h1>
          <p className="text-xl text-gray-300">Crafting elegance and comfort for your home since our inception.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto text-gray-600">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="mb-6">
            Welcome to New Krishna Furniture, your premier destination for high-quality, stylish, and durable furniture. Located in the heart of Palanpur, we have been dedicated to transforming houses into beautiful homes with our exquisite range of furniture.
          </p>
          <p className="mb-6">
            Our journey began with a simple mission: to provide premium furniture that blends traditional craftsmanship with modern design. We understand that furniture is more than just functional pieces; it's an expression of your personal style and a foundation for your daily life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-sm">To be the most trusted and preferred furniture brand, known for uncompromising quality, innovative designs, and exceptional customer service.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Our Mission</h3>
              <p className="text-sm text-amber-800">To craft furniture that enhances the beauty and comfort of every home, offering a seamless shopping experience and lasting value to our customers.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</span>
              <span><strong>Premium Quality:</strong> We source the finest materials, from solid wood to premium fabrics, ensuring every piece stands the test of time.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</span>
              <span><strong>Wide Variety:</strong> From classic wooden cupboards to modern L-shaped sofas, our extensive catalog caters to diverse tastes and needs.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</span>
              <span><strong>Customer Centric:</strong> Your satisfaction is our priority. We offer dedicated support via WhatsApp and flexible payment options including COD.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
