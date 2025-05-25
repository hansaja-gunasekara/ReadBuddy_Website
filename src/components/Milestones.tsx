import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar, FileText } from "lucide-react";

const milestones = [
  {
    title: "Topic Assessment Form (TAF)",
    date: "May 2024",
    status: "completed",
    description: "Initial project scope and feasibility assessment",
    icon: FileText,
  },
  {
    title: "Project Charter",
    date: "May 2024",
    status: "completed",
    description: "Project authorization and preliminary requirements",
    icon: FileText,
  },
  {
    title: "Proposal Presentation",
    date: "July 2024",
    status: "completed",
    description: "Comprehensive project proposal and methodology",
    icon: FileText,
  },
  {
    title: "Proposal Reports",
    date: "August 2024",
    status: "completed",
    description: "Detailed documentation of proposed solution",
    icon: FileText,
  },
  {
    title: "Progress Presentation – I",
    date: "December 2024",
    status: "completed",
    description: "First milestone review and progress evaluation",
    icon: FileText,
  },
  {
    title: "Progress Presentation – II",
    date: "March 2025",
    status: "completed",
    description: "Second phase completion and interim results",
    icon: FileText,
  },
  {
    title: "Final Reports",
    date: "April 2025",
    status: "completed",
    description: "Comprehensive project documentation and findings",
    icon: FileText,
  },
  {
    title: "Final Presentation",
    date: "May 2025",
    status: "in-progress",
    description: "Project demonstration and results presentation",
    icon: FileText,
  },
  {
    title: "Research Paper",
    date: "June 2025",
    status: "upcoming",
    description: "Peer-reviewed publication submission",
    icon: FileText,
  },
];

type StatusType = "completed" | "in-progress" | "upcoming";

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          label: "Completed",
          icon: CheckCircle,
        };
      case "in-progress":
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200",
          label: "In Progress",
          icon: Clock,
        };
      default:
        return {
          bg: "bg-slate-50",
          text: "text-slate-600",
          border: "border-slate-200",
          label: "Upcoming",
          icon: Calendar,
        };
    }
  };

  const config = getStatusConfig(status);
  const StatusIcon = config.icon;

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${config.bg} ${config.text} ${config.border}`}>
      <StatusIcon size={12} />
      <span className="text-xs font-medium">{config.label}</span>
    </div>
  );
};

const ProgressBar = ({ status }: { status: StatusType }) => {
  const getProgress = () => {
    switch (status) {
      case "completed": return 100;
      case "in-progress": return 65;
      default: return 0;
    }
  };

  const getColor = () => {
    switch (status) {
      case "completed": return "bg-emerald-500";
      case "in-progress": return "bg-amber-500";
      default: return "bg-slate-300";
    }
  };

  return (
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
      <motion.div
        className={`h-full ${getColor()} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${getProgress()}%` }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default function Milestones() {
  return (
    <div id="milestones" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Project Milestones
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Follow our systematic approach through each critical phase of development, 
            from initial assessment to final publication.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-1/2" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven 
                      ? "md:justify-start justify-start" 
                      : "md:justify-end justify-start"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute ${
                    isEven 
                      ? "left-8 md:left-1/2" 
                      : "left-8 md:left-1/2"
                  } transform md:-translate-x-1/2 -translate-x-1/2 z-10`}>
                    <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                      milestone.status === "completed" 
                        ? "bg-emerald-500" 
                        : milestone.status === "in-progress"
                        ? "bg-amber-500"
                        : "bg-slate-400"
                    }`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full ${
                    isEven 
                      ? "md:w-5/12 md:pr-16 pl-20 md:pl-0" 
                      : "md:w-5/12 md:pl-16 pl-20 md:pl-0"
                  }`}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-slate-200 transition-all duration-300"
                    >
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {milestone.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg">
                            {milestone.date}
                          </span>
                          <StatusBadge status={milestone.status as StatusType} />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 font-medium">Progress</span>
                          <span className="text-slate-700 font-semibold">
                            {milestone.status === "completed" ? "100%" : 
                             milestone.status === "in-progress" ? "65%" : "0%"}
                          </span>
                        </div>
                        <ProgressBar status={milestone.status as StatusType} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600 mb-1">7</div>
            <div className="text-emerald-700 font-medium">Completed</div>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="text-3xl font-bold text-amber-600 mb-1">1</div>
            <div className="text-amber-700 font-medium">In Progress</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-3xl font-bold text-slate-600 mb-1">1</div>
            <div className="text-slate-700 font-medium">Upcoming</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}