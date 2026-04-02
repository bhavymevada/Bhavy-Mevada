import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Visit our Store</h3>
                  <p className="mt-2 text-gray-600">
                    New Krishna Furniture<br />
                    Behind Nager Palika<br />
                    Palanpur (385001)<br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Call or WhatsApp</h3>
                  <p className="mt-2 text-gray-600">
                    <a href="tel:+919327288504" className="hover:text-amber-600 transition-colors">+91 9327288504</a>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Available Mon-Sat, 9am to 8pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="mt-2 text-gray-600">
                    <a href="mailto:info@newkrishnafurniture.com" className="hover:text-amber-600 transition-colors">info@newkrishnafurniture.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Store Hours</h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="first-name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="last-name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 px-4 border"></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-amber-600 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
