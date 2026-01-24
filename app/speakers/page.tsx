"use client";

import React from "react";
import { motion } from "framer-motion";
import SpeakerCard from "@/components/speaker-card";
import { KEYNOTE_SPEAKERS } from "@/lib/constants";
import { FiMic, FiUsers, FiGlobe, FiCalendar, FiMapPin, FiFileText, FiArrowRight } from "react-icons/fi";

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-conference-background to-conference-muted">
      {/* Header Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-conference-accent/10 rounded-full border border-conference-accent/20 mb-8">
              <FiMic className="mr-3 text-conference-accent" />
              <span className="text-conference-accent font-medium tracking-wider uppercase text-sm">
                Distinguished Experts
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-conference-primary mb-6 tracking-tight">
              Keynote <span className="font-semibold text-conference-accent">Speakers</span>
            </h1>
            
            <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
            
            <p className="text-lg text-conference-text/70 max-w-4xl mx-auto leading-relaxed font-light">
              Distinguished experts from academia and industry who will be sharing their
              <span className="text-conference-accent font-medium"> insights and latest research findings </span>
              at ICEI-CPSCT 2026.
            </p>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-conference-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-conference-accent/10 rounded-full mb-4">
                <FiUsers className="w-6 h-6 text-conference-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-conference-primary mb-2">{KEYNOTE_SPEAKERS.length}</h3>
              <p className="text-conference-text/70 font-light">Expert Speakers</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-conference-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-conference-accent/10 rounded-full mb-4">
                <FiGlobe className="w-6 h-6 text-conference-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-conference-primary mb-2">Global</h3>
              <p className="text-conference-text/70 font-light">Expertise</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-conference-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-conference-accent/10 rounded-full mb-4">
                <FiMic className="w-6 h-6 text-conference-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-conference-primary mb-2">2 Days</h3>
              <p className="text-conference-text/70 font-light">Of Insights</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {KEYNOTE_SPEAKERS.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <SpeakerCard
                  name={speaker.name}
                  affiliation={speaker.affiliation}
                  expertise={speaker.expertise}
                  badgeText="Keynote"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Engagement Section */}
      <section className="pb-24 bg-conference-primary relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-conference-primary via-conference-primary to-conference-secondary opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-white/10 rounded-full border border-white/20 mb-8">
              <span className="text-white/90 font-medium tracking-wider uppercase text-sm">
                Academic Excellence
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
              Advance Your Research in<br />
              <span className="font-semibold">Cyber-Physical Systems</span>
            </h2>
            
            <div className="w-24 h-0.5 mx-auto mb-8 bg-white/30"></div>
            
            <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed font-light">
              Connect with distinguished researchers, industry leaders, and academic pioneers 
              in the rapidly evolving field of cyber-physical systems and communication technologies.
              <br /><br />
              <span className="font-medium text-white/90">ICEI-CPSCT 2026</span> offers unparalleled opportunities for 
              knowledge exchange, collaborative research, and professional advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Conference Registration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <FiUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Conference Participation</h3>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Join distinguished academics and industry experts for two days of cutting-edge research presentations,
                interactive sessions, and networking opportunities at KLEF Bowrampet Campus, Hyderabad.
              </p>
              <a
                href="/registration"
                className="inline-flex items-center px-6 py-3 bg-white text-conference-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Register for Conference
                <FiArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Research Submission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <FiFileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Research Contribution</h3>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Share your innovative research in emerging cyber-physical systems, communication technologies,
                AI/ML applications, and related fields. Contribute to the advancement of scientific knowledge.
              </p>
              <a
                href="/call-for-papers"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Submit Research Paper
                <FiArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Conference Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <FiCalendar className="w-8 h-8 text-white/90 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Conference Dates</h4>
                <p className="text-white/70">May 15-16, 2026</p>
              </div>
              <div>
                <FiMapPin className="w-8 h-8 text-white/90 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Venue</h4>
                <p className="text-white/70">KLEF Bowrampet Campus<br />Hyderabad, India</p>
              </div>
              <div>
                <FiGlobe className="w-8 h-8 text-white/90 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Focus Areas</h4>
                <p className="text-white/70">AI, IoT, FPGA Design<br />Cryptography & Security</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
