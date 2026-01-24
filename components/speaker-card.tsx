import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FiUser, FiAward } from "react-icons/fi";

interface SpeakerCardProps {
  name: string;
  affiliation: string;
  avatarInitial?: string;
  badgeText?: string;
  expertise?: string;
  bio?: string;
}

const SpeakerCard = ({
  name,
  affiliation,
  avatarInitial,
  badgeText,
  expertise,
  bio,
}: SpeakerCardProps) => {
  // Get the initials from the name if not provided
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const initials = avatarInitial || getInitials(name);

  return (
    <Card className="group relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-conference-border bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-conference-muted/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="pb-6 pt-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Professional Avatar */}
          <div className="relative">
            <Avatar className="h-20 w-20 border-3 border-conference-accent/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <AvatarFallback className="bg-gradient-to-br from-conference-accent to-conference-secondary text-white text-lg font-medium">
                {initials}
              </AvatarFallback>
            </Avatar>
            {badgeText && (
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-conference-primary text-white px-3 py-1 text-xs font-medium shadow-md">
                  <FiAward className="w-3 h-3 mr-1" />
                  {badgeText}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-6 pb-8 text-center relative z-10">
        {/* Name */}
        <h3 className="text-xl font-semibold text-conference-primary mb-3 leading-tight tracking-tight group-hover:text-conference-accent transition-colors">
          {name}
        </h3>
        
        {/* Affiliation */}
        <div className="flex items-center justify-center mb-4">
          <FiUser className="w-4 h-4 text-conference-secondary mr-2 flex-shrink-0" />
          <p className="text-sm text-conference-text/70 font-light leading-relaxed">
            {affiliation}
          </p>
        </div>
        
        {/* Expertise (if provided) */}
        {expertise && (
          <div className="mt-4 pt-4 border-t border-conference-border/30">
            <p className="text-xs text-conference-accent font-medium uppercase tracking-wider mb-2">
              Expertise
            </p>
            <p className="text-sm text-conference-text/80 font-light">
              {expertise}
            </p>
          </div>
        )}
        
        {/* Bio (if provided) */}
        {bio && (
          <div className="mt-4">
            <p className="text-sm text-conference-text/70 font-light italic leading-relaxed">
              {bio}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
