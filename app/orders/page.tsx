'use client';

import Link from "next/link";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Orders() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

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
            <Link href="/login" className="text-gray-600 hover:text-[#2a9d8f] transition">
              {currentLanguage === 'hi' ? 'लॉगिन' : 'Login'}
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {currentLanguage === 'hi' ? 'ऑर्डर प्रबंधन' : 'Order Management'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'hi' 
              ? 'अपने ऑर्डर को कुशलतापूर्वक प्रबंधित करें और ग्राहक संतुष्टि बढ़ाएं'
              : 'Efficiently manage your orders and enhance customer satisfaction'
            }
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-blue-600">12</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {currentLanguage === 'hi' ? 'नए ऑर्डर' : 'New Orders'}
            </h3>
            <p className="text-gray-600 mb-4">
              {currentLanguage === 'hi' 
                ? 'प्रतीक्षा में ऑर्डर जो प्रसंस्करण की आवश्यकता रखते हैं'
                : 'Orders waiting for processing'
              }
            </p>
            <Link 
              href="/orders/new" 
              className="inline-flex items-center text-blue-600 font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'देखें' : 'View'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-yellow-600">8</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {currentLanguage === 'hi' ? 'प्रसंस्करण' : 'Processing'}
            </h3>
            <p className="text-gray-600 mb-4">
              {currentLanguage === 'hi' 
                ? 'वर्तमान में प्रसंस्करण में ऑर्डर'
                : 'Orders currently being processed'
              }
            </p>
            <Link 
              href="/orders/processing" 
              className="inline-flex items-center text-yellow-600 font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'देखें' : 'View'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-green-600">45</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {currentLanguage === 'hi' ? 'पूर्ण ऑर्डर' : 'Completed Orders'}
            </h3>
            <p className="text-gray-600 mb-4">
              {currentLanguage === 'hi' 
                ? 'सफलतापूर्वक पूर्ण किए गए ऑर्डर'
                : 'Successfully completed orders'
              }
            </p>
            <Link 
              href="/orders/completed" 
              className="inline-flex items-center text-green-600 font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'देखें' : 'View'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Order Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'ऑर्डर आंकड़े' : 'Order Statistics'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2a9d8f] mb-2">₹2,45,000</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'कुल राजस्व' : 'Total Revenue'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'कुल ऑर्डर' : 'Total Orders'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">₹1,570</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'औसत ऑर्डर मूल्य' : 'Average Order Value'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'ग्राहक रेटिंग' : 'Customer Rating'}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/orders/create" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'नया ऑर्डर' : 'New Order'}
              </span>
            </Link>
            
            <Link 
              href="/orders/track" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'ऑर्डर ट्रैक' : 'Track Order'}
              </span>
            </Link>
            
            <Link 
              href="/orders/returns" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'रिटर्न प्रबंधन' : 'Returns'}
              </span>
            </Link>
            
            <Link 
              href="/orders/settings" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'सेटिंग्स' : 'Settings'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 