import { motion } from "framer-motion";

const milestones = [
  {
    title: "Topic Assessment Form (TAF)",
    date: "May 2024",
    status: "completed",
  },
  {
    title: "Project Charter",
    date: "May 2024",
    status: "completed",
  },
  {
    title: "Proposal Presentation",
    date: "July 2024",
    status: "completed",
  },
  {
    title: "Proposal Reports",
    date: "August 2024",
    status: "completed",
  },
  {
    title: "Progress Presentation – I",
    date: "December 2024",
    status: "completed",
  },
 
  
  {
    title: "Progress Presentation – I I",
    date: "March 2025",
    status: "completed",
  },
  {
    title: "Final Reports",
    date: "April 2025",
    status: "completed",
  },
  {
    title: "Final Presentation",
    date: "May 2025",
    status: "Upcoming",
  },
  {
    title: "Research Paper",
    date: "June 2025",
    status: "Upcoming",
  },
];

export default function Milestones() {
  return (
    <div id="milestones" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Project Milestones
          </h2>
          <p className="text-lg text-gray-600">
            Track our progress through key project milestones and deliverables.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                      <span className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                        {milestone.date}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : milestone.status === "in-progress"
                            ? "bg-primary"
                            : "bg-gray-300"
                        } transition-all duration-300`}
                        style={{
                          width:
                            milestone.status === "completed" ? "100%" : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
