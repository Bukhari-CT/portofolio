import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont text-center font-semibold flex flex-col"
      >
        <span className="font-Sevillana">Building things for web</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark m-auto text-center font-medium"
      >
        A passionate Frontend Developer with a strong passion for building
        dynamic web applications. My journey into web development began in 2018,
        sparked by a curiosity to customize Tumblr themes. What started as
        experimenting with HTML, CSS, and JavaScript to create a custom reblog
        button soon evolved into a deep fascination with crafting experiences on
        the web.
      </motion.p>
      <a
        href="https://github.com/Bukhari-CT"
        className="flex justify-center"
        target="_blank"
      >
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
