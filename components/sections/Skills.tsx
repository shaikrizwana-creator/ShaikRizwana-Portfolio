"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={42} />, color: "text-orange-500" },
  { name: "Python", icon: <FaPython size={42} />, color: "text-yellow-500" },
  { name: "HTML", icon: <FaHtml5 size={42} />, color: "text-red-500" },
  { name: "CSS", icon: <FaCss3Alt size={42} />, color: "text-blue-500" },
  { name: "MySQL", icon: <SiMysql size={42} />, color: "text-sky-600" },
  { name: "Git", icon: <FaGitAlt size={42} />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub size={42} />, color: "text-slate-900" },
  { name: "VS Code", icon: <FaCode size={42} />, color: "text-blue-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="gold">Skills</span>
          </h2>

          <p className="mt-5 text-slate-600">
            Technologies and tools I use to build software.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl border bg-slate-50 p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`${skill.color} flex justify-center mb-5`}>
                {skill.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}