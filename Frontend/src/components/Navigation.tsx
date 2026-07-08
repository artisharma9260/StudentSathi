// import logoImage from "../assets/newlogo.png";
import logoImage from "../assets/newlogo.png";


export default function Navigation() {
  const navItems = [
    "Home",
    "Schemes",
    "Documents",
    "Certificates",
    "Skills",
    "Helplines",
  ];

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload(); // simple & effective
  };

  return (
    <nav className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="StudentSathi Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* ✅ ADMIN ONLY */}
            {user?.role === "admin" && (
              <a
                href="#admin"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                Admin Dashboard
              </a>
            )}
          </div>

          {/* Right Side Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-blue-800 font-medium">
                  Hello, {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
