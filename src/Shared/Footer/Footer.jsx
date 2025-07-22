import { useState } from 'react';
import { Link } from 'react-router';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement newsletter subscription logic here
    console.log('Subscribe with email:', email);
    setEmail('');
    // Show success message or handle API call here
  };
  
  // Footer navigation columns
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", path: "/shop" },
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "Featured", path: "/featured" },
        { name: "Discounts", path: "/discounts" },
        { name: "Categories", path: "/categories" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "My Account", path: "/profile" },
        { name: "Orders", path: "/orders" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Cart", path: "/cart" },
        { name: "Track Order", path: "/track-order" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "FAQs", path: "/faqs" },
        { name: "Shipping", path: "/shipping" },
        { name: "Returns", path: "/returns" },
        { name: "Contact", path: "/contact" },
        { name: "Support", path: "/support" }
      ]
    }
  ];
  
  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com" },
  ];
  
  // Payment methods
  const paymentMethods = [
    "visa", "mastercard", "amex", "paypal", "applepay"
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-[hsl(214,88%,27%)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                <path d="M5.3 8.3a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4z" />
              </svg>
              <span className="font-bold text-xl text-[hsl(214,88%,27%)]">OceanMart</span>
            </Link>
            
            <div className="text-gray-600 mb-6">
              <p className="mb-2">Your one-stop shop for everything you need.</p>
              <p className="font-medium">Contact Information:</p>
              <address className="not-italic text-sm">
                <p>123 Ocean Avenue</p>
                <p>Seaside City, SC 12345</p>
                <p className="mt-2">Email: <a href="mailto:info@oceanmart.com" className="text-[hsl(214,88%,27%)]">info@oceanmart.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="text-[hsl(214,88%,27%)]">(123) 456-7890</a></p>
              </address>
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-[hsl(214,88%,27%)]"
                  aria-label={social.name}
                >
                  {social.icon === "facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social.icon === "pinterest" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-600 hover:text-[hsl(214,88%,27%)] text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter signup */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-3">Subscribe for exclusive offers and updates</p>
            <form onSubmit={handleSubscribe} className="flex mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[hsl(214,88%,27%)]"
              />
              <button
                type="submit"
                className="bg-[hsl(214,88%,27%)] text-white px-3 py-2 rounded-r-md text-sm font-medium hover:bg-[hsl(214,88%,20%)] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy</p>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} OceanMart. All rights reserved.
              </p>
            </div>
            
            {/* Payment methods */}
            <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
              {paymentMethods.map((method) => (
                <div key={method} className="h-6 w-10 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-700 font-medium">{method.toUpperCase().substring(0, 4)}</span>
                </div>
              ))}
            </div>
            
            {/* Terms and privacy */}
            <div className="flex space-x-4">
              <Link to="/terms" className="text-xs text-gray-500 hover:text-[hsl(214,88%,27%)]">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-[hsl(214,88%,27%)]">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-xs text-gray-500 hover:text-[hsl(214,88%,27%)]">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;