export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 max-w-7xl mx-auto">
        
        {/* Sidebar izquierda con pasos verticales */}
        <aside className="bg-white rounded-xl shadow-lg p-8 h-fit">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-8">
            <span className="w-6 h-6 bg-white rounded"></span>
          </div>

          <nav className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-green-500"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Step 1</p>
                <p className="font-semibold text-gray-800">Basic Details</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-green-500"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Step 2</p>
                <p className="font-semibold text-gray-800">Company Details</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-gray-300"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Step 3</p>
                <p className="font-semibold text-gray-800">Subscription plan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-lg font-bold">$</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Step 4</p>
                <p className="font-medium text-gray-400">Payment details</p>
              </div>
            </div>
          </nav>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <button className="flex items-center gap-3 text-gray-600 hover:text-gray-800">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg">?</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Having troubles?</p>
                <p className="text-sm font-medium">Contact us</p>
              </div>
            </button>
          </div>
        </aside>

        {/* Contenido principal */}
        <div className="space-y-6">
          
          {/* Barra superior horizontal con pasos */}
          <header className="bg-white rounded-xl shadow-lg p-6">
            <nav className="flex items-center justify-between gap-4">
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 uppercase mb-1">Step 1</p>
                <p className="font-semibold text-gray-800 text-sm">Card Details</p>
                <span className="text-xs text-green-500 font-medium mt-1">Completed</span>
              </div>

              <div className="flex-1 h-0.5 bg-green-500 -mt-12"></div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 uppercase mb-1">Step 2</p>
                <p className="font-semibold text-gray-800 text-sm">Form Review</p>
                <span className="text-xs text-green-500 font-medium mt-1">Completed</span>
              </div>

              <div className="flex-1 h-0.5 bg-indigo-600 -mt-12"></div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 uppercase mb-1">Step 3</p>
                <p className="font-semibold text-gray-800 text-sm">Authenticate OTP</p>
                <span className="text-xs text-indigo-600 font-medium mt-1">In Progress</span>
              </div>

              <div className="flex-1 h-0.5 bg-gray-300 -mt-12"></div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-400 uppercase mb-1">Step 4</p>
                <p className="font-medium text-gray-400 text-sm">Create Code</p>
                <span className="text-xs text-gray-400 font-medium mt-1">Pending</span>
              </div>
            </nav>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Columna izquierda: Tarjetas de estado */}
            <div className="space-y-6">
              
              {/* Tarjeta azul central */}
              <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-1">Card Details</h2>
                    <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">Completed</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Form Review</h3>
                    <span className="inline-block bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-medium">In Progress</span>
                    <p className="text-sm text-indigo-100 mt-2">Application and forms will go through a step by step review process.</p>
                  </div>
                </div>
              </section>

              {/* Tarjeta de Application Review */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Step 2</p>
                    <h3 className="font-bold text-gray-800 text-lg">Application Review</h3>
                    <p className="text-sm text-gray-600 mt-1">Application and forms will go through a step by step review process.</p>
                  </div>
                </div>

                <div className="bg-indigo-600 rounded-lg p-4 mt-4">
                  <p className="text-xs text-indigo-200 uppercase mb-2">Time Remaining</p>
                  <p className="text-2xl font-bold text-white mb-3">48 hours</p>
                  <div className="w-full bg-indigo-800 rounded-full h-2">
                    <div className="bg-white rounded-full h-2" style={{width: '60%'}}></div>
                  </div>
                </div>
              </section>
            </div>

            {/* Columna derecha: Formulario de pago */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">$</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Step 4 / 5</p>
                  <h2 className="font-bold text-gray-800 text-lg">Payment Details</h2>
                </div>
              </div>

              <div className="w-full h-0.5 bg-indigo-600 mb-6"></div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CARD DETAILS</label>
                  <input 
                    type="text" 
                    placeholder="Alex Parkinson" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg">
                    <div className="w-8 h-6 bg-indigo-600 rounded flex-shrink-0"></div>
                    <input 
                      type="text" 
                      placeholder="4858 3445" 
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Expiry" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input 
                    type="text" 
                    placeholder="CVV" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">BILLING ADDRESS</label>
                  <input 
                    type="text" 
                    placeholder="Street Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="City" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input 
                    type="text" 
                    placeholder="State" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button 
                    type="button"
                    className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
