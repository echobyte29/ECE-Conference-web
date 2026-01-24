"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-conference-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-light text-xl md:text-2xl text-conference-primary tracking-tight">
                ICEI-CPSCT <span className="font-semibold text-conference-accent">2026</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-conference-text/80 hover:text-conference-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-conference-muted"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-conference-text/80 hover:text-conference-accent hover:bg-conference-muted focus:outline-none transition-all duration-200"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm shadow-lg border-t border-conference-border">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-conference-text/80 hover:text-conference-accent hover:bg-conference-muted transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
