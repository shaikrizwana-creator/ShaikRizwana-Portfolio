"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institute: "Ravindra College of Engineering for Women",
    year: "2023 – 2027",
    score: "8.28",
    label: "CGPA",
  },
  {
    title: "Intermediate (MPC)",
    institute: "SR Junior College, Kurnool",
    year: "2021 – 2023",
    score: "940 / 1000",
    label: "Marks",
  },
  {
    title: "SSC",
    institute: "Pratibha Model High School",
    year: "2020 – 2021",
    score: "521 / 600",
    label: "Marks",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Education <span className="gold">Journey</span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            My academic journey and achievements.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>

          <div className="space-y-10">

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg">
                  <GraduationCap size={30} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300">

                  <div className="flex justify-between items-start flex-wrap gap-6">

                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xl text-blue-700 font-medium">
                        {item.institute}
                      </p>

                      <p className="mt-4 text-slate-500 text-lg">
                        {item.year}
                      </p>
                    </div>

                    <div className="text-right min-w-[120px]">
                      <p className="text-slate-500 uppercase tracking-wider text-sm">
                        {item.label}
                      </p>

                      <h4 className="text-3xl font-bold text-blue-700 mt-1">
                        {item.score}
                      </h4>
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}