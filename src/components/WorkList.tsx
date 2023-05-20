import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface Props {
  experience: any;
}

function WorkList({ experience }: Props) {
  const responsibilities = [
    "Developed over 4 responsive and mobile-friendly web applications using React, Redux, and Ant design.",
    "Optimized web app performance by up to 30% by implementing code splitting, lazy loading, and modification techniques.",
    "Developed and maintained web applications using modern front-end development tools like Webpack, Vite, and Babel.",
    "Utilized agile methodologies to collaborate with a team of 10 members.",
    "Successfully planned and executed a DTUC project from inception to delivery, taking it from concept to completion.",
    "Successfully incorporated more than 100 REST APIs into the front end of the application.",
    "Utilized custom hooks during development to improve code organization and cleanliness.",
    "Managed deployment of multiple project releases.",
    "Liasoned effectively with Viral Solution CxO management to ensure timely deliverance of Front-End related tasks.",
  ];
  if (experience.isActive) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: 0 }} className="w-full">
        <h3>{experience.position}</h3>
        <span className="text-textGreen tracking-wide">@{experience.companyName}</span>
        <p className="text-sm mt-1 font-medium text-textDark">
          {experience.startingMonthAndYear} -{" "}
          {experience.endingMonthAndYear ? experience.endingMonthAndYear : "Present"}
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {experience.responsibilities.map((responsibility: any) => (
            <li className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>
              {responsibility}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  } else {
    return <></>;
  }
}

export default WorkList;
