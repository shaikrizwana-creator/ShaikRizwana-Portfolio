"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institute: "Ravindra College of Engineering for Women",
    year: "2022 – 2026",
    score: "CGPA: 8.28",
  },
  {
    title: "Intermediate (MPC)",
    institute: "SR Junior College, Kurnool",
    year: "2020 – 2022",
    score: "940 / 1000",
  },
  {
    title: "SSC",
    institute: "Pratibha Model High School",
    year: "2019 – 2020",
    score: "521 / 600",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Education <span className="gold">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 h-full w-1 bg-blue-200"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-20 mb-12"
            >
              <div className="absolute left-0 top-2 bg-blue-700 text-white rounded-full p-3">
                <GraduationCap size={24} />
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-blue-700 mt-2">{item.institute}</p>

                <div className="flex justify-between mt-4 text-slate-600">
                  <span>{item.year}</span>
                  <span className="font-semibold">{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}