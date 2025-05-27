import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle, FileText } from "lucide-react";

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
    status: "completed",
    description: "Project demonstration and results presentation",
    icon: FileText,
  },
  {
    title: "Research Paper",
    date: "June 2025",
    status: "completed",
    description: "Peer-reviewed publication submission",
    icon: FileText,
  },
];

const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
      <CheckCircle size={12} />
      <span className="text-xs font-medium">Completed</span>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
      <motion.div
        className="h-full bg-emerald-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 transform -translate-x-1/2" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200" />

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
                    <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-emerald-500">
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
                          <StatusBadge />
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
                          <span className="text-emerald-700 font-semibold">100%</span>
                        </div>
                        <ProgressBar />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}