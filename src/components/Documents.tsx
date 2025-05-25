import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  PresentationChartBarIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const documents = [
  {
    title: "Topic Assessment Form (TAF)",
    description: "Comprehensive documentation of the project",
    icon: DocumentTextIcon,
    type: "PDF",
    link: "#",
  },
  {
    title: "Project Proposal",
    description: "Initial project planning and scope",
    icon: DocumentTextIcon,
    type: "PDF",
    link: "#",
  },
  {
    title: "Final Reports",
    description: "Technical design and system diagrams",
    icon: DocumentTextIcon,
    type: "PDF",
    link: "#",
  },
  {
    title: "Research Paper",
    description: "Performance reports and test cases",
    icon: DocumentTextIcon,
    type: "PDF",
    link: "#",
  },
];

const presentations = [
  {
    title: "Proposal Presentation",
    description: "Initial project presentation",
    icon: PresentationChartBarIcon,
    type: "Slides",
    link: "#",
  },
  {
    title: "Progress Presentation – I",
    description: "Progress update and milestone review",
    icon: PresentationChartBarIcon,
    type: "Slides",
    link: "#",
  },
  {
    title: "Progress Presentation – I I",
    description: "Complete project showcase",
    icon: PresentationChartBarIcon,
    type: "Slides",
    link: "#",
  },
  {
    title: "Final Presentation",
    description: "Complete project showcase",
    icon: PresentationChartBarIcon,
    type: "Slides",
    link: "#",
  },
];

interface DocumentItem {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
  link: string;
}

interface DocumentCardProps {
  item: DocumentItem;
  index: number;
  delay?: number;
}

const DocumentCard = ({ item, index, delay = 0 }: DocumentCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: delay + index * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
    <a
      href={item.link}
      className="relative block p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <item.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            {item.type}
          </span>
          <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
          {item.title}
        </h4>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {item.description}
        </p>
      </div>
      
      <div className="mt-6 flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">
        <span className="text-sm">View {item.type}</span>
        <motion.div
          className="ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.div>
      </div>
    </a>
  </motion.div>
);

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  delay?: number;
}

const SectionHeader = ({ title, subtitle, delay = 0 }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-center max-w-4xl mx-auto mb-16"
  >
    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-900 to-emerald-900 bg-clip-text text-transparent mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-xl text-gray-600 leading-relaxed">
      {subtitle}
    </p>
  </motion.div>
);

interface SubsectionHeaderProps {
  title: string;
  delay?: number;
}

const SubsectionHeader = ({ title, delay = 0 }: SubsectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <div className="flex items-center space-x-4">
      <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-full"></div>
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>
    </div>
  </motion.div>
);

export default function Documents() {
  return (
    <div id="documents" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Project Documents & Presentations"
          subtitle="Access our comprehensive project documentation and presentations."
        />

        <div className="space-y-20">
          {/* Documentation Section */}
          <div>
            <SubsectionHeader title="Documentation" delay={0.2} />
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {documents.map((doc, index) => (
                <DocumentCard
                  key={doc.title}
                  item={doc}
                  index={index}
                  delay={0.3}
                />
              ))}
            </div>
          </div>

          {/* Presentations Section */}
          <div>
            <SubsectionHeader title="Presentations" delay={0.4} />
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {presentations.map((presentation, index) => (
                <DocumentCard
                  key={presentation.title}
                  item={presentation}
                  index={index}
                  delay={0.5}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}