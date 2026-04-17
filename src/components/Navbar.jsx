import { useEffect, useState } from "react";
import { ChevronDown,  Moon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
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
          ? "fixed  translate-y-0  opacity-100 bg-white/80 backdrop-blur-xs border-b border-slate-200/60 shadow-sm"
          : "absolute py-2 bg-transparent"
      }`}
    >
      <div className="mx-auto flex py-2 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3 ">
          <img src="https://startup.demo.nextjstemplates.com/images/logo/logo-2.svg" alt="" />
        </div>

        <nav className="hidden items-center gap-10 text-lg lg:flex">
          <Link to="/"  onClick={() => setActive("home")} className={`${
            active === "home"
              ? "text-blue-500"
              : "text-slate-700 hover:text-blue-500"
          }`}>
            Home
          </Link>
          <Link to="/about"  onClick={() => setActive("about")} className={`${
            active === "about"
              ? "text-blue-500"
              : "text-slate-700 hover:text-blue-500"
          }`}>
            About
          </Link>
          <Link to="/blog"  onClick={() => setActive("blog")} className={`${
            active === "blog"
              ? "text-blue-500"
              : "text-slate-700 hover:text-blue-500"
          }`}>
            Blog
          </Link>
          <Link to="/support"  onClick={() => setActive("support")} className={`${
            active === "support"
              ? "text-blue-500"
              : "text-slate-700 hover:text-blue-500"
          }`} 
          >
            Support
          </Link>
          <div className="group relative">
            <button className=" flex items-center gap-1 py-4 hover:text-blue-500">
              Pages <ChevronDown size={18} />
            </button>
            <ul className="group-hover:block hidden text-sm py-4 px-2 absolute top-[10+0%] left-0 w-60 rounded-sm bg-white shadow-lg transition-opacity duration-300">
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">About Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Contact Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Blog Grid Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Blog Sidebar Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Blog Details Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Sign In Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Sign Up Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:text-blue-500">Error Page</a></li>
            </ul>
          </div>  
        </nav>

        <div className="flex items-center gap-4">
          <a href="#signin" className="hidden font-medium md:inline-block">
            Sign In
          </a>
          <button className="hidden md:inline-block rounded-md bg-indigo-500 px-7 py-3 font-semibold text-white shadow-md hover:bg-indigo-600">
            Sign Up
          </button>
          <button className="rounded-full p-2 hover:bg-slate-100">
            <Moon size={26} /> 
          </button>
          <div className="lg:hidden ">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-3 focus:border-2 focus:border-indigo-500 rounded-lg"
            >
                <span className={`block h-[2px] w-[30px] bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
                }`} 
                />
                <span className={`block h-[2px] w-[30px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
                }`} />
                <span className={`block h-[2px] w-[30px] bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
                }`} />
            </button>
            <div className={`absolute top-[100%] mr-6 p-2 py-4 right-0 border border-gray-400 text-lg  w-60 rounded-sm bg-white shadow-lg transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
              <Link to="/" className="block px-4 py-2  hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-4 py-2  hover:text-blue-600">About</Link>
              <Link to="/blog" className="block px-4 py-2  hover:text-blue-600">Blog</Link>
              <Link to="/support" className="block px-4 py-2  hover:text-blue-600">Support</Link>
              <button className="flex items-center justify-between w-full  px-4 py-2  hover:text-blue-600">
                Pages <ChevronDown size={18} />
              </button>
              
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}