import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg"></div>
            <span className="text-xl font-bold text-gray-800">Kisaan Direct</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-[#2a9d8f] transition">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#2a9d8f] transition">Success Stories</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2a9d8f] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Trusted by 10,000+ Farmers Across India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] mb-6">
            Transform Your Farm Business
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Connect directly with consumers, manage inventory, track orders, and boost your profits with our comprehensive farm-to-table platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/users" 
              className="px-8 py-4 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              Start Your Journey
            </Link>
            <Link 
              href="#demo" 
              className="px-8 py-4 border-2 border-[#2a9d8f] text-[#2a9d8f] font-bold rounded-xl hover:bg-[#2a9d8f] hover:text-white transition-all duration-200 text-lg"
            >
              Watch Demo
            </Link>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No Setup Fees
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Instant Setup
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/users" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Users</Link>
          <Link href="/inventory" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Inventory</Link>
          <Link href="/orders" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Orders</Link>
          <Link href="/payments" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Payments</Link>
          <Link href="/logistics" className="px-6 py-3 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Logistics</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools you need to grow your farm business and connect with customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">User Management</h3>
              <p className="text-gray-600 mb-6">Complete user registration, authentication, and profile management system.</p>
              <Link href="/users" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Inventory Management</h3>
              <p className="text-gray-600 mb-6">Track your products, manage stock levels, and monitor your farm's resources.</p>
              <Link href="/inventory" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Processing</h3>
              <p className="text-gray-600 mb-6">Handle customer orders efficiently with automated processing and tracking.</p>
              <Link href="/orders" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Processing</h3>
              <p className="text-gray-600 mb-6">Secure payment processing with multiple payment gateway integrations.</p>
              <Link href="/payments" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Logistics Management</h3>
              <p className="text-gray-600 mb-6">Optimize delivery routes and manage transportation efficiently.</p>
              <Link href="/logistics" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics & Reports</h3>
              <p className="text-gray-600 mb-6">Get detailed insights into your business performance and growth metrics.</p>
              <Link href="/analytics" className="text-[#2a9d8f] font-semibold hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how farmers are transforming their businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2a9d8f] rounded-full flex items-center justify-center text-white font-bold mr-4">R</div>
                <div>
                  <h4 className="font-bold text-gray-800">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Organic Farmer, Punjab</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Kisaan Direct helped me increase my profits by 150% in just 6 months. The direct connection with customers has been game-changing."</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f4a261] rounded-full flex items-center justify-center text-white font-bold mr-4">P</div>
                <div>
                  <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Dairy Farmer, Haryana</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"The inventory management system is incredible. I can track everything from production to delivery seamlessly."</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2a9d8f] rounded-full flex items-center justify-center text-white font-bold mr-4">A</div>
                <div>
                  <h4 className="font-bold text-gray-800">Amit Patel</h4>
                  <p className="text-sm text-gray-600">Vegetable Farmer, Gujarat</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"The logistics optimization saved me 30% on delivery costs. My customers love the real-time tracking feature."</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2a9d8f] to-[#f4a261]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farm Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have already increased their profits and connected with more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/users" 
              className="px-8 py-4 bg-white text-[#2a9d8f] font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              Get Started Free
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2a9d8f] transition-all duration-200 text-lg"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
