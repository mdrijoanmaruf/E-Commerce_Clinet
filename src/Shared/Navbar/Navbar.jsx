import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const location = useLocation();
  const searchRef = useRef(null);
  const userDropdownRef = useRef(null);
  
  // Navigation links array with empty fragments
  const navLinks = [
    { id: 1, title: 'Categories', path: '/categories', element: <></> },
    { id: 2, title: 'Shop', path: '/shop', element: <></> },
    { id: 3, title: 'About', path: '/about', element: <></> },
    { id: 4, title: 'Contact', path: '/contact', element: <></> },
  ];

  // Example search results (in a real app, this would come from an API)
  const mockProducts = [
    { id: 1, name: 'Blue Ocean T-Shirt' },
    { id: 2, name: 'Ocean Wave Hoodie' },
    { id: 3, name: 'Sea Blue Jeans' },
    { id: 4, name: 'Teal Summer Shorts' },
  ];

  // Handle search input
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-[hsl(214,88%,27%)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                <path d="M5.3 8.3a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4z" />
              </svg>
              <span className="font-bold text-lg text-[hsl(214,88%,27%)]"> GoldenCart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              {navLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-[hsl(214,88%,27%)] text-white'
                      : 'text-gray-700 hover:bg-[hsl(214,88%,15%)] hover:text-white'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:block flex-grow max-w-xs mx-4 relative" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md py-1.5 px-3 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(214,88%,27%)]"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Search autocomplete */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-20">
                <ul className="py-1 text-sm text-gray-700">
                  {searchResults.map(result => (
                    <li key={result.id}>
                      <Link 
                        to={`/products/${result.id}`}
                        className="block px-3 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setSearchQuery('');
                          setShowSearchResults(false);
                        }}
                      >
                        {result.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-700 hover:text-[hsl(214,88%,27%)] p-1.5 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-[hsl(214,88%,27%)] p-1.5 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <div className="relative ml-1" ref={userDropdownRef}>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex text-gray-700 hover:text-[hsl(214,88%,27%)] p-1.5 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              {isUserDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Orders</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-[hsl(214,88%,27%)] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-2 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.id}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-[hsl(214,88%,27%)] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          {/* Mobile Search */}
          <div className="px-2 pt-2 pb-2">
            <input
              type="text"
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(214,88%,27%)]"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {showSearchResults && searchResults.length > 0 && (
              <div className="mt-1 w-full bg-white rounded-md shadow-lg">
                <ul className="py-1 text-sm text-gray-700">
                  {searchResults.map(result => (
                    <li key={result.id}>
                      <Link 
                        to={`/products/${result.id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setSearchQuery('');
                          setShowSearchResults(false);
                          setIsOpen(false);
                        }}
                      >
                        {result.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Mobile User Actions */}
          <div className="border-t border-gray-200 pt-3 pb-3">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(214,88%,27%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-700">Guest User</div>
                <div className="text-xs text-gray-500">Sign in to your account</div>
              </div>
            </div>
            <div className="mt-2 px-2 space-y-1">
              <Link to="/profile" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Your Profile</Link>
              <Link to="/orders" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Your Orders</Link>
              <Link to="/wishlist" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Wishlist</Link>
              <Link to="/cart" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link to="/settings" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Settings</Link>
              <Link to="/login" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Sign in / Register</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;