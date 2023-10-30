import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [moreProjects, setMoreProjects] = useState([
    {
      id: 1,
      title: "Just Doing Solar",
      description:
        "Just Doing Solar offers comprehensive solar energy solutions, including installation, products, and guidance to help customers transition to sustainable and renewable energy sources.",
      live: "https://justdoingsolar.com/",
      technology: ["Wordpress", "Hello Elementor", "WPForms", "Yoast SEO"],
    },
    {
      id: 2,
      title: "Crescent Education",
      description:
        "Crescent Education is an educational platform offering a range of courses, including vocational and English language training, to enhance skills and career opportunities in Australia.",
      live: "https://crescenteducation.com.au/",
      technology: ["Wordpress", "OceanWP", "Ocean Social Sharing", "CF7"],
    },
    {
      id: 3,
      title: "AXM Human Resources",
      description:
        "AXM Human Resources is a human resources platform providing professional HR services and solutions for businesses to effectively manage their workforce and optimize human capital.",
      live: "http://axmhr.com/",
      technology: ["Wordpress", "Phlox Pro", "Stencil", "WP ULike"],
    },
    {
      id: 4,
      title: "Live Radio Player",
      description:
        "Live Radio Player provides a platform for users to access live radio streaming from various stations and genres, offering a diverse range of music and content for listeners.",
      live: "https://www.liveradioplayer.com/",
      technology: ["Wordpress", "Newspaper", "tagDiv", "WPQuads"],
    },
    {
      id: 5,
      title: "Imran & CO",
      description:
        "Imran & Co is a leading exporter of high-quality Basmati rice, known for its long, delicate grains, catering to international markets worldwide.",
      live: "http://imranandco.com/",
      technology: ["Wordpress", "Avada", "CF7"],
    },
    {
      id: 6,
      title: "WHTL Urban Radio",
      description:
        "WHTL Urban Radio is a platform for users to access live radio streaming from various stations and genres, offering a diverse range of music and content for listeners.",
      live: "https://whtlurbanradio.com/",
      technology: ["Wordpress", "Avada", "CF7"],
    },
    {
      id: 7,
      title: "Ameo Media",
      description:
        "Ameo Media is an online travel platform, likely offering information, booking services, and resources for travelers seeking various destinations and experiences.",
      live: "http://travel.ameomedia.com/",
      technology: ["Wordpress", "Astra", "Salon booking system", "To Top"],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Covid Test Report",
      description:
        "This is a website where user can get results of their covid test by loging in with there provided phone number or email",
      live: "https://app.viralsolutionsga.com/results/login",
      technology: ["React", "Node", "Antd", "Twilio"],
    },
    {
      id: 2,
      title: "Prisoners Covid Vacination Track",
      description:
        "This is a private website were Jails Officical and Covid Vacination team do tracking of covid vacination of their prisoners",
      live: "#",
      technology: ["React", "Node", "Antd", "Twilio"],
    },
    {
      id: 3,
      title: "Cohere",
      description:
        "Cohere is a coaching side where coachs have their students and clients how communicate with onsite calls with them",
      live: "#",
      technology: ["React", ".Net", "Material", "Stripe", "Less"],
    },
    {
      id: 4,
      title: "Sollabs",
      description:
        "Sollabs is a Lab Record Management System of US Based Lab that maintain the records of their testing tubes and track locations of them in trays as well",
      live: "https://sollabs.viralsolutionsga.com/login",
      technology: ["React", "Node", "Antd", "Twilio"],
    },
    {
      id: 5,
      title: "Aqua Operators",
      description:
        "Aqua Operators provides professional water and wastewater treatment services, equipment, and consulting solutions to meet diverse industrial and municipal needs.",
      live: "https://aquaoperators.com/",
      technology: ["Wordpress", "Avada", "Elementor", "CF7"],
    },
    {
      id: 6,
      title: "Drymax",
      description:
        "Drymax offers premium moisture control solutions, including desiccants and humidity indicators, to protect products from moisture damage.",
      live: "https://drymax.com.au/",
      technology: ["Wordpress", "Clenix", "Gutenburg", "Layer Slider"],
    },
  ]);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {projects.map((project) => (
          <ArchiveCard
            key={project.id}
            title={project.title}
            des={project.description}
            listItem={project.technology}
            link={project.live}
          />
        ))}
      </div>
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          {moreProjects.map((project) => (
            <ArchiveCard
              key={project.id}
              title={project.title}
              des={project.description}
              listItem={project.technology}
              link={project.live}
            />
          ))}
        </div>
      )}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="OREBI e-commerce Shopping store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://orebishopping.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://my-blog-delta-eight.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              />
            </motion.div>
          </>
        )}
      </div> */}
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
