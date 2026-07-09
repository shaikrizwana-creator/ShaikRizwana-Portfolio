"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Brain, Code } from "lucide-react";

const cards = [
  {
    icon: <GraduationCap size={30} />,
    title: "CGPA",
    value: "8.28",
  },
  {
    icon: <Award size={30} />,
    title: "Certifications",
    value: "5+",
  },
  {
    icon: <Brain size={30} />,
    title: "Internship",
    value: "AI / ML",
  },
  {
    icon: <Code size={30} />,
    title: "Languages",
    value: "Java, Python",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          viewport={{once:true}}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold">
            About <span className="gold">Me</span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto leading-8">
            Aspiring Software Engineer with a strong foundation in programming,
            data structures and web technologies. Passionate about building
            software solutions, learning emerging technologies and solving
            real-world problems through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >
            <h3 className="text-3xl font-bold mb-5">
              Who am I?
            </h3>

            <p className="text-slate-600 leading-8">
              I am a Computer Science Engineering student at
              <strong> Ravindra College of Engineering for Women</strong>.
              I enjoy developing applications, exploring Artificial
              Intelligence and continuously improving my software
              development skills.
            </p>

            <div className="mt-8 space-y-3">
              <p>✔ AI & ML Intern</p>
              <p>✔ Hackathon Participant</p>
              <p>✔ Problem Solver</p>
              <p>✔ Quick Learner</p>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="grid grid-cols-2 gap-5"
          >
            {cards.map((card,index)=>(
              <div
                key={index}
                className="rounded-2xl shadow-lg border bg-white p-6 hover:-translate-y-2 transition"
              >
                <div className="text-blue-700 mb-3">
                  {card.icon}
                </div>

                <h4 className="font-semibold">
                  {card.title}
                </h4>

                <p className="text-2xl font-bold mt-2 gold">
                  {card.value}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}