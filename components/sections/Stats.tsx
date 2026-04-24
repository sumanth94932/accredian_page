const stats = [
  { value: '20K+', label: 'Professionals Trained', icon: '👥' },
  { value: '₹25LPA', label: 'Avg CTC', icon: '💰' },
  { value: '100%', label: 'Placement Rate', icon: '✅' },
  { value: '50+', label: 'Hiring Partners', icon: '🏢' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-gradient-to-b from-blue-50 to-indigo-50 hover:from-orange-50 border hover:border-orange-200 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

