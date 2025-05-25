import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  DevicePhoneMobileIcon,
  TagIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  UsersIcon,
  CogIcon,
  // TrendingUpIcon, // Removed because it does not exist in @heroicons/react/24/outline
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Educational Technology",
    description:
      "Leveraging cutting-edge technology to create effective, scalable learning environments.",
    icon: AcademicCapIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dyslexia Learning Support",
    description:
      "Evidence-based tools and methodologies designed specifically for dyslexic learners.",
    icon: LightBulbIcon,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Mobile Learning Systems",
    description:
      "Cross-platform accessible learning solutions optimized for mobile experiences.",
    icon: DevicePhoneMobileIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Assistive AI Tools",
    description:
      "Machine learning-powered features providing personalized, adaptive learning assistance.",
    icon: BookOpenIcon,
    color: "from-purple-500 to-indigo-500",
  },
];

const researchSections = [
  {
    icon: ArrowTrendingUpIcon,
    title: "Problem Statement",
    content: `Current dyslexia applications lack comprehensive integration and real-time adaptive feedback. Most solutions are siloed, focusing on single aspects like phonics without providing holistic support. ReadBuddy addresses this critical gap through an integrated, multi-modal learning platform.`,
    highlight: "Comprehensive Integration Gap",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Literature Analysis",
    content: `Extensive review of existing solutions including EasyLexia and AraRead reveals focus on isolated usability improvements. Our research builds upon these foundations while introducing unified reading, writing, pronunciation, and cognitive support systems.`,
    highlight: "Unified Learning Approach",
  },
  {
    icon: BoltIcon,
    title: "Innovation Opportunity",
    content: `Identified absence of real-time feedback mechanisms, limited multisensory experiences, and fragmented support systems in current market solutions. This represents a significant opportunity for comprehensive solution development.`,
    highlight: "Real-time Adaptive Systems",
  },
  {
    icon: UsersIcon,
    title: "Research Question",
    content: `How can we architect an inclusive mobile ecosystem that systematically enhances reading and writing proficiency in dyslexic children through personalized, multisensory, and feedback-driven pedagogical interactions?`,
    highlight: "Systematic Enhancement",
  },
];

const objectives = [
  {
    icon: CogIcon,
    text: "Enhance writing proficiency through haptic feedback and visual guidance systems",
  },
  {
    icon: BookOpenIcon,
    text: "Improve reading comprehension via personalized readability optimization",
  },
  {
    icon: TagIcon,
    text: "Advance cognitive development through gamified, progressive learning pathways",
  },
  {
    icon: ShieldCheckIcon,
    text: "Support pronunciation accuracy with real-time speech analysis and phonetic segmentation",
  },
];

const methodology = [
  {
    component: "Writing Coach",
    description: "Advanced error detection with guided tracing algorithms",
  },
  {
    component: "Readability Engine",
    description: "Dynamic font and spacing optimization for enhanced clarity",
  },
  {
    component: "Task Orchestrator",
    description:
      "Intelligent activity assignment with comprehensive progress analytics",
  },
  {
    component: "ReadBuddy Core",
    description:
      "Real-time pronunciation correction with adaptive feedback loops",
  },
];

const technologies = [
  "React Native",
  "Speech Recognition APIs",
  "Natural Language Processing",
  "Firebase/Firestore",
  "Machine Learning Models",
  "Adaptive Learning Algorithms",
];

export default function Domain() {
  return (
    <div
      id="domain"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden text-black bg-gradient-to-r">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-black to-slate-300 bg-clip-text">
              Domain Overview
            </h1>
            <p className="mb-8 text-xl font-medium leading-relaxed text-black md:text-2xl">
              Pioneering the intersection of educational technology and
              assistive learning to create transformative solutions for dyslexic
              learners
            </p>
          </div>
        </div>
      </section>

      {/* Literature Survey */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Literature Survey
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>
          <div className="p-8 bg-white border shadow-lg rounded-2xl border-slate-100">
            <div className="flex items-center mb-6 space-x-3">
              <div className="w-12 h-12 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                <BookOpenIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Literature Analysis
              </h3>
            </div>
            <p className="leading-relaxed text-slate-600">
              Comprehensive analysis of existing frameworks including EasyLexia
              and AraRead demonstrates focus on isolated usability and
              engagement metrics. Our research advances the field by integrating
              reading, writing, pronunciation, and cognitive modules into a
              unified, adaptive learning ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Research Gap */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Research Gap
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>
          <div className="p-8 bg-white border shadow-lg rounded-2xl border-slate-100">
            <div className="flex items-center mb-6 space-x-3">
              <div className="w-12 h-12 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                <BoltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Current Limitations
              </h3>
            </div>
            <p className="leading-relaxed text-slate-600">
              Current market solutions demonstrate significant limitations in
              providing real-time feedback mechanisms, comprehensive
              multisensory experiences, and integrated support systems for
              dyslexic learners. This gap represents a critical opportunity for
              developing next-generation assistive learning technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Research Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Research Problem
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {researchSections.slice(0, 2).map((section, index) => (
              <div
                key={index}
                className="p-8 transition-shadow duration-300 bg-white border shadow-lg rounded-2xl hover:shadow-xl border-slate-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">
                      {section.title}
                    </h3>
                    <div className="inline-block px-3 py-1 mb-3 text-sm text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                      {section.highlight}
                    </div>
                    <p className="leading-relaxed text-slate-600">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Research Objectives
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start p-6 space-x-4 transition-shadow duration-300 bg-white border shadow-md rounded-xl hover:shadow-lg border-slate-100"
              >
                <div className="flex-shrink-0 w-10 h-10 p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                  <objective.icon className="w-6 h-6 text-white" />
                </div>
                <p className="flex-1 leading-relaxed text-slate-700">
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Implementation Methodology
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-2">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="p-8 transition-shadow duration-300 bg-white border shadow-lg rounded-2xl hover:shadow-xl border-slate-100"
              >
                <div className="flex items-center mb-3 space-x-3">
                  <div className="w-8 h-8 p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.component}
                  </h3>
                </div>
                <p className="leading-relaxed text-slate-600 ml-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
              Technologies Used
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>

          <div className="p-8 bg-white border shadow-lg rounded-2xl border-slate-100">
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-slate-900">
              <CodeBracketIcon className="mr-3 w-7 h-7 text-cyan-500" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 transition-shadow duration-200 border rounded-lg cursor-default bg-gradient-to-r from-blue-50 to-purple-50 text-slate-800 border-slate-200 hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
