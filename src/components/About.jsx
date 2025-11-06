import React from "react";

export default function About() {
  return (
    <section id="about" className="text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 md:px-10 py-16">
        {/* Texto */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left items-center md:items-start space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Hola, soy Anthony
            <br className="hidden lg:inline-block" />
            Desarrollador de Software.
          </h1>
          <p className="text-base leading-relaxed max-w-md">
            Desarrollador backend en formación con enfoque en Java y Spring Boot. 
            Experiencia en bases de datos, Git/GitHub y desarrollo de sistemas con React, 
            Angular y Thymeleaf. Apasionado por el aprendizaje continuo y el código limpio.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center text-white bg-blue-600 py-2 px-5 rounded text-base hover:bg-blue-700 shadow-lg hover:shadow-blue-400 transition duration-300"
              style={{
                boxShadow:
                  "0 0 10px #3b82f6, 0 0 20px #2563eb, 0 0 30px #1d4ed8",
              }}
            >
              Contacto
              <span role="img" aria-label="correo" className="ml-2">
                📧
              </span>
            </a>
            <a
              href="/cv/mi-cv_1.pdf" download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center text-white bg-purple-700 py-2 px-5 rounded text-base hover:bg-purple-800 shadow-lg hover:shadow-purple-400 transition duration-300"
              style={{
                boxShadow:
                  "0 0 10px #8b5cf6, 0 0 20px #7c3aed, 0 0 30px #6d28d9",
              }}
            >
              Descargar CV
              <span role="img" aria-label="cohete" className="ml-2">
                🚀
              </span>
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center">
          <div
            className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden float shadow-lg"
            style={{
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.6),
                0 0 40px rgba(96, 165, 250, 0.6),
                0 0 60px rgba(147, 197, 253, 0.6)`,
              border: "4px solid rgba(147, 197, 253, 0.4)",
              background:
                "radial-gradient(circle at center, rgba(147, 197, 253, 0.2), transparent 70%)",
            }}
          >
            <img
              className="w-full h-full object-cover opacity-90"
              alt="hero"
              src="./fto02.png"
              style={{
                filter:
                  "brightness(1.1) saturate(1.2) drop-shadow(0 0 10px rgba(147, 197, 253, 0.5))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
