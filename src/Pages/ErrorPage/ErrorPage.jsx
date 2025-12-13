import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4"
    >
      <div
        className="relative bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]
        rounded-3xl p-12 max-w-lg w-full text-center text-white"
      >
        {/* Glow Effect */}
        <div
          className="absolute -top-10 -left-10 w-40 h-40 
          bg-purple-500/30 rounded-full blur-3xl"
        ></div>
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 
          bg-pink-500/30 rounded-full blur-3xl"
        ></div>

        <div className="relative flex justify-center mb-6">
          <FaRegSadTear className="text-7xl text-purple-400" />
        </div>

        <h1 className="relative text-6xl font-extrabold tracking-wide mb-3">
          404
        </h1>

        <p className="relative text-lg text-gray-300 mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="relative inline-flex items-center gap-2
          px-8 py-3 rounded-full
          bg-gradient-to-r from-purple-500 to-pink-500
          text-white font-semibold
          hover:scale-105 transition-transform duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
