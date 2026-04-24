export default function Edge() {
  return (
    <section id="edge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Accredian Edge
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key Aspects of Our Strategic Training
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive training solutions tailored for enterprise needs, from skill gap analysis to customized delivery models.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Strategic skill gap assessment</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Customized learning paths</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Flexible delivery formats</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Domain Expertise</h3>
            <p className="text-lg text-gray-600 mb-8">
              Deep industry knowledge across technology, leadership, and digital transformation domains.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Technology & Data Science</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Product & Innovation</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Leadership Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
