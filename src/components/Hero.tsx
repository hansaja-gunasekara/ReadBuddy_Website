import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div id="home" className="pt-24 section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <img
            src="/img/bg.jpg"
            alt="ReadBuddy App Interface"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay for opacity control */}
        <div className="absolute inset-0 bg-white/50"></div>{" "}
        {/* Adjust opacity here (50% white overlay) */}
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Welcome to <span className="text-gradient">ReadBuddy</span>
            </h1>
            <p className="text-lg text-gray-900 mb-8">
              An interactive mobile learning system developed to help children
              with dyslexia improve their reading, writing, pronunciation, and
              cognitive skills through a personalized, multisensory, and
              gamified experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#domain" className="btn-primary">
                Learn More
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-3xl"></div>
              <img
                src="/img/hero.png"
                alt="ReadBuddy App Interface"
                className="relative w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
