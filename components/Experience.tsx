import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";

const Experience = () => {
  const [experiences, setExperiances] = useState<any>([
    {
      id: 1,
      title: "Front-End Engineer",
      company: "Devsarch",
      timePeriod: "Nov 2023 - Present",
      responsibilites: [
        "Created test cases using Jest, boosting coverage from 7% to 50%.",
        "Ensured website responsiveness across all devices.",
        "Implemented charts for database details presentation.",
        "Resolved bugs to enhance product stability.",
        "Utilized TypeScript classes effectively.",
        "Developed React presentational components.",
        "Crafted over 10 custom hooks for API calls.",
        "Contributed to Laravel projects with HTML, CSS, and Tailwind CSS.",
      ],
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "Nodlays",
      timePeriod: "June 2023 - Oct 2023",
      responsibilites: [
        "Implemented responsive web design to ensure websites function seamlessly across various devices and screen sizes.",
        "Integrated E-Sign registration, optimizing the user sign-up process for efficiency and user experience.",
        "Utilized a WYSIWYG editor, simplifying post writing and facilitating easy publishing.",
        "Resolved Webpack issues, resulting in a 20% improvement in website performance and a 30% reduction in loading times.",
        "Translated intricate Figma designs into polished and consistent React applications, ensuring design fidelity and functionality.",
        "Conducted regular code reviews to maintain code quality and consistency, adhering to best practices.",
        "Monitored website performance, identifying and rectifying performance bottlenecks, leading to a 15% increase in user satisfaction.",
      ],
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "Carbonteq",
      timePeriod: "November 2021 - June 2023",
      responsibilites: [
        "Developed over 7+ responsive and mobile-friendly web applications using React, Redux, and Ant design.",
        "Optimized web app performance by up to 30% by implementing code splitting, lazy loading, and modification techniques.",
        "Developed and maintained web applications using modern front-end development tools like Webpack, Vite, and Babel.",
        "Utilized agile methodologies to collaborate with a team of 10 members.",
        "Successfully planned and executed a project from inception to delivery, taking it from concept to completion.",
        "Successfully incorporated more than 100 REST APIs into the front end of the application.",
        "Utilized custom hooks during development to improve code organization and cleanliness.",
        "Managed deployment of multiple project releases.",
        "Effectively communicated with CTO of Viral Solution, utilizing active listening and cultural sensitivity.",
      ],
    },
    {
      id: 4,
      title: "Game Developer",
      company: "Casual Gaming Studio",
      timePeriod: "Decmeber 2019 - May 2020",
      responsibilites: [
        "Mastered the art of building optimized terrains for visually stunning and smooth gaming experiences.",
        "Crafted intuitive menu controls to enhance user navigation and interaction.",
        "Successfully created engaging simulation games for immersive virtual experiences.",
        "Utilized 3D modeling and animation to bring in-game elements to life.",
        "Developed games compatible across multiple platforms for broader accessibility.",
        "Conducted rigorous testing and troubleshooting to ensure a seamless gameplay experience.",
        "Collaborated with cross-functional teams to deliver innovative gaming experiences.",
      ],
    },
    {
      id: 5,
      title: "Wordpress Web Developer",
      company: "Pineal",
      timePeriod: "July 2019 - November 2019",
      responsibilites: [
        "Converted Mockups into pixel-perfect HTML, CSS, and JavaScript for seamless web rendering.",
        "Successfully developed and launched 13-15 WordPress websites, ensuring both functionality and aesthetics met client expectations.",
        "Engaged in WordPress custom development to meet specific client requirements and enhance website capabilities.",
        "Implemented responsive design techniques for optimal performance on various devices and screen sizes.",
        "Collaborated with design and content teams to bring client visions to life and create engaging online experiences.",
        "Regularly updated and maintained websites, ensuring they remain secure, functional, and up-to-date.",
        "Provided clients with training and support for efficient content management and website administration.",
      ],
    },
    {
      id: 6,
      title: "Web Developer",
      company: "Fiver",
      timePeriod: "July 2018 - Persent",
      responsibilites: [
        "Customized 25+ WordPress sites to meet client needs.",
        "Developed e-commerce solutions for 5+ stores, aligning with client specifications.",
        "Enhanced forms with advanced features for improved user experience.",
        "Collaborated with clients to understand project goals.",
        "Boosted SEO, resulting in a 20% increase in organic traffic.",
        "Ensured site security through regular maintenance and updates.",
        "Empowered clients with training for effective site management.",
      ],
    },
  ]);

  const [selectedExperiance, setSelectedExperiance] = useState<any>(
    experiences[0]
  );

  const [workReactbd] = useState(true);

  const onClickExperiance = (id: number) => {
    const matchedExperiance = experiences.find(
      (experience: any) => experience.id === id
    );
    if (matchedExperiance) {
      setSelectedExperiance({});
      setTimeout(() => {
        setSelectedExperiance(matchedExperiance);
      }, 200);
    }
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experiance" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {experiences.map((experiance: any) => (
            <li
              key={experiance.id}
              onClick={() => onClickExperiance(experiance.id)}
              className={`${
                selectedExperiance.id === experiance.id
                  ? "border-l-textDarkBlue text-textDarkBlue"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#dfd9de] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              {experiance.company}
            </li>
          ))}
        </ul>
        {workReactbd && <ReactBD experiance={selectedExperiance} />}
      </div>
    </section>
  );
};

export default Experience;
