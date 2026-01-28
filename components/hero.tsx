"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d8b4fe_1px,transparent_1px),linear-gradient(to_bottom,#fbbf24_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          
          {/* Vibrant Gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Colorful Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-purple-500/40 rounded-lg rotate-12 animate-pulse shadow-lg shadow-purple-500/20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border-4 border-pink-500/40 rounded-full animate-pulse shadow-lg shadow-pink-500/20"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg rotate-45 opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/2 w-20 h-20 border-4 border-orange-500/40 rotate-45 animate-pulse shadow-lg shadow-orange-500/20"></div>
          
          {/* Left side domain icons */}
          <div className="hidden lg:block absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="space-y-6">
              {/* AI/ML Icon */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-purple-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/8618/8618689.png" alt="AI" className="w-14 h-14 opacity-80" />
                </div>
              </div>
              
              {/* Robotics Icon */}
              <div className="group relative ml-6">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-orange-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/2403/2403350.png" alt="Robotics" className="w-14 h-14 opacity-80" />
                </div>
              </div>
              
              {/* IoT Icon */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-teal-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/2821/2821600.png" alt="IoT" className="w-14 h-14 opacity-80" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side domain icons */}
          <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="space-y-6">
              {/* Communication/5G Icon */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-blue-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/8968/8968244.png" alt="5G Communication" className="w-14 h-14 opacity-80" />
                </div>
              </div>
              
              {/* VLSI/Chip Icon */}
              <div className="group relative mr-6">
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-indigo-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" alt="VLSI" className="w-14 h-14 opacity-80" />
                </div>
              </div>
              
              {/* Security/Cryptography Icon */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 border-red-300 transform hover:scale-110 transition-all duration-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="Security" className="w-14 h-14 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-full border-2 border-purple-300 backdrop-blur-sm shadow-lg shadow-purple-200/50">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-wider uppercase">
                International Conference 2026
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative px-4"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight mb-6 inline-block drop-shadow-sm">
              ROCV-AI 2026
            </span>
            {/* Underline decoration */}
            <div className="w-32 sm:w-40 h-1.5 mx-auto mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg shadow-purple-300/50"></div>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
              International Conference on Emerging Trends in<br />
              <span className="text-orange-600 font-semibold">Robotics</span>, <span className="text-blue-600 font-semibold">Communication</span>, <span className="text-purple-600 font-semibold">VLSI</span>, and <span className="text-pink-600 font-semibold">Artificial Intelligence</span>
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 mb-12 px-4 w-full max-w-4xl mx-auto"
          >
            <div className="group relative flex-1 w-full md:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-40 group-hover:opacity-60 blur transition duration-200"></div>
              <div className="relative flex items-center gap-3 bg-gradient-to-br from-cyan-50 to-blue-50 px-4 sm:px-6 md:px-8 py-4 rounded-2xl border-2 border-cyan-200 shadow-lg">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <FiCalendar className="text-white w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-cyan-700 font-bold uppercase tracking-wide">Conference Date</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">May 15-16, 2026</p>
                </div>
              </div>
            </div>

            <div className="group relative flex-1 w-full md:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-2xl opacity-40 group-hover:opacity-60 blur transition duration-200"></div>
              <div className="relative flex items-center gap-3 bg-gradient-to-br from-pink-50 to-rose-50 px-4 sm:px-6 md:px-8 py-4 rounded-2xl border-2 border-pink-200 shadow-lg">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg">
                  <FiMapPin className="text-white w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-pink-700 font-bold uppercase tracking-wide">Venue</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">KLEF Bowrampet Campus, Hyderabad</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 mt-12 px-4 w-full max-w-2xl mx-auto"
          >
            <Link href="/call-for-papers" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-purple-500/50 px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-2xl border-2 border-purple-400"
              >
                Call for Papers 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/registration" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-white text-purple-700 border-4 border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-bold shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-2xl"
              >
                Register Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-purple-50/30 to-transparent"></div>
    </div>
  );
};

export default Hero;
