'use client';

import Link from "next/link";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Logistics() {
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
            {currentLanguage === 'hi' ? 'लॉजिस्टिक्स प्रबंधन' : 'Logistics Management'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'hi' 
              ? 'अपने डिलीवरी नेटवर्क को कुशलतापूर्वक प्रबंधित करें और ग्राहक संतुष्टि बढ़ाएं'
              : 'Efficiently manage your delivery network and enhance customer satisfaction'
            }
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'डिलीवरी ट्रैकिंग' : 'Delivery Tracking'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'रियल-टाइम डिलीवरी स्थिति ट्रैक करें और ग्राहकों को अपडेट दें'
                : 'Track real-time delivery status and keep customers updated'
              }
            </p>
            <Link 
              href="/logistics/tracking" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'ट्रैकिंग देखें' : 'View Tracking'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'रूट ऑप्टिमाइजेशन' : 'Route Optimization'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'सबसे कुशल डिलीवरी मार्गों का पता लगाएं और ईंधन बचाएं'
                : 'Find the most efficient delivery routes and save fuel costs'
              }
            </p>
            <Link 
              href="/logistics/routes" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'मार्ग देखें' : 'View Routes'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'फ्लीट प्रबंधन' : 'Fleet Management'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'अपने वाहनों और ड्राइवरों का प्रबंधन करें और प्रदर्शन ट्रैक करें'
                : 'Manage your vehicles and drivers while tracking performance'
              }
            </p>
            <Link 
              href="/logistics/fleet" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'फ्लीट देखें' : 'View Fleet'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Logistics Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'लॉजिस्टिक्स आंकड़े' : 'Logistics Statistics'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2a9d8f] mb-2">156</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'आज की डिलीवरी' : 'Today\'s Deliveries'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98.2%</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'सफलता दर' : 'Success Rate'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'सक्रिय वाहन' : 'Active Vehicles'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2.3</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'औसत डिलीवरी समय (घंटे)' : 'Avg Delivery Time (hrs)'}
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Status Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'डिलीवरी स्थिति अवलोकन' : 'Delivery Status Overview'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'पिकअप' : 'Pickup'}
              </h3>
              <p className="text-sm text-gray-600">12</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'पारगमन' : 'In Transit'}
              </h3>
              <p className="text-sm text-gray-600">34</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'पूर्ण' : 'Delivered'}
              </h3>
              <p className="text-sm text-gray-600">98</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'विफल' : 'Failed'}
              </h3>
              <p className="text-sm text-gray-600">3</p>
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
              href="/logistics/schedule" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'डिलीवरी शेड्यूल' : 'Schedule Delivery'}
              </span>
            </Link>
            
            <Link 
              href="/logistics/track" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'ट्रैक पैकेज' : 'Track Package'}
              </span>
            </Link>
            
            <Link 
              href="/logistics/reports" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'रिपोर्ट' : 'Reports'}
              </span>
            </Link>
            
            <Link 
              href="/logistics/settings" 
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