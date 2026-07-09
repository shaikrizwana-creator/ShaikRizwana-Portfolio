"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "NPTEL - Software Testing",
  "NPTEL - Cloud Computing",
  "NPTEL - English for Competitive Exams",
  "MATLAB - Machine Learning & Deep Learning",
  "Java - CodeTantra",
  "Python - GeeksforGeeks",
  "Quantum Computing Certification",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            My <span className="gold">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition"
            >
              <Award className="text-yellow-500 mb-4" />
              <h3 className="font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}