import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import DTUC from "../../public/DTUC.png";
import Cafezupas from "../../public/Cafezupas.png";
import { RxOpenInNewWindow } from "react-icons/rx";

function Projects() {
  return (
    <section id="experience" className="max-w-container max-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="Projects" titleNumber="03" />
      {/* First Project */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a href="https://dtuc.viralsolutions.com/" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={DTUC} alt="DTUCImage" />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">DrivThru Urgent Care (DTUC)</h3>
            <p className="bg-[#112249] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda ex minus nihil ea svel!
              <span className="text-textGreen">SAML Auth</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>Expressjs</li>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>MySql</li>
              <li>GCP</li>
            </ul>
            <div>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second Project */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a href="https://cafezupas.com/" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={Cafezupas} alt="CafezupasImage" />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">DrivThru Urgent Care (DTUC)</h3>
            <p className="bg-[#112249] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda ex minus nihil ea svel!
              <span className="text-textGreen">SAML Auth</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>Expressjs</li>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>MySql</li>
              <li>GCP</li>
            </ul>
            <div>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Third Project */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a href="https://dtuc.viralsolutions.com/" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={DTUC} alt="DTUCImage" />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">DrivThru Urgent Care (DTUC)</h3>
            <p className="bg-[#112249] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda ex minus nihil ea svel!
              <span className="text-textGreen">SAML Auth</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>Expressjs</li>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>MySql</li>
              <li>GCP</li>
            </ul>
            <div>
              <a className="hover:text-textGreen duration-300" href="" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
