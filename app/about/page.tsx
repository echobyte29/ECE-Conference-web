import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  UNIVERSITY_INFO,
  DEPARTMENT_INFO,
  CONFERENCE_INFO,
} from "@/lib/constants";
import { FiMap, FiUsers, FiCalendar } from "react-icons/fi";

export const metadata = {
  title: "About | ROCV-AI 2026",
  description: "About the University, ECE Department and ROCV-AI 2026 Conference",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">About</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      {/* University Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiMap className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About University</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop"
                  alt="University Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
                  {UNIVERSITY_INFO.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {UNIVERSITY_INFO.shortDesc}
                </p>
                <p className="text-gray-700">
                  {UNIVERSITY_INFO.longDesc}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Department Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiUsers className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About ECE Department</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
                  {DEPARTMENT_INFO.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Established:</strong> {DEPARTMENT_INFO.established}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Programs Offered:</strong> {DEPARTMENT_INFO.programs}
                </p>
                <p className="text-gray-700">
                  {DEPARTMENT_INFO.desc}
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
                  alt="Electronics and Communication Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Conference Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiCalendar className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About ROCV-AI 2026</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="relative h-80 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop"
                alt="Conference and Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {CONFERENCE_INFO.name}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                {CONFERENCE_INFO.desc}
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Organized by:</strong> {CONFERENCE_INFO.organizer}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
