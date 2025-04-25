import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-blue-800 to-black sticky top-0 z-30">
      <div className="container mx-auto flex flex-col items-center p-4 space-y-4 md:flex-row md:justify-between md:space-y-0">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          thoonidev
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 items-center text-sm text-gray-300 md:flex-row md:gap-6 md:text-base font-semibold">
          <a
            href="#projects"
            className="hover:text-white transition duration-150"
          >
            PROYECTOS
          </a>
          <a
            href="#skills"
            className="hover:text-white transition duration-150"
          >
            TECNOLOGIAS
          </a>
          <a
            href="#learning"
            className="hover:text-white transition duration-150"
          >
            LEARNING
          </a>
        </nav>

        {/* GitHub Link */}
        <a
          href="https://github.com/thoonidev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 py-1 px-3 rounded text-white text-sm hover:bg-blue-700 shadow-md hover:shadow-blue-400 transition duration-300"
          style={{
            boxShadow: "0 0 8px #3b82f6, 0 0 16px #2563eb, 0 0 24px #1d4ed8",
          }}
        >
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y3cmI1dTNrZHU4YTRqMGtpd3NibGFocGJtajVub3RlMjBtcTh0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"
            alt="GitHub Logo"
            className="w-6 h-6 rounded-full"
          />
        </a>
      </div>
    </header>
  );
}
