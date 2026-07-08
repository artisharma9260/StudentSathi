export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 text-white py-12 mt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-5 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-green-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <h3 className="text-white mb-2">StudentSathi</h3>
          <p className="text-blue-200">Empowering Students, One Step at a Time</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#documents" className="text-blue-200 hover:text-white transition-colors">Documents</a>
          <a href="#certificates" className="text-blue-200 hover:text-white transition-colors">Certificates</a>
          <a href="#schemes" className="text-blue-200 hover:text-white transition-colors">Schemes</a>
          <a href="#skills" className="text-blue-200 hover:text-white transition-colors">Skills</a>
          <a href="#helplines" className="text-blue-200 hover:text-white transition-colors">Helplines</a>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-blue-200">StudentSathi © 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}