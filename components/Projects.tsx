import {
  cafezupas,
  amazonImg,
  viralSolutions,
  urgentcare,
  noorShop,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://cafezupas.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cafezupas}
                alt="cafezupas"
              />
              <div className="absolute w-full h-full bg-textDarkBlue/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textDarkBlue text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cafezupas</h3>
            </div>
            <p className="bg-[#dfd9de] text-sm md:text-base p-2 md:p-6 rounded-md">
              CafeZupas is sophisticated restaurant portal for menus, locations,
              seamless online orders, and convenient{" "}
              <span className="text-textDarkBlue">social media logins</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Google Auth</li>
              <li>Facebook Auth</li>
              <li>Google Map</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://github.com/Bukhari-CT"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://cafezupas.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://viralsolutionsga.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={viralSolutions}
                alt="viralSolutions"
              />
              <div className="absolute w-full h-full bg-textDarkBlue/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textDarkBlue text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Viral Solutions</h3>
            </div>
            <p className="text-sm md:text-base bg-[#dfd9de] p-2 md:p-6 rounded-md xl:-mr-16">
              Viral Solutions is a company that do Covid testings of and
              generate there reports and provide their reports online to their
              clients on their different portals website. Their users can login
              to
              <span className="text-textDarkBlue">
                {" "}
                Portals and get their results.
              </span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Node</li>
              <li>Typescript</li>
              <li>React Forms</li>
              <li>Ant Design</li>
              <li>Less</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://github.com/Bukhari-CT"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://viralsolutionsga.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://drivethruurgentcare.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={urgentcare}
                alt="urgentcare"
              />
              <div className="absolute w-full h-full bg-textDarkBlue/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textDarkBlue text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">DriveThru Urgent Care</h3>
            </div>
            <p className="text-sm md:text-base bg-[#dfd9de] p-2 md:p-6 rounded-md">
              DriveThru Urgent Care provides check-up facility on DriveThru
              patients can book their schedule online through portal and can
              visit the{" "}
              <span className="text-textDarkBlue">DriveThru for check-up.</span>{" "}
              Patient can check results from the portal{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Node</li>
              <li>Ant Design</li>
              <li>Less</li>
              <li>SAML</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://github.com/Bukhari-CT"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textDarkBlue duration-300"
                href="https://drivethruurgentcare.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
