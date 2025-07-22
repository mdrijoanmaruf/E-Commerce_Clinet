import { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import useAuth from '../../Hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoginLayout = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const { signInWithGoogle, loading } = useAuth();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log('Google sign in successful:', result.user);
        // You can add redirect logic here
      })
      .catch(error => {
        console.error('Google sign in error:', error.message);
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="md:flex">
            {/* Left side - Form selection and active form */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2" data-aos="fade-up" data-aos-delay="150">
                {activeTab === 'login' ? 'Welcome Back' : 'Join Us'}
              </h2>
              <p className="text-gray-500 mb-6" data-aos="fade-up" data-aos-delay="200">
                {activeTab === 'login' ? 'Sign in to continue shopping' : 'Create an account to get started'}
              </p>
              
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6" data-aos="fade-up" data-aos-delay="250">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`py-3 px-5 text-center font-medium text-sm focus:outline-none ${
                    activeTab === 'login'
                      ? 'border-b-2 border-[hsl(214,88%,27%)] text-[hsl(214,88%,27%)]'
                      : 'text-gray-500 hover:text-[hsl(214,88%,27%)]'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`py-3 px-5 text-center font-medium text-sm focus:outline-none ${
                    activeTab === 'register'
                      ? 'border-b-2 border-[hsl(214,88%,27%)] text-[hsl(214,88%,27%)]'
                      : 'text-gray-500 hover:text-[hsl(214,88%,27%)]'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Active Form */}
              <div data-aos="fade-up" data-aos-delay="300">
                {activeTab === 'login' ? <Login /> : <Register />}
              </div>
            </div>

            {/* Right side - Google sign in and decorative elements */}
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-[hsl(214,88%,27%)] to-[hsl(214,70%,40%)] text-white p-8 relative">
              <div className="h-full flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
                <div className="max-w-sm mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Experience Seamless Shopping</h3>
                  <p className="mb-6 opacity-90">Create an account or sign in to enjoy all our features including personalized recommendations, order tracking, and exclusive deals.</p>
                  
                  <div className="mb-8">
                    <button
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                      className="w-full flex justify-center items-center bg-white text-gray-700 font-medium rounded-lg shadow-sm py-3 px-4 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(214,88%,27%)]"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                        <path d="M12 23C14.97 23 17.46 22 19.28 20.34L15.71 17.57C14.74 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.73 5.82 14.1H2.14V16.94C3.94 20.53 7.69 23 12 23Z" fill="#34A853" />
                        <path d="M5.82 14.1C5.6 13.44 5.48 12.74 5.48 12C5.48 11.26 5.61 10.56 5.82 9.9V7.06H2.14C1.41 8.55 1 10.22 1 12C1 13.78 1.41 15.45 2.14 16.94L5.82 14.1Z" fill="#FBBC05" />
                        <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69 1 3.94 3.47 2.14 7.06L5.82 9.9C6.72 7.27 9.13 5.38 12 5.38Z" fill="#EA4335" />
                      </svg>
                      {loading ? 'Loading...' : 'Continue with Google'}
                    </button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="opacity-20">
                    <svg className="mb-3 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-aos="zoom-in" data-aos-delay="500">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM11 6H13V14H11V6Z" />
                    </svg>
                    <svg className="h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-aos="zoom-in" data-aos-delay="600">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
                    </svg>
                  </div>
                </div>
                
                {/* Removing the white circles */}
              </div>
            </div>
          </div>
          
          {/* Mobile Google Sign In */}
          <div className="md:hidden px-8 pb-8">
            <div className="my-6 flex items-center" data-aos="fade-up" data-aos-delay="350">
              <div className="flex-grow border-t border-gray-200"></div>
              <div className="px-3 text-gray-500 text-sm">OR</div>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <div className="mt-2" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(214,88%,27%)]"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                  <path d="M12 23C14.97 23 17.46 22 19.28 20.34L15.71 17.57C14.74 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.73 5.82 14.1H2.14V16.94C3.94 20.53 7.69 23 12 23Z" fill="#34A853" />
                  <path d="M5.82 14.1C5.6 13.44 5.48 12.74 5.48 12C5.48 11.26 5.61 10.56 5.82 9.9V7.06H2.14C1.41 8.55 1 10.22 1 12C1 13.78 1.41 15.45 2.14 16.94L5.82 14.1Z" fill="#FBBC05" />
                  <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69 1 3.94 3.47 2.14 7.06L5.82 9.9C6.72 7.27 9.13 5.38 12 5.38Z" fill="#EA4335" />
                </svg>
                {loading ? 'Loading...' : 'Continue with Google'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;