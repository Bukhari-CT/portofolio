import { useState } from "react";
import SectionTitle from "./SectionTitle";
import WorkList from "./WorkList";
import exp from "constants";

function Experiance() {
  const [experiences, setExperiences] = useState<any[]>([
    {
      companyName: "Carbonteq",
      startingMonthAndYear: "Nov 2021",
      endingMonthAndYear: null,
      position: "MERN Stack Developer",
      isActive: true,
      responsibilities: [
        "Developed over 4 responsive and mobile-friendly web applications using React, Redux, and Ant design.",
        "Optimized web app performance by up to 30% by implementing code splitting, lazy loading, and modification techniques.",
        "Developed and maintained web applications using modern front-end development tools like Webpack, Vite, and Babel.",
        "Utilized agile methodologies to collaborate with a team of 10 members.",
        "Successfully planned and executed a DTUC project from inception to delivery, taking it from concept to completion.",
        "Successfully incorporated more than 100 REST APIs into the front end of the application.",
        "Utilized custom hooks during development to improve code organization and cleanliness.",
        "Managed deployment of multiple project releases.",
        "Liasoned effectively with Viral Solution CxO management to ensure timely deliverance of Front-End related tasks.",
      ],
    },
    {
      companyName: "Casual Gaming",
      startingMonthAndYear: "Dec 2019",
      endingMonthAndYear: "Jul 2020",
      position: "Game Developer",
      isActive: false,
      responsibilities: [
        "Learned building optimized terrains.",
        "Developed & optimized menu control screens for 3+ apps.",
        "Developed a simulation game.",
        "Developed an Endless Runner (FYP).",
      ],
    },
    {
      companyName: "Pineal",
      startingMonthAndYear: "Dec 2019",
      endingMonthAndYear: "Jul 2020",
      position: "Web Developer",
      isActive: false,
      responsibilities: [
        "Converted 3 Mockups into HTML, CSS & Javascript.",
        "Developed 13+ WordPress websites.",
        "Conducted WordPress Custom Development for 3+ websites.",
      ],
    },
  ]);

  const onChangeTab = (clickedList: string) => {
    const newExperinaceList = experiences.map((experience) => {
      if (experience.companyName === clickedList) {
        experience.isActive = true;
      } else {
        experience.isActive = false;
      }
      return experience;
    });
    setExperiences(newExperinaceList);
  };

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Where I have worked" titleNumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {experiences.map((experience) => (
            <li
              onClick={() => onChangeTab(experience.companyName)}
              className={`border-l-2 ${
                experience?.isActive ? "border-l-textGreen" : "border-l-hoverColor"
              } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
            >
              {experience?.companyName}
            </li>
          ))}
        </ul>
        {experiences.map((experience) => (
          <WorkList experience={...experience} />
        ))}
      </div>
    </section>
  );
}

export default Experiance;
