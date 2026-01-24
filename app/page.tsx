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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <p className="text-lg text-conference-text/80 leading-relaxed font-light mb-8">
                {CONFERENCE_INFO.desc}
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-conference-border/30">
                  <div className="w-10 h-10 bg-conference-accent/10 rounded-lg flex items-center justify-center">
                    <FiUsers className="w-5 h-5 text-conference-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-conference-primary">Global Forum</h4>
                    <p className="text-sm text-conference-text/70">Researchers & Industry</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-conference-border/30">
                  <div className="w-10 h-10 bg-conference-accent/10 rounded-lg flex items-center justify-center">
                    <FiFileText className="w-5 h-5 text-conference-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-conference-primary">Research Focus</h4>
                    <p className="text-sm text-conference-text/70">Cyber-Physical Systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-conference-accent to-conference-secondary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-conference-border">
                  <img 
                    src="/klh.jpg" 
                    alt="KL University Hyderabad Campus" 
                    className="w-full h-64 sm:h-80 object-cover"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-conference-border bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-conference-accent/10 border border-conference-accent/20">
                    <FiCalendar className="h-6 w-6 text-conference-accent" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Conference Dates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-conference-text/80 font-light mb-4">
                  May 15-16, 2026
                </p>
                <Link href="/important-dates" className="text-conference-accent hover:text-conference-accent/80 hover:underline font-medium inline-flex items-center">
                  View Important Dates <FiArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-conference-border bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-conference-accent/10 border border-conference-accent/20">
                    <FiMapPin className="h-6 w-6 text-conference-accent" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Venue</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-conference-text/80 font-light mb-4">
                  KLEF Bowrampet Campus, Hyderabad
                </p>
                <Link href="/venue" className="text-conference-accent hover:text-conference-accent/80 hover:underline font-medium inline-flex items-center">
                  Venue Details <FiArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-conference-border bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-conference-accent/10 border border-conference-accent/20">
                    <FiFileText className="h-6 w-6 text-conference-accent" />
                  </div>
                  <CardTitle className="text-conference-primary font-medium">Submissions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-conference-text/80 font-light mb-4">
                  Submit your papers on emerging and integrated cyber-physical systems & communication technologies
                </p>
                <Link href="/call-for-papers" className="text-conference-accent hover:text-conference-accent/80 hover:underline font-medium inline-flex items-center">
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

      {/* Important Dates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Plan your research journey with these critical milestones for <span className="font-medium text-conference-accent">ICEI-CPSCT 2026</span>.
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
      <section className="py-20 bg-gradient-to-br from-conference-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {featuredSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="h-full opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <SpeakerCard
                  name={speaker.name}
                  affiliation={speaker.affiliation}
                  expertise={speaker.expertise}
                  badgeText="Keynote"
                />
              </div>
            ))}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Us</h2>
            <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              For any queries related to the conference, please feel free to contact us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Card className="w-full md:w-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-conference-primary text-white">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">will be announced soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-conference-primary text-white">
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Department of ECE,
                      <br />
                      KL University, Bachupally,
                      <br />
                      Hyderabad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
