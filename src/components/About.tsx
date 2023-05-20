import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import Profile from "../../public/Profile.png";

function About() {
  const [skills, setSkills] = useState<string[]>([
    "Javascript",
    "Reactjs",
    "Nodejs",
    "Nextjs",
    "Typescript",
    "Expressjs",
    "Antd",
    "Material-Ui",
    "Tailwind",
    "Php",
    "Wordpress",
  ]);
  return (
    <section id="about" className="max-w-container max-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="About" titleNumber={"01"} />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-1/2 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a skilled MERN Stack developer with over 1.5 years of experience in creating dynamic and responsive web
            applications. Passionate about solving problems, staying up-to-date with industry trends, and delivering
            solutions that meet the unique needs of clients. Dedicated to providing excellent customer service and
            high-quality work, with strong communication and collaboration skills. Learn More.!
          </p>
          <p>
            I am a skilled MERN Stack developer with over 1.5 years of experience in creating dynamic and responsive web
            applications.{" "}
            <span className="text-textGreen">
              Passionate about solving problems, staying up-to-date with industry trends, and delivering solutions that
              meet the unique needs of clients.
            </span>{" "}
            Dedicated to providing excellent customer service and high-quality work, with strong communication and
            collaboration skills. Learn More.!
          </p>
          <ul className="max-w-[650px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {skills.map((skill) => (
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image className="rounded-lg h-full object-cover" src={Profile} alt="ProfileImage" />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md  transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
