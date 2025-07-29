'use client';

import Link from "next/link";
import { translations, Language } from "./translations";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Logo from "./components/Logo";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
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
            <a href="#features" className="text-gray-600 hover:text-[#2a9d8f] transition">{t.nav.features}</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2a9d8f] transition">{t.nav.contact}</a>
            <Link href="/login" className="text-gray-600 hover:text-[#2a9d8f] transition">
              {currentLanguage === 'hi' ? 'लॉगिन' : 'Login'}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] mb-6">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/users" 
              className="px-8 py-4 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              {t.hero.startJourney}
            </Link>
            <Link 
              href="#demo" 
              className="px-8 py-4 border-2 border-[#2a9d8f] text-[#2a9d8f] font-bold rounded-xl hover:bg-[#2a9d8f] hover:text-white transition-all duration-200 text-lg"
            >
              {t.hero.watchDemo}
            </Link>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {t.hero.noSetupFees}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {t.hero.instantSetup}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {t.hero.support247}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/users" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">{t.quickNav.users}</Link>
          <Link href="/inventory" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">{t.quickNav.inventory}</Link>
          <Link href="/orders" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">{t.quickNav.orders}</Link>
          <Link href="/payments" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">{t.quickNav.payments}</Link>
          <Link href="/logistics" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">{t.quickNav.logistics}</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.features.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.features.userManagement.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.userManagement.description}</p>
              <Link href="/users" className="text-[#2a9d8f] font-semibold hover:underline">{t.features.userManagement.learnMore}</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.features.inventoryManagement.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.inventoryManagement.description}</p>
              <Link href="/inventory" className="text-[#2a9d8f] font-semibold hover:underline">{t.features.inventoryManagement.learnMore}</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.features.orderProcessing.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.orderProcessing.description}</p>
              <Link href="/orders" className="text-[#2a9d8f] font-semibold hover:underline">{t.features.orderProcessing.learnMore}</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.features.paymentProcessing.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.paymentProcessing.description}</p>
              <Link href="/payments" className="text-[#2a9d8f] font-semibold hover:underline">{t.features.paymentProcessing.learnMore}</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.features.logisticsManagement.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.logisticsManagement.description}</p>
              <Link href="/logistics" className="text-[#2a9d8f] font-semibold hover:underline">{t.features.logisticsManagement.learnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/users" 
              className="px-8 py-4 bg-white text-[#2a9d8f] font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              {t.cta.getStartedFree}
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2a9d8f] transition-all duration-200 text-lg"
            >
              {t.cta.scheduleDemo}
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">{t.cta.noCreditCard}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'hi' ? 'संपर्क करें' : 'Contact Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentLanguage === 'hi' 
                ? 'हमसे संपर्क करें और अपने खेत के व्यवसाय को बदलने के लिए शुरू करें'
                : 'Get in touch with us and start transforming your farm business'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {currentLanguage === 'hi' ? 'संदेश भेजें' : 'Send Message'}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLanguage === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent"
                    placeholder={currentLanguage === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLanguage === 'hi' ? 'ईमेल' : 'Email'}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent"
                    placeholder={currentLanguage === 'hi' ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLanguage === 'hi' ? 'संदेश' : 'Message'}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent"
                    placeholder={currentLanguage === 'hi' ? 'अपना संदेश लिखें' : 'Write your message'}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  {currentLanguage === 'hi' ? 'संदेश भेजें' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {currentLanguage === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {currentLanguage === 'hi' ? 'फोन' : 'Phone'}
                      </p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {currentLanguage === 'hi' ? 'ईमेल' : 'Email'}
                      </p>
                      <p className="text-gray-600">info@kisaandirect.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2a9d8f] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {currentLanguage === 'hi' ? 'पता' : 'Address'}
                      </p>
                      <p className="text-gray-600">
                        {currentLanguage === 'hi' 
                          ? '123, किसान मार्ग, नई दिल्ली - 110001'
                          : '123, Kisaan Marg, New Delhi - 110001'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {currentLanguage === 'hi' ? 'कार्य समय' : 'Working Hours'}
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>{currentLanguage === 'hi' ? 'सोमवार - शुक्रवार: 9:00 AM - 6:00 PM' : 'Monday - Friday: 9:00 AM - 6:00 PM'}</p>
                  <p>{currentLanguage === 'hi' ? 'शनिवार: 9:00 AM - 2:00 PM' : 'Saturday: 9:00 AM - 2:00 PM'}</p>
                  <p>{currentLanguage === 'hi' ? 'रविवार: बंद' : 'Sunday: Closed'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
