export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-orange-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-4 text-shadow-lg">StudentSathi</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Your One-Stop Digital Guide for Student Empowerment
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
            <p className="text-white">📚 100+ Resources</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
            <p className="text-white">🎓 All Services</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
            <p className="text-white">🚀 Easy Access</p>
          </div>
        </div>
      </div>
    </div>
  );
}