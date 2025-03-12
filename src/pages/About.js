import React from "react";
import profilePic from "../assets/profile.jpg";
import bgImage from "../assets/about-bg.jpeg"; // Ensure the correct path

const About = () => {
  return (
    <div
      className="h-screen bg-gray-900 text-white flex items-center justify-center p-10 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg">
          <img
            src={profilePic}
            alt="Meenakshi"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
          />
          <h1 className="text-3xl font-bold mt-4 text-indigo-300">Hey, I'm Meenakshi 👋</h1>
          <p className="text-lg text-gray-300 text-center mt-2">
            Full-Stack Developer | Project Assistant @ CDAC
          </p>

          {/* Tech Stack */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-indigo-400">🛠 Tech Stack</h2>
            <ul className="text-gray-300 mt-2 space-y-1">
              <li>⚡ React & Tailwind CSS</li>
              <li>🚀 Spring Boot & MySQL</li>
              <li>🔧 API Testing & Automation</li>
              <li>💻 Linux & DevOps Basics</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://github.com/meenxkshii"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md text-sm font-medium transition-all"
            >
              GitHub
            </a>
            <a
              href="mailto:meenakshi.rajeev21@gmail.com"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md text-sm font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div>
          <h1 className="text-4xl font-bold text-indigo-300">About Me</h1>
          <p className="text-lg text-gray-300 mt-4">
            I'm passionate about creating scalable and efficient web applications. With experience in{" "}
            <span className="font-medium text-indigo-400">React, Java, Spring Boot, and MySQL</span>, I specialize in building full-stack applications that solve real-world problems.
          </p>

          {/* Journey Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-400">🌟 My Journey</h2>
            <p className="text-gray-300 mt-2">
              🔹 Started coding in C++, later shifted to full-stack development. <br />
              🔹 Built role-based applications, automation tools, and API testing frameworks. <br />
              🔹 Currently exploring DevOps, cloud computing, and AI-driven solutions.
            </p>
          </div>

          {/* Fun Fact Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-400">🎯 Fun Facts</h2>
            <ul className="text-gray-300 mt-2 space-y-2">
              <li>📚 Always up for learning new frameworks & best practices.</li>
              <li>🎨 I enjoy designing clean, user-friendly interfaces.</li>
              <li>💡 Passionate about automation & optimizing workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
