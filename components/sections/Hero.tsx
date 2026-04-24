export default function Hero() {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden" style={{ backgroundImage: 'url("/headerImage.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-gray-900/90 flex items-center justify-center">
          <div className="w-[500px] h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl absolute"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-32 gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-left max-w-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-50 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              Next-Gen Expertise <br className="hidden lg:block" />for Your Enterprise
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
              Cultivate high-performance teams through expert learning and strategic skill development.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/team-work.png" alt="Enterprise Team Collaboration" className="w-full max-w-lg h-[450px] object-cover rounded-3xl shadow-2xl border-8 border-white/20 hover:scale-[1.02] transition-all duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Tailored Solutions</h3>
            <p className="text-white/90 text-center">Custom programs for your goals</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Industry Insights</h3>
            <p className="text-white/90 text-center">Latest trends & best practices</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM17.657 3.757l-.707-.707m2.828 9.9a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-9.394 5.757l-.707-.707M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Expert Guidance</h3>
            <p className="text-white/90 text-center">Mentors from top enterprises</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 text-white px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
