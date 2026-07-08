// 

import { useState } from "react";
import logoImage from "../assets/newlogo.png";
import { Mail, Lock, UserCircle } from "lucide-react";

interface LoginPageProps {
  onLogin: (user: any) => void;
  onGuestLogin: () => void;
}

export default function LoginPage({ onLogin, onGuestLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token & user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      onLogin(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-500 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="bg-white rounded-3xl p-4 inline-block shadow-2xl">
            <img src={logoImage} alt="Student Saathi" className="w-44 mx-auto" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8">
          <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
            Welcome Back
          </h2>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-500">or</div>

          {/* Guest Login */}
          <button
            onClick={onGuestLogin}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl shadow-lg flex justify-center items-center gap-2 hover:scale-105 transition"
          >
            <UserCircle className="w-5 h-5" />
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
