import React from "react";
import { Separator } from "@/components/ui/separator";
import DateTimeline from "@/components/date-timeline";
import { Card, CardContent } from "@/components/ui/card";
import { IMPORTANT_DATES } from "@/lib/constants";
import { FiCalendar, FiAlertCircle } from "react-icons/fi";

export const metadata = {
  title: "Important Dates | ROCV-AI 2026",
  description: "Important dates and deadlines for ROCV-AI 2026 conference",
};

export default function ImportantDatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-conference-background to-conference-muted">
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-conference-accent/10 rounded-full border border-conference-accent/20 mb-8">
              <FiCalendar className="mr-3 text-conference-accent" />
              <span className="text-conference-accent font-medium tracking-wider uppercase text-sm">
                Conference Timeline
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-conference-primary mb-6 tracking-tight">
              Important <span className="font-semibold text-conference-accent">Dates</span>
            </h1>
            
            <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-conference-accent to-conference-secondary"></div>
            
            <p className="text-lg text-conference-text/70 max-w-4xl mx-auto leading-relaxed font-light">
              Plan your research journey with these <span className="text-conference-accent font-medium">critical milestones</span> for 
              ROCV-AI 2026. Please ensure you meet all deadlines to secure your participation.
            </p>
          </div>

          {/* Important Notice */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-conference-accent/5 border border-conference-accent/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-conference-accent/10 rounded-xl flex items-center justify-center">
                  <FiAlertCircle className="w-6 h-6 text-conference-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-conference-primary mb-3">
                    Submission Guidelines
                  </h3>
                  <p className="text-conference-text/80 leading-relaxed font-light">
                    All deadlines are at <strong>11:59 PM (IST)</strong> on the specified date. 
                    Late submissions will not be considered. Ensure your research papers meet the 
                    conference standards and follow the prescribed format guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DateTimeline events={IMPORTANT_DATES} />
        </div>
      </section>
    </div>
  );
}
