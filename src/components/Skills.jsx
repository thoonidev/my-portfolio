import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-white body-font">
      <div className="container px-4 sm:px-6 py-12 mx-auto text-center">
        <CpuChipIcon className="w-10 inline-block mb-4 text-blue-400" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          HABILIDADES Y TECNOLOGÍAS
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Estas son algunas de las herramientas que utilizo en mis proyectos.
        </p>

        {/* Grid responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-colors p-3 sm:p-4 rounded-lg flex flex-col items-center shadow-md hover:scale-105 transform duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-2"
              />
              <p className="text-white text-xs sm:text-sm text-center break-words">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
