"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white border-b border-conference-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-light text-conference-primary leading-tight mb-6 tracking-tight"
          >
            International Conference on<br />
            <span className="font-normal">Emerging and Integrated</span><br />
            <span className="text-conference-secondary">Cyber-Physical Systems</span><br />
            <span className="text-conference-accent font-medium">& Communication Technologies</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-conference-accent/10 rounded-full border border-conference-accent/20 mb-4">
              <span className="text-xl md:text-2xl font-semibold text-conference-accent tracking-wider">
                ICEI-CPSCT 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg text-conference-text"
          >
            <div className="flex items-center bg-conference-muted px-6 py-3 rounded-lg border border-conference-border">
              <FiCalendar className="mr-3 text-conference-accent" />
              <span className="font-medium">May 15-16, 2026</span>
            </div>
            <div className="flex items-center bg-conference-muted px-6 py-3 rounded-lg border border-conference-border">
              <FiMapPin className="mr-3 text-conference-accent" />
              <span className="font-medium">KLEF Bowrampet Campus, Hyderabad</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-8"
          >
            <Link href="/call-for-papers">
              <Button 
                size="lg" 
                className="bg-conference-accent text-white hover:bg-conference-accent/90 px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Call for Papers <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/registration">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-conference-primary border-conference-primary hover:bg-conference-primary hover:text-white px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Register Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle geometric decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-conference-accent rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-conference-secondary rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-conference-primary rounded-full"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-conference-accent/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-conference-secondary/10 rounded-lg rotate-45"></div>
      </div>
    </div>
  );
};

export default Hero;
