import { useEffect, useState } from "react";
import { ChevronDown, Link, Moon } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={` top-0 left-0 z-50 w-full transition-all  ${
        visible
          ? "fixed translate-y-0 opacity-100 bg-white/80 backdrop-blur-xs border-b border-slate-200/60 shadow-sm"
          : "absolute bg-transparent"
      }`}
    >
      <div className="mx-auto flex py-4 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 to-blue-400" />
          <span className="text-3xl font-extrabold tracking-tight text-slate-900">
            Startup
          </span>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#home" className="text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
          <a href="#support" className="hover:text-blue-600">Support</a>
          <button className="flex items-center gap-1 hover:text-blue-600">
            Pages <ChevronDown size={18} />
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#signin" className="hidden font-medium md:inline-block">
            Sign In
          </a>
          <button className="rounded-md bg-indigo-500 px-7 py-3 font-semibold text-white shadow-md hover:bg-indigo-600">
            Sign Up
          </button>
          <button className="rounded-full p-2 hover:bg-slate-100">
            <Moon size={26} />
          </button>
        </div>
      </div>
    </header>
  );
}