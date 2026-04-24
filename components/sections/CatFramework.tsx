export default function CatFramework() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs."
    },
    {
      number: "2",
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals."
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs."
    }
  ];

  return (
    <section id="cat" className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The CAT Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our Proven Approach to Learning Excellence
          </p>
          <p className="text-2xl font-semibold text-blue-600 max-w-3xl mx-auto">
            How We Deliver Results That Matter?
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center relative">
          {/* Vertical line connector */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-400 opacity-20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative z-10 ${index !== 1 ? 'md:text-right md:text-left' : ''}`}>
              <div className={`w-24 h-24 mx-auto md:ml-auto md:mr-auto rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center shadow-2xl mb-8 border-4 border-white text-white font-bold text-2xl group-hover:scale-110 transition-all`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
