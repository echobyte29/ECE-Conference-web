import React from "react";
import { Separator } from "@/components/ui/separator";
import TrackAccordion from "@/components/track-accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRACKS } from "@/lib/constants";
import { FiFileText, FiCheck } from "react-icons/fi";

export const metadata = {
  title: "Call for Papers | ROCV-AI 2026",
  description: "Submit your research papers for ROCV-AI 2026 - Topics and submission guidelines",
};

export default function CallForPapersPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Call for Papers</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      {/* Introduction */}
      <section className="mb-12">
        <Card className="overflow-hidden">
          <div className="relative h-64 w-full">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop"
              alt="Research and Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <FiFileText className="h-6 w-6 mr-3" />
                Submit Your Research
              </h2>
              <p className="text-white/90">Join us in advancing the frontiers of technology and innovation</p>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              Authors are invited to submit original and unpublished research papers with an innovative idea on
              topics within the broad areas of Robotics, Communication, VLSI, and Artificial Intelligence, 
              including (but not limited to): Artificial Intelligence & Machine Learning, 
              Internet of Things, FPGA Design, Cryptography, Hardware Security, and Secure Communication.
            </p>
            <p className="text-gray-700">
              ROCV-AI 2026 aims to serve as a premier global forum for researchers, academicians, and 
              industry professionals. The conference focuses on emerging and integrated intelligent systems 
              that seamlessly combine robotics, electronics, VLSI hardware, embedded systems, communication technologies, and advanced AI algorithms. 
              The conference emphasizes advancements in AI, ML, and Deep Learning for intelligent, connected, 
              and real-time robotic and cyber-physical applications.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Research Tracks */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Research Tracks</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {TRACKS.map((track, index) => (
            <Badge key={index} variant="secondary2" className="text-sm py-1 px-3">
              {track.name}
            </Badge>
          ))}
        </div>
        <TrackAccordion tracks={TRACKS} />
      </section>

      {/* Submission Guidelines */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Submission Guidelines</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Authors must submit the full length paper in the prescribed Conference Template.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Only registered delegates can attend the conference.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>At least one author must register and present the paper to include it in the proceedings.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Multiple authors of the same paper must register separately.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>UG/PG/Research scholars must attach a letter from HOD/Dean/Principal/Research Guide verifying full-time status.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Registered candidates cannot claim a refund for absence.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>All selected, registered, and presented papers will be considered for publication in Scopus indexed journal.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Submission Process */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Submission Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                All papers must be submitted electronically using the prescribed conference template.
                Authors are requested to follow these steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Prepare your paper according to the Conference Template.</li>
                <li>Ensure your paper addresses topics within the conference scope.</li>
                <li>Convert your paper to PDF format.</li>
                <li>Submit your paper through the designated submission system.</li>
                <li>You will receive confirmation after successful submission.</li>
                <li>Track the status of your submission and review process.</li>
              </ol>
              <div className="mt-6 p-4 bg-conference-primary/5 rounded-md">
                <p className="font-medium text-conference-primary">Who Can Attend</p>
                <p className="text-gray-700">
                  Participation in this conference is open to faculty members, research scholars, 
                  post-graduate and under-graduate students from academics, research institutes/industry, 
                  and working professionals.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop"
                alt="Research and Writing"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Dates (Summary) */}
      <section>
        <h2 className="section-subtitle mb-6">Important Dates (Summary)</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Last Date for Paper Submission</span>
                <span className="text-conference-primary">March 25, 2026</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Notification of Acceptance</span>
                <span className="text-conference-primary">April 25, 2026</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Submission of Camera-Ready Paper</span>
                <span className="text-conference-primary">May 01, 2026</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Conference Registration</span>
                <span className="text-conference-primary">May 01, 2026</span>
              </li>
              <li className="flex justify-between items-center pb-2 pt-2">
                <span className="font-medium">Conference Dates</span>
                <span className="text-conference-primary">May 15-16, 2026</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
