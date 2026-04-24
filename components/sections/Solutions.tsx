export default function Solutions() {
  const solutions = [
    {
      title: "Product & Innovation Hub",
      description: "Drive product innovation and market leadership",
      image: "/product-innovation.svg"
    },
    {
      title: "Gen-AI Mastery",
      description: "Implement generative AI at enterprise scale",
      image: "/gen-ai.svg"
    },
    {
      title: "Leadership Elevation",
      description: "Develop visionary enterprise leaders",
      image: "/leadership.svg"
    },
    {
      title: "Tech & Data Insights",
      description: "Unlock data-driven business intelligence",
      image: "/tech-data.svg"
    },
    {
      title: "Operations Excellence",
      description: "Optimize enterprise operations and efficiency",
      image: "/operations.svg"
    },
    {
      title: "Digital Enterprise",
      description: "Accelerate digital transformation journeys",
      image: "/digital-enterprise.svg"
    },
    {
      title: "Fintech Innovation Lab",
      description: "Build next-gen financial technology solutions",
      image: "/fintech.svg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized Programs Designed to Fuel Innovation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <img src={solution.image} alt={solution.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition">{solution.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
