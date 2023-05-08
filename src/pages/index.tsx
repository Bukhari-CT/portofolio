import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "../../public/Profile.png";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["This is Faisal Bukhari", "A MERN Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((titleIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [titleIndex]);
  return (
    <>
      <header className="bg-black text-white py-2">
        <nav className="flex justify-center space-x-6 text-lg font-medium">
          <Link href="/">
            <span className="nav-link">Home</span>
          </Link>
          <Link href="/about">
            <span className="nav-link">About</span>
          </Link>
          <Link href="/skills">
            <span className="nav-link">Skills</span>
          </Link>
          <Link href="/projects">
            <span className="nav-link">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="nav-link">Contact Me</span>
          </Link>
        </nav>
      </header>
      <section className="heroSection mt-2">
        <div className="bg-black text-white py-20 lg:py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
                <h1 className="text-5xl font-bold tracking-wider mb-4">
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
                <p className="text-lg mb-6">
                  As a MERN stack developer, I specialize in creating full-stack web applications using MongoDB,
                  Express.js, React.js, and Node.js. I have experience working on various projects, including e-commerce
                  websites, social media platforms, and business management systems. My expertise includes designing
                  responsive user interfaces, implementing secure authentication and authorization systems, and
                  optimizing website performance.
                </p>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={heroImage} alt="Headshot" width={300} height={300} layout="responsive" />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,176C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Header;
