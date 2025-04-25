import React from "react";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { learning } from "../data";

export default function Testimonials() {
  return (
    <section id="learning" className="text-gray-400 body-font">
      <div className="container px-4 sm:px-6 py-12 mx-auto text-center">
        <VideoCameraIcon className="w-10 inline-block mb-4 text-blue-400" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-10">
          VIDEOS COMPLEMENTARIOS
        </h1>

        <div className="flex flex-wrap justify-center -mx-2">
          {learning.map((video, index) => {
            const videoId = video.url.split("/embed/")[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

            return (
              <div key={index} className="w-full sm:w-1/2 px-2 mb-6">
                <div className="bg-gray-800 bg-opacity-40 rounded-lg p-4 shadow-md">
                  <div className="w-full aspect-ratio-16-9 overflow-hidden rounded-lg">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                      style={{ border: "none" }}
                    />
                  </div>
                  <h2 className="text-white mt-4 text-base sm:text-lg font-medium">
                    {video.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
