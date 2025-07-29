'use client';

import { useState } from "react";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Login() {
  const { currentLanguage } = useLanguage();
  const [loginType, setLoginType] = useState<'customer' | 'farmer'>('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to users page after successful login
      window.location.href = '/users';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo size="md" />
            <LanguageSwitcher />
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#2a9d8f] transition">
              {currentLanguage === 'hi' ? 'होम' : 'Home'}
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Logo size="lg" className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'लॉगिन करें' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600">
                {currentLanguage === 'hi' 
                  ? 'अपने खाते में लॉगिन करें'
                  : 'Sign in to your account'
                }
              </p>
            </div>

            {/* Login Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {currentLanguage === 'hi' ? 'लॉगिन प्रकार चुनें' : 'Select Login Type'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLoginType('customer')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    loginType === 'customer'
                      ? 'border-[#2a9d8f] bg-[#2a9d8f] text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#2a9d8f]'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 mb-2">👥</div>
                    <span className="text-sm font-medium">
                      {currentLanguage === 'hi' ? 'ग्राहक' : 'Customer'}
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setLoginType('farmer')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    loginType === 'farmer'
                      ? 'border-[#2a9d8f] bg-[#2a9d8f] text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#2a9d8f]'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 mb-2">👨‍🌾</div>
                    <span className="text-sm font-medium">
                      {currentLanguage === 'hi' ? 'किसान' : 'Farmer'}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLanguage === 'hi' ? 'ईमेल' : 'Email'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent transition"
                  placeholder={currentLanguage === 'hi' ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLanguage === 'hi' ? 'पासवर्ड' : 'Password'}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent transition"
                  placeholder={currentLanguage === 'hi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password'}
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#2a9d8f] border-gray-300 rounded focus:ring-[#2a9d8f]"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    {currentLanguage === 'hi' ? 'मुझे याद रखें' : 'Remember me'}
                  </label>
                </div>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-[#2a9d8f] hover:underline"
                >
                  {currentLanguage === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot password?'}
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {currentLanguage === 'hi' ? 'लॉगिन हो रहा है...' : 'Signing in...'}
                  </div>
                ) : (
                  currentLanguage === 'hi' ? 'लॉगिन करें' : 'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">
                {currentLanguage === 'hi' ? 'या' : 'or'}
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700">
                  {currentLanguage === 'hi' ? 'Google के साथ लॉगिन करें' : 'Continue with Google'}
                </span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {currentLanguage === 'hi' ? 'खाता नहीं है?' : "Don't have an account?"}
                <Link 
                  href="/register" 
                  className="text-[#2a9d8f] font-semibold hover:underline ml-1"
                >
                  {currentLanguage === 'hi' ? 'साइन अप करें' : 'Sign up'}
                </Link>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'सुरक्षित' : 'Secure'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'एंड-टू-एंड एन्क्रिप्शन' : 'End-to-end encryption'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'तेज़' : 'Fast'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'त्वरित लॉगिन' : 'Quick login process'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'विश्वसनीय' : 'Reliable'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? '99.9% अपटाइम' : '99.9% uptime'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 