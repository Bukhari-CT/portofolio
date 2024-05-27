import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/Bukhari-CT" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textDarkBlue text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textDarkBlue cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/faisal-bukhari-101/" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textDarkBlue text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textDarkBlue cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://www.fiverr.com/faisalbukhari" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textDarkBlue text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textDarkBlue cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandFiverr />
        </span>
      </a>
      <a href="https://www.upwork.com/freelancers/faisalb21" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textDarkBlue text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textDarkBlue cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandUpwork />
        </span>
      </a>
    </div>
  );
};

export default Footer;
