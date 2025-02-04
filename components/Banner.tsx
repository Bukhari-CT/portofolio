import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-center text-textDarkBlue"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont text-center font-semibold flex flex-col"
      >
        <span className="font-Sevillana">Building things for web</span>
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark m-auto text-center font-medium"
      >
        Welcome to my portfolio! I`m Faisal Bukhari, a passionate Full Stack
        Developer with a deep-rooted love for bringing web applications to life.
        My journey into the world of web development began in 2018, and it all
        started with the curiosity of customizing Tumblr themes. Little did I
        know that tinkering with HTML, CSS and Javascript to create a custom
        reblog button would ignite a lifelong fascination with crafting things
        on the internet!{" "}
      </motion.p>
      <a href="https://github.com/Bukhari-CT" className="flex justify-center" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-bodyFont border border-textDarkBlue rounded-md text-textDarkBlue tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
