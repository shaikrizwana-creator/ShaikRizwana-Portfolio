"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built using Next.js, TypeScript and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shaikrizwana-creator",
    live: "#",
  },
  {
    title: "AI & ML Internship Project",
    description:
      "Built machine learning models and explored AI concepts during the SmartBridge internship.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/shaikrizwana-creator",
    live: "#",
  },
  {
    title: "Student Management System",
    description:
      "Developed a student management application using Java and MySQL.",
    tech: ["Java", "MySQL"],
    github: "https://github.com/shaikrizwana-creator",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="gold">Projects</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Some of my academic and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border bg-slate-50 shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-700 transition"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-700 transition"
                >
                  <ExternalLink size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}