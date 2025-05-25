import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Educational Technology",
    description:
      "Leveraging modern technology to create an effective learning environment.",
    icon: AcademicCapIcon,
  },
  {
    name: "Dyslexia Learning Support",
    description:
      "Specialized tools and methods designed specifically for dyslexic learners.",
    icon: LightBulbIcon,
  },
  {
    name: "Mobile Learning Systems",
    description: "Accessible learning on-the-go through mobile devices.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Assistive AI Tools",
    description:
      "AI-powered features to provide personalized learning assistance.",
    icon: BookOpenIcon,
  },
];

export default function Domain() {
  return (
    <div id="domain" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Domain
          </h2>
          <p className="text-lg text-gray-600">
            Our project focuses on creating an innovative solution in the
            intersection of educational technology and assistive learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gray-50 rounded-xl"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="p-3 bg-primary rounded-lg shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Problem Addressed
          </h3>
          <p className="text-gray-600">
            Existing dyslexia applications are often too general or specialized
            in one area (like phonics only), with little real-time feedback or
            multisensory interaction. ReadBuddy fills this gap with an
            integrated, adaptive learning platform that provides comprehensive
            support for dyslexic learners.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
