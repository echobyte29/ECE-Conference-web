import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiAward, FiTrendingUp, FiUsers, FiMail, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Sponsorship | ROCV-AI 2026",
  description: "Sponsorship opportunities for ROCV-AI 2026 conference",
};

export default function SponsorshipPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Call for Sponsorship</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-conference-primary/10 rounded-full mb-4">
            <FiAward className="h-6 w-6 text-conference-primary" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We invite organizations and industry partners to join us as sponsors for the symposium. 
            Sponsorship provides an excellent opportunity to promote your company to a focused and 
            professional audience comprising academicians, researchers, industry experts, and students.
          </p>
        </section>

        {/* Benefits of Sponsorship */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6 text-center">Benefits of Partnership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-t-4 border-t-conference-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-conference-primary/10 rounded-lg mr-4">
                    <FiTrendingUp className="h-6 w-6 text-conference-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">High Visibility</h3>
                    <p className="text-gray-700">
                      Reach a specialized target audience of academicians, researchers, and industry professionals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-conference-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-conference-secondary/10 rounded-lg mr-4">
                    <FiAward className="h-6 w-6 text-conference-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Brand Recognition</h3>
                    <p className="text-gray-700">
                      Promote your brand through website, brochure, and event materials
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-conference-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-conference-accent/10 rounded-lg mr-4">
                    <FiUsers className="h-6 w-6 text-conference-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Networking Opportunities</h3>
                    <p className="text-gray-700">
                      Connect with experts, decision-makers, and future talent in the field
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-conference-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-conference-primary/10 rounded-lg mr-4">
                    <FiAward className="h-6 w-6 text-conference-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Prestigious Association</h3>
                    <p className="text-gray-700">
                      Align your organization with a leading academic and industry event
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sponsorship Categories */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6 text-center">Sponsorship Opportunities</h2>
          
          <Card className="bg-gradient-to-br from-conference-primary/5 to-conference-secondary/5">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 text-center mb-6">
                We offer multiple sponsorship categories tailored to suit different levels of 
                engagement and visibility. Each category provides unique benefits and recognition 
                opportunities throughout the conference.
              </p>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  For detailed information about sponsorship packages and pricing, please contact us.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6 text-center">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-conference-primary">
              <CardHeader>
                <CardTitle className="text-xl">Dr. R V Sravya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">Assistant Professor</p>
                <p className="text-gray-700 mb-4">
                  KLH-Bowrampet<br />
                  Koneru Lakshmaiah Education Foundation,<br />
                  Deemed to be University, Hyderabad
                </p>
                <div className="flex items-center text-gray-700 mb-2">
                  <FiPhone className="mr-2 text-conference-primary" />
                  <span>+91-8317648839</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-conference-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Dr. Y. Ramesh Babu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">Assistant Professor</p>
                <p className="text-gray-700 mb-4">
                  KLH-Bowrampet<br />
                  Koneru Lakshmaiah Education Foundation,<br />
                  Deemed to be University, Hyderabad
                </p>
                <div className="flex items-center text-gray-700 mb-2">
                  <FiPhone className="mr-2 text-conference-secondary" />
                  <span>+91-9085236881</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  For more information about sponsorship opportunities and packages, 
                  please visit the symposium website or contact us directly.
                </p>
                <div className="flex items-center justify-center text-conference-primary">
                  <FiMail className="mr-2" />
                  <span className="font-medium">dr.kirankumar@klh.edu.in</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-conference-primary to-conference-secondary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Become a Partner
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join us in promoting cutting-edge research and innovation in Robotics, 
                Communication, VLSI, and Artificial Intelligence
              </p>
              <a href="mailto:dr.kirankumar@klh.edu.in">
                <Button className="bg-white text-conference-primary hover:bg-gray-100 py-6 px-8 text-lg">
                  Contact Us for Sponsorship
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
