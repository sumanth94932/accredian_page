export default function WhoJoin() {
  const personas = [
    {
      title: "Tech Professionals",
      subtitle: "Enhance expertise, embrace tech, drive innovation.",
      image: "/tech-prof.png",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Non-Tech Professionals",
      subtitle: "Adapt digitally, collaborate in tech environments.",
      image: "/non-tech-prof.png",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Emerging Professionals",
      subtitle: "Develop powerful skills for rapid career growth.",
      image: "/emerging-prof.png",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Senior Professionals",
      subtitle: "Strengthen leadership, enhance strategic decisions.",
      image: "/senior-prof.png",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="who" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Should Join?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic Skill Enhancement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent z-10"></div>
              <div className={`absolute top-8 right-8 w-32 h-32 bg-gradient-to-br ${persona.color} rounded-3xl opacity-20 group-hover:opacity-30 transition-all blur-xl -z-0`}></div>
              <div className="relative z-20 p-8 md:p-12 h-80 flex flex-col justify-end">
                <div className="mb-6">
                  <img src={persona.image} alt={persona.title} className="w-24 h-24 mx-auto rounded-2xl shadow-lg mb-4" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-700 transition">{persona.title}</h3>
                <p className="text-lg text-gray-600 text-center leading-relaxed">{persona.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
