"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-12">
          Contact <span className="gold">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-2xl p-8 border">
            <Mail className="mx-auto text-blue-700 mb-4" size={32}/>
            <h3 className="font-bold">Email</h3>
            <p>shaikrizwana130206@gmail.com</p>
          </div>

          <div className="shadow-lg rounded-2xl p-8 border">
            <Phone className="mx-auto text-blue-700 mb-4" size={32}/>
            <h3 className="font-bold">Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="shadow-lg rounded-2xl p-8 border">
            <MapPin className="mx-auto text-blue-700 mb-4" size={32}/>
            <h3 className="font-bold">Location</h3>
            <p>Kurnool, Andhra Pradesh</p>
          </div>

        </div>

      </div>
    </section>
  );
}