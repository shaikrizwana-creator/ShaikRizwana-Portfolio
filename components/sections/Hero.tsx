"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
            👋 Hello, I'm
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            SHAIK
            <span className="gold"> RIZWANA</span>
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-slate-700">
            Computer Science Engineering Student
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
            Aspiring Software Engineer with a strong foundation in
            programming, data structures and web technologies.
            Passionate about building impactful software solutions,
            solving real-world problems and continuously learning
            emerging technologies.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap items-center gap-5 mt-10">

  <a
  href="/resume/resume.pdf"
  target="_blank"
  className="inline-flex items-center justify-center min-w-[220px] h-14 bg-blue-700 hover:bg-blue-900 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
>
  Download Resume
</a>
  <a
  href="#contact"
  className="inline-flex items-center justify-center min-w-[180px] h-14 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-lg font-semibold rounded-full transition-all duration-300"
>
  Contact Me
</a>

</div>
          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/shaikrizwana-creator"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rizwana-shaik-09a0ab324"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shaikrizwana130206@gmail.com"
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-12">

            <div className="bg-white rounded-2xl shadow-xl p-5 text-center">
              <GraduationCap className="mx-auto text-blue-700 mb-3"/>
              <h3 className="text-3xl font-bold">8.28</h3>
              <p className="text-slate-500 text-sm">CGPA</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-5 text-center">
              <Award className="mx-auto text-yellow-500 mb-3"/>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-slate-500 text-sm">Certificates</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-5 text-center">
              <Briefcase className="mx-auto text-green-600 mb-3"/>
              <h3 className="text-3xl font-bold">AI/ML</h3>
              <p className="text-slate-500 text-sm">Internship</p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            <Image
              src="/images/profile.jpg"
              alt="Shaik Rizwana"
              width={460}
              height={460}
              priority
              className="relative rounded-full border-8 border-white shadow-2xl object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}