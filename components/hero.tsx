"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-conference-muted/20 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-conference-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-conference-secondary/10 rounded-full blur-3xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-conference-accent/20 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border-2 border-conference-primary/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-conference-accent/5 rounded-lg rotate-45"></div>
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
            <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-conference-accent/10 to-conference-secondary/10 rounded-full border border-conference-accent/20 backdrop-blur-sm">
              <span className="text-sm font-semibold text-conference-accent tracking-wider uppercase">
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
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-conference-primary via-conference-accent to-conference-secondary bg-clip-text text-transparent leading-tight tracking-tight mb-6 inline-block">
              ROCV-AI 2026
            </span>
            {/* Underline decoration */}
            <div className="w-24 sm:w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-full"></div>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 mb-12"
          >
            <p className="text-lg md:text-xl text-conference-primary/70 font-light leading-relaxed max-w-3xl mx-auto">
              International Conference on Emerging Trends in<br />
              <span className="text-conference-accent font-medium">Robotics</span>, <span className="text-conference-accent font-medium">Communication</span>, <span className="text-conference-accent font-medium">VLSI</span>, and <span className="text-conference-accent font-medium">Artificial Intelligence</span>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-200"></div>
              <div className="relative flex items-center gap-3 bg-white px-4 sm:px-6 md:px-8 py-4 rounded-2xl border border-conference-border shadow-lg">
                <div className="w-10 h-10 flex-shrink-0 bg-conference-accent/10 rounded-lg flex items-center justify-center">
                  <FiCalendar className="text-conference-accent w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-conference-text/60 font-medium uppercase tracking-wide">Conference Date</p>
                  <p className="font-semibold text-conference-primary text-sm sm:text-base">May 15-16, 2026</p>
                </div>
              </div>
            </div>

            <div className="group relative flex-1 w-full md:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-conference-secondary to-conference-primary rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-200"></div>
              <div className="relative flex items-center gap-3 bg-white px-4 sm:px-6 md:px-8 py-4 rounded-2xl border border-conference-border shadow-lg">
                <div className="w-10 h-10 flex-shrink-0 bg-conference-secondary/10 rounded-lg flex items-center justify-center">
                  <FiMapPin className="text-conference-secondary w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-conference-text/60 font-medium uppercase tracking-wide">Venue</p>
                  <p className="font-semibold text-conference-primary text-sm sm:text-base">KLEF Bowrampet Campus, Hyderabad</p>
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
                className="group bg-gradient-to-r from-conference-accent to-conference-secondary text-white hover:shadow-2xl px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-2xl"
              >
                Call for Papers 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/registration" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-conference-primary border-2 border-conference-primary hover:bg-conference-primary hover:text-white px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-2xl"
              >
                Register Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
