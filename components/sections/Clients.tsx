const clients = [
  { name: 'Google', logo: '/next.svg' },
  { name: 'Amazon', logo: '/globe.svg' },
  { name: 'Microsoft', logo: '/window.svg' },
  { name: 'Meta', logo: '/file.svg' },
  { name: 'Netflix', logo: '/vercel.svg' },
  { name: 'Adobe', logo: '/next.svg' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Enterprises</h2>
          <p className="text-xl text-gray-600">20K+ professionals from top companies trained</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {clients.map((client, index) => (
            <div key={index} className="group flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-24">
              <img src={client.logo} alt={client.name} className="h-12 w-auto max-h-12 grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

