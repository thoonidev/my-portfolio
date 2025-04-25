import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white body-font">
      <div className="container px-4 sm:px-6 py-12 mx-auto text-center">
        {/* Encabezado */}
        <div className="flex flex-col w-full mb-12">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4 text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-semibold title-font text-white mb-2">
            CODING PROJECTS
          </h1>
          <p className="text-sm sm:text-base leading-relaxed mx-auto max-w-xl">
            Proyectos en los que he trabajado anteriormente disponibles en
            GitHub.
          </p>
        </div>

        {/* Proyectos */}
        <div className="flex flex-wrap -m-3">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.image}
              className="w-full sm:w-1/2 md:w-1/3 p-3 transition duration-300 transform hover:scale-105"
            >
              <div className="relative h-60 sm:h-72 rounded-lg overflow-hidden shadow-lg border border-gray-800">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 p-4 flex flex-col justify-center text-left z-10">
                  <h2 className="text-blue-400 text-sm font-semibold mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-white text-lg font-bold mb-2">
                    {project.title}
                  </h1>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
