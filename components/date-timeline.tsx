"use client";

import { FiCalendar, FiCheck, FiClock } from "react-icons/fi";

interface TimelineEvent {
  date: string;
  description: string;
  isActive?: boolean;
}

interface DateTimelineProps {
  events: TimelineEvent[];
}

const DateTimeline = ({ events }: DateTimelineProps) => {
  const today = new Date();

  const getStatus = (eventDate: string, index: number) => {
    const date = new Date(eventDate);
    if (date < today) return 'completed';
    if (index === 0 || new Date(events[index - 1]?.date) < today) return 'active';
    return 'upcoming';
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-conference-border"></div>
        
        <div className="space-y-12">
          {events.map((event, index) => {
            const status = getStatus(event.date, index);
            
            return (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 bg-white shadow-lg ${
                  status === 'completed' 
                    ? 'border-green-600'
                    : status === 'active'
                    ? 'border-conference-accent'
                    : 'border-conference-border'
                }`}>
                  {status === 'completed' ? (
                    <FiCheck className={`w-6 h-6 text-green-600`} />
                  ) : status === 'active' ? (
                    <FiClock className={`w-6 h-6 text-conference-accent`} />
                  ) : (
                    <FiCalendar className={`w-6 h-6 text-conference-text/60`} />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1 min-w-0">
                  <div className={`bg-white border-2 rounded-lg p-8 shadow-sm ${
                    status === 'completed'
                      ? 'border-green-200 bg-green-50/30'
                      : status === 'active'
                      ? 'border-conference-accent/30 bg-conference-accent/5'
                      : 'border-conference-border bg-white'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-3 ${
                          status === 'completed'
                            ? 'text-green-700'
                            : status === 'active'
                            ? 'text-conference-accent'
                            : 'text-conference-primary'
                        }`}>
                          {event.description}
                        </h3>
                        
                        <div className="flex items-center text-sm">
                          <FiCalendar className={`w-4 h-4 mr-2 ${
                            status === 'completed'
                              ? 'text-green-600'
                              : status === 'active'
                              ? 'text-conference-accent'
                              : 'text-conference-text/60'
                          }`} />
                          <span className={`font-medium ${
                            status === 'completed'
                              ? 'text-green-600'
                              : status === 'active'
                              ? 'text-conference-accent'
                              : 'text-conference-text/70'
                          }`}>
                            {event.date}
                          </span>
                        </div>
                      </div>
                      
                      {/* Formal status indicator */}
                      <div className={`px-4 py-2 rounded-md text-sm font-medium border ${
                        status === 'completed'
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : status === 'active'
                          ? 'bg-conference-accent/10 text-conference-accent border-conference-accent/30'
                          : 'bg-conference-muted text-conference-text/70 border-conference-border'
                      }`}>
                        {status === 'completed' ? 'Deadline Passed' : status === 'active' ? 'Active Period' : 'Scheduled'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DateTimeline;
