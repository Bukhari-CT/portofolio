import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import ProfileImage from "../../public/Profile.png";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  {
    id: "home",
    label: "Home",
    content:
      "As a MERN stack developer, I specialize in creating full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have experience working on various projects, including e-commerce websites, social media platforms, and business management systems. My expertise includes designing responsive user interfaces, implementing secure authentication and authorization systems, and  optimizing website performance.",
  },
  { id: "about", label: "About", content: "Learn more about me and my background." },
  { id: "skills", label: "Skills", content: "See a list of my skills and expertise." },
  { id: "projects", label: "Projects", content: "Check out some of my past projects." },
  { id: "contact", label: "Contact", content: "Get in touch with me." },
];

export default function MyApp() {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["This is Faisal Bukhari", "A MERN Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((titleIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [titleIndex]);

  const handleSectionClick = (section: any) => {
    setCurrentSection(section);
    setIsDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div
        className={`drawer ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-full bg-gray-700 z-50 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/4 md:h-auto md:bg-transparent md:z-auto md:flex md:flex-col md:justify-center md:items-center`}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section)}
            className={`w-full py-3 px-6 text-center ${currentSection.id === section.id ? "bg-gray-600" : ""}`}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center items-center">
        <button onClick={handleDrawerToggle} className="block p-4 md:hidden">
          <svg className="w-6 h-6 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        {currentSection.id === "home" ? (
          <div className="adjustWidth text-center">
            <Image
              src={ProfileImage}
              alt="Headshot"
              width={150}
              height={150}
              className="rounded-full border border-gray-50 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  cursor: "",
                }}
              />
            </h1>
            <p className="text-lg text-justify">{currentSection.content}</p>
            <div className="flex justify-center space-x-4 p-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4">{currentSection.label}</h1>
            <p className="text-lg">{currentSection.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
