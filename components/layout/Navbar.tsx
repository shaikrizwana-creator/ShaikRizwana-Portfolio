"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Education", href: "#education" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-slate-900">Riz</span>
          <span className="gold">wana</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-slate-600 hover:text-blue-800 transition font-medium"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Social Icons + Resume */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shaikrizwana-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-800 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/rizwana-shaik-09a0ab324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-800 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:shaikrizwana130206@gmail.com"
            className="text-slate-700 hover:text-blue-800 transition"
          >
            <FaEnvelope size={20} />
          </a>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="btn-primary hidden md:block"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}