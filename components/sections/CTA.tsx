interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
<section id="cta" className="py-24 bg-gradient-to-r from-gray-900 via-slate-900 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 md:p-20 border border-white/20 shadow-2xl">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            Ready to Accelerate <br />Your Career?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 20K+ professionals who've unlocked six-figure tech careers with Accredian.
            <br />Next cohort starts in 7 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={onOpenModal}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all w-full sm:w-auto cursor-pointer"
            >
              Start Application
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-12 py-6 rounded-2xl font-bold text-xl backdrop-blur-md hover:bg-white/10 transition-all w-full sm:w-auto cursor-pointer">
              Book Free Counseling
            </button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-gray-400 text-lg">
              ✅ <strong>100% Money Back Guarantee</strong> • ✅ <strong>Job Guarantee</strong> • ✅ <strong>Live Mentorship</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
