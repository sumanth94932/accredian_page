"use client";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="h-10 w-32 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                Accredian
              </div>
              <div className="hidden md:flex gap-6 font-medium text-gray-700">
                <a href="#home" className="hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="#edge" className="hover:text-blue-600 transition-colors duration-200">Accredian Edge</a>
<a href="#cat" className="hover:text-blue-600 transition-colors duration-200">CAT</a>
                <a href="#flow" className="hover:text-blue-600 transition-colors duration-200">How It Works</a>
                <a href="#faqs" className="hover:text-blue-600 transition-colors duration-200">FAQs</a>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">Testimonials</a>
              </div>
            </div>
            <a 
              href="#cta"
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

