'use client';

import Link from "next/link";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Payments() {
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
            {currentLanguage === 'hi' ? 'भुगतान प्रबंधन' : 'Payment Management'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'hi' 
              ? 'सुरक्षित और कुशल भुगतान प्रसंस्करण के साथ अपने राजस्व को प्रबंधित करें'
              : 'Manage your revenue with secure and efficient payment processing'
            }
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'भुगतान विधियां' : 'Payment Methods'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'विभिन्न भुगतान विकल्पों का प्रबंधन करें और ग्राहक अनुभव बढ़ाएं'
                : 'Manage various payment options and enhance customer experience'
              }
            </p>
            <Link 
              href="/payments/methods" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'विधियां देखें' : 'View Methods'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'लेन-देन इतिहास' : 'Transaction History'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'सभी भुगतान लेन-देन का विस्तृत इतिहास और रिपोर्ट देखें'
                : 'View detailed history and reports of all payment transactions'
              }
            </p>
            <Link 
              href="/payments/history" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'इतिहास देखें' : 'View History'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'लंबित भुगतान' : 'Pending Payments'}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentLanguage === 'hi' 
                ? 'लंबित भुगतानों को ट्रैक करें और उनका प्रबंधन करें'
                : 'Track and manage pending payments efficiently'
              }
            </p>
            <Link 
              href="/payments/pending" 
              className="inline-flex items-center text-[#2a9d8f] font-semibold hover:underline"
            >
              {currentLanguage === 'hi' ? 'लंबित देखें' : 'View Pending'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Payment Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'भुगतान आंकड़े' : 'Payment Statistics'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2a9d8f] mb-2">₹3,45,000</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'कुल राजस्व' : 'Total Revenue'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'सफलता दर' : 'Success Rate'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2,875</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'औसत लेन-देन' : 'Average Transaction'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">120</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'आज के लेन-देन' : 'Today\'s Transactions'}
              </div>
            </div>
          </div>
        </div>

        {/* Supported Payment Methods */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'hi' ? 'समर्थित भुगतान विधियां' : 'Supported Payment Methods'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'UPI' : 'UPI'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'तत्काल भुगतान' : 'Instant Payment'}
              </p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'कार्ड' : 'Cards'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'डेबिट/क्रेडिट' : 'Debit/Credit'}
              </p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'नेट बैंकिंग' : 'Net Banking'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'बैंक ट्रांसफर' : 'Bank Transfer'}
              </p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'डिजिटल वॉलेट' : 'Digital Wallet'}
              </h3>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'Paytm/PhonePe' : 'Paytm/PhonePe'}
              </p>
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
              href="/payments/refund" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'रिफंड' : 'Refund'}
              </span>
            </Link>
            
            <Link 
              href="/payments/dispute" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-[#2a9d8f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="font-medium">
                {currentLanguage === 'hi' ? 'विवाद प्रबंधन' : 'Dispute Management'}
              </span>
            </Link>
            
            <Link 
              href="/payments/reports" 
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
              href="/payments/settings" 
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