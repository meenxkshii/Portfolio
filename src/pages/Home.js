import React from "react";
import backgroundImg from "../assets/background.jpg"; // Ensure this path is correct

const Home = () => {
  return (
    <div
      className="h-screen bg-gray-900 text-white relative flex items-center justify-center p-10"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Introduction */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-center md:text-left">Hi, I'm Meenakshi 👋</h1>
          <p className="text-lg text-gray-300 text-center md:text-left mt-3">
            A passionate <span className="font-semibold text-indigo-400">Full-Stack Developer</span> who loves building web apps with
            <span className="font-semibold text-indigo-400"> React & Spring Boot.</span> Always eager to learn, automate, and create.
          </p>

          {/* About Me */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-400">🚀 About Me</h2>
            <p className="text-gray-300 mt-2">
              Currently working at <span className="font-medium">CDAC Chennai</span>, specializing in{" "}
              <span className="font-medium">React, Java, Spring Boot</span>. I enjoy solving problems and creating seamless user experiences.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-400">💻 Recent Projects</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li><span className="text-indigo-300 font-medium">Role-Based Dashboard:</span> Built a system redirecting users based on roles with SweetAlert forms.</li>
              <li><span className="text-indigo-300 font-medium">Company Website:</span> Designing AR Tools & Services website from scratch.</li>
              <li><span className="text-indigo-300 font-medium">React Mastery:</span> Deep-diving into React to guide my team better.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-400">📬 Let's Connect</h2>
            <p className="text-gray-300 mt-2">
              💼 <a href="https://www.linkedin.com/in/meenakshirajeev/" className="text-indigo-300 hover:underline">LinkedIn</a> <br />
              📧 <a href="mailto:meeankshi.rajeev21@gmail.com" className="text-indigo-300 hover:underline">Email Me</a>
            </p>
          </div>
        </div>

        {/* Right Section - Skills & Fun Facts */}
        <div className="flex flex-col justify-center bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 text-center md:text-left">🛠 My Tech Stack</h2>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li><span className="text-indigo-300 font-medium">Languages:</span> Java, C++, JavaScript</li>
            <li><span className="text-indigo-300 font-medium">Frontend:</span> React, Tailwind CSS</li>
            <li><span className="text-indigo-300 font-medium">Backend:</span> Spring Boot, MySQL</li>
            <li><span className="text-indigo-300 font-medium">Tools:</span> Linux, API Testing, SweetAlert, Git</li>
          </ul>

          {/* Fun Facts */}
          <div className="mt-6">
            <h2 className="text-3xl font-semibold text-indigo-400 text-center md:text-left">🎯 Fun Facts</h2>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>🌱 Learning more about <span className="font-medium">DevOps & Cloud Technologies.</span></li>
              <li>🎨 I enjoy designing smooth, user-friendly UIs.</li>
              <li>📚 Always exploring new frameworks & best practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
