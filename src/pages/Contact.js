import React, { useState } from "react";
import API from "../utils/api";
import bgImage from "../assets/Contact.jpg"; 

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await API.post("/send-email", { email, message });
      setStatus("✅ Email Sent Successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("❌ Error sending email. Please try again.");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-900 text-white relative p-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contact Form */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-indigo-300 text-center mb-4">📩 Contact Me</h2>
        <p className="text-gray-300 text-center mb-6">Have a question or want to collaborate? Send me a message!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 text-black rounded-md border-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 text-black rounded-md border-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-md shadow-md transition-all"
          >
            🚀 Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="text-center mt-4 text-lg">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
