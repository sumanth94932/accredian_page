export default function Segmentation() {
  const quadrants = [
    {
      title: "Program Specific",
      subtitle: "Certificate, Executive, Post Graduate Certificate",
      image: "/program-specific.svg"
    },
    {
      title: "Industry Specific",
      subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/industry-specific.svg"
    },
    {
      title: "Topic Specific",
      subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/topic-specific.svg"
    },
    {
      title: "Level Specific",
      subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/level-specific.svg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Course Segmentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quadrants.slice(0, 2).map((quadrant, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-blue-100 hover:border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <img src={quadrant.image} alt={quadrant.title} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">{quadrant.title}</h3>
                    <p className="text-gray-600">{quadrant.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quadrants.slice(2).map((quadrant, index) => (
              <div key={index + 2} className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-orange-100 hover:border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <img src={quadrant.image} alt={quadrant.title} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600">{quadrant.title}</h3>
                    <p className="text-gray-600">{quadrant.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
