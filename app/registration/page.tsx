import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCreditCard, FiAlertCircle, FiCheckCircle, FiHelpCircle } from "react-icons/fi";

export const metadata = {
  title: "Registration | ROCV-AI 2026",
  description: "Registration information and fees for ROCV-AI 2026 conference",
};

export default function RegistrationPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Registration Information</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Registration Message */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-conference-primary/10 rounded-full mb-4">
            <FiAlertCircle className="h-6 w-6 text-conference-primary" />
          </div>
          <p className="text-lg text-gray-700">
            Registration deadline is <span className="font-semibold">May 01, 2026</span>.
            Conference dates: <span className="font-semibold">May 15-16, 2026</span>.
          </p>
        </div>

        {/* Registration Fees */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6 text-center">Registration Fees</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Non-IEEE */}
            <Card className="border-t-4 border-t-conference-primary">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl text-conference-primary">
                  Non-IEEE Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span>Faculty/Research Scholar</span>
                    <span className="font-semibold">₹ 2,500 ($ 30)</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Industry Members</span>
                    <span className="font-semibold">₹ 3,000 ($ 35)</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students</span>
                    <span className="font-semibold">₹ 2,000 ($ 25)</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Attendees</span>
                    <span className="font-semibold">₹ 1,000 ($ 10)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* IEEE Members */}
            <Card className="border-t-4 border-t-conference-secondary">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl text-conference-secondary">
                  IEEE Members
                </CardTitle>
                <p className="text-sm text-green-600 font-medium">Discounted Rates</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span>Faculty/Research Scholar</span>
                    <span className="font-semibold">₹ 2,000 ($ 25)</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Industry Members</span>
                    <span className="font-semibold">₹ 2,500 ($ 30)</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students</span>
                    <span className="font-semibold">₹ 1,500 ($ 20)</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Attendees</span>
                    <span className="font-semibold">₹ 500 ($ 5)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
            <p>* Registration fee includes access to all sessions, conference kit, snacks & lunch</p>
            <p>* UG/PG/Research scholars must attach a letter from HOD/Dean/Principal/Research Guide verifying full-time status</p>
            <p>* At least one author must register and present the paper to include it in the proceedings</p>
            <p>* Multiple authors of the same paper must register separately</p>
            <p>* Registered candidates cannot claim a refund for absence</p>
          </div>
        </section>

        {/* Registration Includes */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">Registration Includes</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Access to all technical sessions and keynote talks</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Conference kit including program schedule</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Lunch and snacks during conference days</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Conference proceedings with ISBN</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Consideration for publication in Scopus indexed journal (with APC if applicable)</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Selected papers may be recommended for submission to Scopus Indexed Journal "International Research Journal of Multidisciplinary Technovation (IRJMT)", Journal of Applied Sciences and Multidisciplinary Engineering (non-scopus indexed) included in a special collection if accepted</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">Payment Methods & Registration</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <FiCreditCard className="text-conference-primary mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Online Registration</h3>
                    <p className="text-gray-700 mb-2">
                      Register online through Google Forms:
                    </p>
                    <a href="https://forms.gle/77d6Y8t9wzjrS4jc7" target="_blank" rel="noopener noreferrer" className="text-conference-primary hover:underline font-medium">
                      https://forms.gle/77d6Y8t9wzjrS4jc7
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <FiCreditCard className="text-conference-primary mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                  <div className="w-full">
                    <h3 className="font-medium text-lg mb-4">Bank Transfer Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-gray-700 mb-2">
                      <strong>Account Name:</strong> Koneru Lakshmaiah Education Foundation, Bowrampet
                    </p>
                    <p className="text-gray-700 font-mono mb-2">
                      <strong>Account Number:</strong> 99914455566677
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Bank Name:</strong> HDFC Bank
                    </p>
                    <p className="text-gray-700 font-mono">
                      <strong>IFSC Code:</strong> HDFC0000109
                    </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Registration Button (Disabled) */}
        <div className="text-center mb-12">
          <a href="https://forms.gle/77d6Y8t9wzjrS4jc7" target="_blank" rel="noopener noreferrer">
            <Button className="bg-conference-primary hover:bg-conference-primary/90 text-white py-6 px-8 text-lg">
              Register Now for ROCV-AI 2026
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Click to access the registration form
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">Contact for Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-3">Dr. R V Sravya</h3>
                <p className="text-gray-700 mb-2">Assistant Professor</p>
                <p className="text-gray-700 mb-2">KLH-Bowrampet, KLEF Deemed to be University, Hyderabad</p>
                <p className="text-gray-700">Mobile: +91-8317648839</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-3">Dr. Y. Ramesh Babu</h3>
                <p className="text-gray-700 mb-2">Assistant Professor</p>
                <p className="text-gray-700 mb-2">KLH-Bowrampet, KLEF Deemed to be University, Hyderabad</p>
                <p className="text-gray-700">Mobile: +91-9085236881</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="section-subtitle mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Who can attend the conference?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Participation is open to faculty members, research scholars, post-graduate and under-graduate students from academics, research institutes/industry, and working professionals.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    What documents are required for student registration?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    UG/PG/Research scholars must attach a letter from HOD/Dean/Principal/Research Guide verifying full-time status.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    What is the refund policy?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Registered candidates cannot claim a refund for absence. Please ensure your availability before registration.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Do multiple authors need separate registrations?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Yes, multiple authors of the same paper must register separately. At least one author must register and present the paper.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Will papers be published?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    All papers will be published in conference proceedings with ISBN. All selected, registered, and presented papers will be considered for publication in Scopus indexed journal with APC (excluding Registration Fee), if applicable, must be paid by authors. Selected papers may be recommended for submission to Scopus Indexed Journal "International Research Journal of Multidisciplinary Technovation (IRJMT)", Journal of Applied Sciences and Multidisciplinary Engineering (non-scopus indexed) included in a special collection if accepted.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
