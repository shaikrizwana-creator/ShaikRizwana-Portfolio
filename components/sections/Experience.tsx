"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Artificial Intelligence & Machine Learning Intern",
    company: "SmartBridge | Google for Developers | APSCHE",
    duration: "2 Months",
    description:
      "Completed a virtual internship focused on Artificial Intelligence and Machine Learning. Worked on AI/ML concepts, real-world applications, and hands-on projects.",
  },
  {
    title: "Hackathon Participant",
    company: "College & Technical Hackathons",
    duration: "2023 - Present",
    description:
      "Participated in multiple hackathons, collaborated with teams to build innovative software solutions, and improved problem-solving, teamwork, and presentation skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="gold">Experience</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Internship experience and technical activities.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg border p-8 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-700 text-white p-3 rounded-full">
                  <Briefcase size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-blue-700">{exp.company}</p>
                </div>
              </div>

              <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>

              <p className="text-slate-600 leading-7">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}