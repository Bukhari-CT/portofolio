import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { useState } from "react";

const About = () => {
  const [skills] = useState<string[]>([
    "Javascript",
    "Typescript",
    "Php",
    "Wordpress",
    "Reactjs",
    "Nodejs",
    "Nextjs",
    "Expressjs",
    "jest",
    "playwright",
    "Antd",
    "Material-Ui",
    "TailwindCSS",
    "Bootsrap",
    "Less",
    "Sass",
  ]);
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! I`m Faisal Bukhari, and I thrive on creating captivating
            online experiences. As a
            <span className="text-textDarkBlue">Full Stack Developer</span>, I
            bring a holistic approach to web development, marrying both
            front-end and back-end expertise. My journey in web development has
            equipped me with a unique skill set, enabling me to take your
            projects from concept to completion. With a focus on seamless user
            experiences, I`ve optimized websites for various devices and
            integrated efficient user sign-up processes.
          </p>
          <p>
            In web development, I`ve tackled the intricacies of Webpack,
            <span className="text-textDarkBlue">
              {" "}
              enhancing website performance and achieving faster loading times.
            </span>{" "}
            I`m adept at translating complex Figma designs into polished React
            applications.
          </p>
          <p>
            <span className="text-textDarkBlue">As a MERN Stack Developer</span>
            , I`ve crafted responsive web applications, optimized performance,
            and seamlessly integrated REST APIs. I`ve embraced modern front-end
            tools and agile methodologies, working collaboratively. Fast-forward
            to today, and I had the privilege of working at an advertising
            agency, a start-up,{" "}
          </p>
          <p>
            <span className="text-textDarkBlue">In WordPress</span>, I`ve honed
            my skills, transforming ideas into functional websites. From custom
            development to e-commerce solutions, I excel in incorporating
            advanced features for improved functionality.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textDarkBlue">
                  <AiFillThunderbolt />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-full ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-full h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textDarkBlue/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textDarkBlue rounded-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
