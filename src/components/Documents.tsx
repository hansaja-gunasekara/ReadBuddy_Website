import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  PresentationChartBarIcon,
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

export default function Documents() {
  return (
    <div id="documents" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Project Documents
          </h2>
          <p className="text-lg text-gray-600">
            Access our comprehensive project documentation and presentations.
          </p>
        </motion.div>

        <div className="grid gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Documentation
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <motion.a
                  key={doc.title}
                  href={doc.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="mb-4">
                    <doc.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View {doc.type}
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Presentations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {presentations.map((presentation, index) => (
                <motion.a
                  key={presentation.title}
                  href={presentation.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="mb-4">
                    <presentation.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {presentation.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {presentation.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View {presentation.type}
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
