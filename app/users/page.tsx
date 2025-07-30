'use client';

import Link from "next/link";
import { translations, Language } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import TextToSpeech from "../components/TextToSpeech";
import { useLanguage } from "../contexts/LanguageContext";

export default function Users() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo size="md" />
            <LanguageSwitcher />
            <TextToSpeech />
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'hi' ? 'अपने ग्राहकों को देखें' : 'View Your Customers'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {currentLanguage === 'hi' 
                  ? 'अपने ग्राहकों की जानकारी और आंकड़े देखने के लिए लॉगिन करें'
                  : 'Login to view your customer information and analytics'
                }
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {currentLanguage === 'hi' ? 'ग्राहक आंकड़े' : 'Customer Analytics'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'hi' 
                    ? 'विस्तृत ग्राहक आंकड़े और रुझान देखें'
                    : 'View detailed customer analytics and trends'
                  }
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {currentLanguage === 'hi' ? 'ग्राहक प्रबंधन' : 'Customer Management'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'hi' 
                    ? 'ग्राहक जानकारी और संपर्क विवरण प्रबंधित करें'
                    : 'Manage customer information and contact details'
                  }
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {currentLanguage === 'hi' ? 'रिपोर्ट और अंतर्दृष्टि' : 'Reports & Insights'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'hi' 
                    ? 'ग्राहक व्यवहार और प्रदर्शन रिपोर्ट'
                    : 'Customer behavior and performance reports'
                  }
                </p>
              </div>
            </div>

            {/* Login Button */}
            <Link 
              href="/login" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              {currentLanguage === 'hi' ? 'लॉगिन करें' : 'Login to Continue'}
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'hi' ? 'ग्राहक अंतर्दृष्टि' : 'Customer Insights'}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक खरीदारी पैटर्न' : 'Customer purchase patterns'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक संतुष्टि स्कोर' : 'Customer satisfaction scores'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक प्रतिधारण दर' : 'Customer retention rates'}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'hi' ? 'प्रबंधन सुविधाएं' : 'Management Features'}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक संपर्क प्रबंधन' : 'Customer contact management'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक संचार इतिहास' : 'Customer communication history'}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {currentLanguage === 'hi' ? 'ग्राहक प्रोफाइल अपडेट' : 'Customer profile updates'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 