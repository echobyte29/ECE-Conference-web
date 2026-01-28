import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { FiMapPin, FiInfo, FiNavigation2 } from "react-icons/fi";
import { CONFERENCE_VENUE } from "@/lib/constants";

export const metadata = {
  title: "Venue | ROCV-AI 2026",
  description: "Venue information for ROCV-AI 2026 at KLEF Bowrampet Campus, Hyderabad",
};

export default function VenuePage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Conference Venue</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Main Venue */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="bg-conference-primary text-white p-6">
              <div className="flex items-center">
                <FiMapPin className="h-6 w-6 mr-3" />
                <h2 className="text-2xl font-semibold">Main Conference Venue</h2>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
                {CONFERENCE_VENUE}
              </h3>
              <p className="text-gray-700 mb-6">
                The conference will be held at the state-of-the-art facilities of KLEF Bowrampet Campus,
                Hyderabad. KLEF (Koneru Lakshmaiah Education Foundation) Deemed to be University has 
                inaugurated its second off campus in A.Y. 2023-2024 in Bowrampet Village, Medchal, 
                Malkajgiri District, Greater Hyderabad. The venue is equipped with modern amenities 
                and offers an ideal environment for academic discussions and networking.
              </p>

              <div className="bg-gray-100 p-4 rounded-md mb-6">
                <h4 className="font-medium mb-2 flex items-center">
                  <FiInfo className="mr-2 text-conference-primary" />
                  Address
                </h4>
                <p className="text-gray-700">
                  KLEF Bowrampet Campus<br />
                  Bowrampet Village, Medchal<br />
                  Malkajgiri District, Greater Hyderabad<br />
                  Telangana, India
                </p>
              </div>

              {/* Campus Image */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&auto=format&fit=crop"
                  alt="Modern University Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">KLEF Bowrampet Campus</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FiNavigation2 className="mr-2 text-conference-primary" />
                    How to Reach
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>From Airport:</strong> Approximately 30 km (45-60 minutes drive)</li>
                    <li><strong>From Railway Station:</strong> Approximately 20 km (30-45 minutes drive)</li>
                    <li><strong>Local Transport:</strong> Cabs, auto-rickshaws and bus services are available</li>
                  </ul>
                </div>

                <div className="flex-1 mt-4 sm:mt-0">
                  <h4 className="font-medium mb-2">Nearby Accommodations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Hotel Royal Park (3 km)</li>
                    <li>Grand Hyderabad Hotel (5 km)</li>
                    <li>The Platinum Inn (4 km)</li>
                    <li>Green Valley Resorts (2 km)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About the Area */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">About Hyderabad</h2>
          <Card>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop"
                    alt="Hyderabad City"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Hyderabad, the capital of Telangana, is a major center for the technology industry in India.
                    The city is known for its rich history, delicious cuisine, and warm hospitality.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The city is famous for its monuments like Charminar, Golconda Fort, and the Qutb Shahi Tombs.
                    It is also known as the "City of Pearls" due to its historical association with the pearl trade.
                  </p>
                  <p className="text-gray-700">
                    Hyderabad has pleasant weather in May, with average temperatures ranging from 25°C to 35°C.
                    The conference is scheduled during a comfortable time to visit the city and participate in 
                    academic activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="section-subtitle mb-6">Venue Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>State-of-the-art Auditorium:</strong> With seating capacity for 300+ attendees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>Seminar Halls:</strong> Multiple fully-equipped seminar halls for parallel sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>High-speed Wi-Fi:</strong> Throughout the venue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>Exhibition Area:</strong> For sponsors and industry partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>Dining Facilities:</strong> For breakfast, lunch, and refreshments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conference-primary mr-2">•</span>
                    <span><strong>Accessibility:</strong> The venue is fully accessible for persons with disabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop"
                  alt="Modern Conference Facilities"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
