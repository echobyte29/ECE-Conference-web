import React from "react";
import { Separator } from "@/components/ui/separator";
import CommitteeSection from "@/components/committee-section";
import { COMMITTEES } from "@/lib/constants";

export const metadata = {
  title: "Committee | ROCV-AI 2026",
  description: "Organizing committee and advisory board of ROCV-AI 2026",
};

export default function CommitteePage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Conference Committee</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        <CommitteeSection
          title="Chief Patrons"
          members={COMMITTEES.chiefPatrons}
          delay={0.1}
        />

        <CommitteeSection
          title="Co-Patrons"
          members={COMMITTEES.coPatrons}
          delay={0.2}
        />

        <CommitteeSection
          title="General Chairs"
          members={COMMITTEES.generalChairs}
          delay={0.3}
        />

        <CommitteeSection
          title="Convener"
          members={COMMITTEES.convener}
          delay={0.4}
        />

        <CommitteeSection
          title="Co-Convener"
          members={COMMITTEES.coConvener}
          delay={0.5}
        />

        <CommitteeSection
          title="Coordinators"
          members={COMMITTEES.coordinators}
          delay={0.55}
        />

        <CommitteeSection
          title="Steering Committee"
          members={COMMITTEES.steeringCommittee}
          delay={0.6}
        />

        <CommitteeSection
          title="Organizing Committee"
          members={COMMITTEES.organizing}
          delay={0.7}
        />

        <CommitteeSection
          title="International Technical Advisory Committee"
          members={COMMITTEES.internationalAdvisory}
          delay={0.8}
        />

        <CommitteeSection
          title="National Technical Advisory Committee"
          members={COMMITTEES.nationalAdvisory}
          delay={0.9}
        />
      </div>
    </div>
  );
}
