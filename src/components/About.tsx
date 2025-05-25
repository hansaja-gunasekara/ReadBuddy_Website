import { motion } from "framer-motion";

const team = [
  {
    name: "Wijethunga R.D.K.G",
    role: "Writing Coach Module Lead",
    studentId: "IT21240942",
    image: "/img/kaveesha.jpg",
  },
  {
    name: "Bandara E.M.S.S",
    role: "Readability Checker Lead",
    studentId: "IT21239298",
    image: "/img/Sithum.jpg",
  },
  {
    name: "Thennakoon K.M.K.K",
    role: "Focus Challenge Lead",
    studentId: "IT21232336",
    image: "/img/kavindu.jpg",
  },
  {
    name: "Gunasekara G.H.M",
    role: "Pronunciation Assist Lead",
    studentId: "IT21232022",
    image: "/img/hansaja1.jpg",
  },
];

const supervisors = [
  {
    name: "Dr. Samantha Rajapaksha",
    role: "Project Supervisor",
    image: "/img/samanthaSir.jpg",
  },
  {
    name: "Mr. Nelum Amarasena",
    role: "Co-Supervisor",
    image: "/img/Nelumsir.jpg",
  },
];

export default function About() {
  return (
    <div id="about" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            Meet our dedicated team of developers and supervisors working on the
            ReadBuddy project.
          </p>
        </motion.div>

        <div className="grid gap-12">
          

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Project Supervisors
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {supervisors.map((supervisor, index) => (
                <motion.div
                  key={supervisor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4 inline-block">
                    <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                      <img
                        src={supervisor.image}
                        alt={supervisor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://via.placeholder.com/200x200?text=Photo";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 transform hover:scale-105 transition-transform"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {supervisor.name}
                  </h4>
                  <p className="text-primary font-medium">{supervisor.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Development Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.studentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4 inline-block">
                    <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://via.placeholder.com/200x200?text=Photo";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 transform hover:scale-105 transition-transform"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.studentId}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
