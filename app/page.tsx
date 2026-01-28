import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import DateTimeline from "@/components/date-timeline";
import SpeakerCard from "@/components/speaker-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CONFERENCE_SHORT_NAME,
  IMPORTANT_DATES,
  KEYNOTE_SPEAKERS,
  CONFERENCE_INFO,
} from "@/lib/constants";
import { FiCalendar, FiMapPin, FiMail, FiFileText, FiUsers, FiClock, FiArrowRight } from "react-icons/fi";

export default function Home() {
  // Showcase a subset of speakers on the homepage
  const featuredSpeakers = KEYNOTE_SPEAKERS.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Brief Overview Section */}
      <section className="py-20 bg-conference-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-conference-primary mb-6 tracking-tight">
              Welcome to <span className="font-semibold text-conference-accent">{CONFERENCE_SHORT_NAME}</span>
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
          </div>

          {/* Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            <div className="order-2 lg:order-1">
              <p className="text-base md:text-lg text-conference-text/80 leading-[1.8] font-light mb-6 text-justify hyphens-auto">
                ROCV-AI 2026 (International Conference on Emerging Trends in Robotics, Communication, VLSI, and Artificial Intelligence) aims to serve as a premier global forum for researchers, academicians, and industry professionals. The conference focuses on emerging and integrated intelligent systems that seamlessly combine robotics, electronics, VLSI hardware, embedded systems, communication technologies, and advanced AI algorithms.
              </p>
              <p className="text-base md:text-lg text-conference-text/80 leading-[1.8] font-light text-justify hyphens-auto">
                Key thrust areas include AI-driven robotics, on-chip intelligence and VLSI architectures, secure and low-power electronic systems, and next-generation communication technologies. The conference emphasizes advancements in Artificial Intelligence, Machine Learning, and Deep Learning for intelligent, connected, and real-time robotic and cyber-physical applications.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-conference-border">
                  <img 
                    src="/klh.jpg" 
                    alt="KL University Hyderabad Campus" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-conference-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">KLEF Bowrampet Campus</h3>
                    <p className="text-white/90 text-sm">Hyderabad, India • May 15-16, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <div className="relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <div className="relative">
                <h4 className="font-semibold text-conference-primary mb-1">Global Forum</h4>
                <p className="text-sm text-conference-text/70">Researchers & Industry</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <FiFileText className="w-6 h-6 text-white" />
              </div>
              <div className="relative">
                <h4 className="font-semibold text-conference-primary mb-1">Research Focus</h4>
                <p className="text-sm text-conference-text/70">Robotics, VLSI & AI</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
              <CardHeader className="pb-4 relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                    <FiCalendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Conference Dates</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-conference-text/80 font-light mb-4">
                  May 15-16, 2026
                </p>
                <Link href="/important-dates" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium inline-flex items-center">
                  View Important Dates <FiArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-rose-50 via-white to-pink-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
              <CardHeader className="pb-4 relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg">
                    <FiMapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Venue</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-conference-text/80 font-light mb-4">
                  KLEF Bowrampet Campus, Hyderabad
                </p>
                <Link href="/venue" className="text-rose-600 hover:text-rose-700 hover:underline font-medium inline-flex items-center">
                  Venue Details <FiArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
              <CardHeader className="pb-4 relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg">
                    <FiFileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Submissions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-conference-text/80 font-light mb-4">
                  Submit your papers on Robotics, Communication, VLSI, and Artificial Intelligence
                </p>
                <Link href="/call-for-papers" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium inline-flex items-center">
                  View Call for Papers <FiArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/registration">
              <Button className="bg-conference-primary text-white hover:bg-conference-primary/90 px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                Register for the Conference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Focus Areas Section */}
      <section className="py-20 bg-gradient-to-br from-white via-conference-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-conference-primary mb-6 tracking-tight">
              Key <span className="font-semibold text-conference-accent">Research Areas</span>
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                  alt="Artificial Intelligence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">AI & Machine Learning</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-white">
                <p className="text-gray-700 text-sm">
                  Deep Learning, Edge AI, Explainable AI, and AI-driven systems for real-world applications
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop"
                  alt="Robotics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">Robotics & IoT</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-orange-50 to-white">
                <p className="text-gray-700 text-sm">
                  AI-driven robotics, Industrial IoT, Smart systems, and autonomous technologies
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
                  alt="VLSI and Hardware"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">VLSI & Hardware</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-white">
                <p className="text-gray-700 text-sm">
                  FPGA design, Hardware security, On-chip intelligence, and secure IC design
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop"
                  alt="Communication Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">5G/6G Networks</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-white">
                <p className="text-gray-700 text-sm">
                  Next-gen wireless, Secure communication, and advanced networking protocols
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop"
                  alt="Cryptography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">Cryptography</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-red-50 to-white">
                <p className="text-gray-700 text-sm">
                  Lightweight cryptography, Post-quantum security, and blockchain technologies
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
                  alt="Cyber-Physical Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-700/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-lg">Embedded Systems</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-green-50 to-white">
                <p className="text-gray-700 text-sm">
                  Real-time systems, Cyber-physical applications, and edge computing solutions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/call-for-papers">
              <Button className="bg-conference-accent text-white hover:bg-conference-accent/90 px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
                Explore All Topics
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1920&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-conference-accent/10 rounded-full border border-conference-accent/20 mb-8">
              <FiClock className="mr-3 text-conference-accent" />
              <span className="text-conference-accent font-medium tracking-wider uppercase text-sm">
                Important Deadlines
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-conference-primary mb-6 tracking-tight">
              Key <span className="font-semibold text-conference-accent">Conference Dates</span>
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
            <p className="text-lg text-conference-text/70 max-w-4xl mx-auto leading-relaxed font-light">
              Plan your research journey with these critical milestones for <span className="font-medium text-conference-accent">ROCV-AI 2026</span>.
            </p>
          </div>

          <DateTimeline events={IMPORTANT_DATES} />

          <div className="text-center mt-16">
            <Link href="/important-dates">
              <Button className="bg-conference-accent text-white hover:bg-conference-accent/90 px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
                View All Dates 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-gradient-to-br from-conference-muted/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-conference-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-conference-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-conference-accent/10 rounded-full border border-conference-accent/20 mb-8">
              <FiUsers className="mr-3 text-conference-accent" />
              <span className="text-conference-accent font-medium tracking-wider uppercase text-sm">
                Distinguished Speakers
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-conference-primary mb-6 tracking-tight">
              Meet Our <span className="font-semibold text-conference-accent">Keynote Speakers</span>
            </h2>
            
            <div className="w-24 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
            
            <p className="text-lg text-conference-text/70 max-w-4xl mx-auto leading-relaxed font-light">
              Distinguished experts from <span className="text-conference-accent font-medium">academia and industry</span> will share their insights and latest research findings.
            </p>
          </div>

          {/* Centered Speaker Card */}
          <div className="flex justify-center items-center mt-12 mb-8">
            <div className="w-full max-w-md">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-conference-accent via-conference-secondary to-conference-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition duration-300"></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-conference-border/30 p-8 transform transition-all duration-300 hover:scale-105">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-conference-accent/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-conference-secondary/10 to-transparent rounded-tr-full"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Avatar with gradient border */}
                    <div className="relative inline-block mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-full opacity-20 blur"></div>
                      <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-conference-accent to-conference-secondary rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-4xl font-bold text-white">TB</span>
                      </div>
                      {/* Keynote badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-conference-accent to-conference-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Keynote
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-conference-primary mb-3">
                      To Be Announced
                    </h3>

                    {/* Divider */}
                    <div className="w-16 h-0.5 mx-auto mb-4 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-full"></div>

                    {/* Affiliation */}
                    <div className="flex items-center justify-center gap-2 mb-4 text-conference-text/70">
                      <FiUsers className="w-4 h-4 text-conference-accent" />
                      <p className="text-sm font-medium">Details will be updated soon</p>
                    </div>

                    {/* Expertise */}
                    <div className="bg-gradient-to-r from-conference-accent/5 via-conference-secondary/5 to-conference-primary/5 rounded-xl p-4 mb-4">
                      <p className="text-xs font-semibold text-conference-accent uppercase tracking-wider mb-2">
                        Expertise
                      </p>
                      <p className="text-sm text-conference-text/80 leading-relaxed">
                        Stay tuned for exciting keynote speakers
                      </p>
                    </div>

                    {/* Coming soon indicator */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-conference-muted/50 rounded-full">
                      <div className="w-2 h-2 bg-conference-accent rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-conference-text/70">Announcement Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/speakers">
              <Button className="bg-conference-accent text-white hover:bg-conference-accent/90 px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
                View All Speakers 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-conference-primary/5 via-white to-conference-accent/5 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-conference-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-conference-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-conference-primary mb-6 tracking-tight">
              Get in <span className="font-semibold text-conference-accent">Touch</span>
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-6 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              For any queries related to the conference, please feel free to contact us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
              <CardContent className="p-8 text-center relative">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg mb-4">
                  <FiMail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Email</h3>
                <p className="text-gray-600">will be announced soon</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-violet-50 via-white to-purple-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <CardContent className="p-8 text-center relative">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg mb-4">
                  <FiMapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Address</h3>
                <p className="text-gray-600">
                  Department of ECE,
                  <br />
                  KL University, Bachupally,
                  <br />
                  Hyderabad
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
