import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

interface Props {
  title: string;
  techStackList: string[];
  description: string;
  link: string;
}

function ArchiveCard({ title, techStackList, description, link }: Props) {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
          <p className="text-sm mt-3">{description}</p>
          <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
            {techStackList.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default ArchiveCard;
