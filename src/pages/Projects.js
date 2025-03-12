import React from "react";
import bgImage from "../assets/projects.jpeg"; 

const projects = [
  { title: "Employee-Student Dashboard", description: "A full-stack management system for employees and students using React, Spring Boot, and MySQL.", link: "https://github.com/meenxkshii/employee-dashboard" },
  { title: "E-Commerce Website", description: "An online shopping platform built with React, Spring Boot, and Stripe payments.", link: "https://github.com/meenxkshii/ecommerce" },
  { title: "Portfolio Website", description: "Personal portfolio showcasing my work, skills, and experience with React & Tailwind CSS.", link: "https://github.com/meenxkshii/portfolio" },
];

const Projects = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white relative p-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-indigo-300 mb-8">🚀 My Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-indigo-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-300 hover:text-indigo-400 transition"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/meenxkshii"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md text-lg font-medium transition-all"
          >
            See More on GitHub 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
