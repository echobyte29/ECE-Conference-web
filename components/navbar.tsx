"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Call for Papers", href: "/call-for-papers" },
    { title: "Important Dates", href: "/important-dates" },
    { title: "Speakers", href: "/speakers" },
    { title: "Committee", href: "/committee" },
    { title: "Venue", href: "/venue" },
    { title: "Registration", href: "/registration" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 animate-float">
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-xl border border-conference-border/50' 
          : 'bg-white/90 shadow-lg border border-conference-border/30'
      } backdrop-blur-md rounded-[2rem]`}>
        <div className="px-4 sm:px-6">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                  <span className="relative font-light text-xl md:text-2xl text-conference-primary tracking-tight">
                    ROCV-AI <span className="font-bold bg-gradient-to-r from-conference-accent to-conference-secondary bg-clip-text text-transparent">2026</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative text-conference-text/80 hover:text-conference-accent px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                >
                  <span className="relative z-10">{item.title}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-conference-accent/10 to-conference-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-conference-accent to-conference-secondary group-hover:w-3/4 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-xl text-conference-text/80 hover:text-conference-accent hover:bg-gradient-to-r hover:from-conference-accent/10 hover:to-conference-secondary/10 focus:outline-none transition-all duration-300"
              >
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-conference-border/30">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-conference-text/80 hover:text-conference-accent hover:bg-gradient-to-r hover:from-conference-accent/10 hover:to-conference-secondary/10 transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
