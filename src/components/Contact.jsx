import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validación
    let isValid = true;
    let newErrors = { name: "", email: "", message: "" };

    // Validación del nombre (solo letras y espacios, al menos 3 caracteres)
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(name)) {
      newErrors.name =
        "Por favor, ingresa un nombre válido (solo letras y espacios).";
      isValid = false;
    }

    // Validación del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
      isValid = false;
    }

    // Validación del mensaje (mínimo 10 caracteres)
    if (message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
      isValid = false;
    }

    // Si hay errores, mostrar los mensajes de error
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Si la validación es correcta, enviar el formulario
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        // Limpiar los campos después de un envío exitoso
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ name: "", email: "", message: "" }); // Limpiar errores

        alert("¡Mensaje enviado!");
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative sm:mb-0 mb-10">
          <img
            src="./code.svg"
            alt="Decorative Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md z-10">
            <div className="lg:w-1/2 px-6 sm:mb-6 mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                REDES SOCIALES
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/thoonidev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </a>
                <a
                  href="https://instagram.com/thoonidev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/instagram_dark.svg"
                    alt="Instagram"
                    className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </a>
                <a
                  href="https://youtube.com/@thoonidev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a
                href="mailto:anthony.abel.alanya@gmail.com"
                className="text-indigo-400 leading-relaxed truncate max-w-xs block"
                title="anthony.abel.alanya@gmail.com"
              >
                anthony.abel.alanya@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          netlify
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 sm:px-4 px-6"
        >
          {/* ✅ Campo oculto justo aquí */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              No llenar este campo: <input name="bot-field" />
            </label>
          </p>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contáctame!
          </h2>
          <p className="text-white leading-relaxed mb-5 text-sm sm:text-base">
            Estoy disponible para nuevos proyectos así que puedes escribirme,
            ¡estoy a un mensaje de distancia!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-blue-500 text-xs mt-2">{errors.name}</p>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-blue-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-blue-500 text-xs mt-2">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
