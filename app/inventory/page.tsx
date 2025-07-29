'use client';

import Link from "next/link";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Inventory() {
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
            {currentLanguage === 'hi' ? 'इन्वेंटरी प्रबंधन' : 'Inventory Management'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'hi' 
              ? 'अपने उत्पादों को कुशलतापूर्वक प्रबंधित करें और स्टॉक को ट्रैक करें'
              : 'Efficiently manage your products and track inventory levels'
            }
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'उत्पाद श्रेणियां' : 'Product Categories'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'अपने उत्पादों को श्रेणियों में व्यवस्थित करें और आसानी से प्रबंधित करें'
                : 'Organize your products into categories and manage them easily'
              }
            </p>
            <Link 
              href="/inventory/categories" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'श्रेणियां देखें' : 'View Categories'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'स्टॉक प्रबंधन' : 'Stock Management'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'रियल-टाइम स्टॉक लेवल्स ट्रैक करें और अलर्ट सेट करें'
                : 'Track real-time stock levels and set up alerts for low inventory'
              }
            </p>
            <Link 
              href="/inventory/stock" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'स्टॉक देखें' : 'View Stock'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'नया उत्पाद जोड़ें' : 'Add New Product'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'आसानी से नए उत्पाद जोड़ें और उनकी जानकारी प्रबंधित करें'
                : 'Easily add new products and manage their information'
              }
            </p>
            <Link 
              href="/inventory/add" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'उत्पाद जोड़ें' : 'Add Product'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/inventory/scan" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'बारकोड स्कैन' : 'Scan Barcode'}
              </span>
            </Link>
            
            <Link 
              href="/inventory/export" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'डेटा निर्यात' : 'Export Data'}
              </span>
            </Link>
            
            <Link 
              href="/inventory/reports" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'रिपोर्ट देखें' : 'View Reports'}
              </span>
            </Link>
            
            <Link 
              href="/inventory/settings" 
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