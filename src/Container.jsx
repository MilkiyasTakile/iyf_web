import { motion } from "framer-motion";
import l1 from "./assets/l1.png";
import l2 from "./assets/l2.png";
import leadershipc1 from "./assets/leadershipc1.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const bounceVariants = {
  hidden: { y: 0 },
  visible: { y: [0, -10, 0], transition: { duration: 1, repeat: Infinity } },
};

function Container() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative container mx-auto max-w-screen-lg p-6 md:p-12 lg:p-25 bg-gradient-to-r from-blue-400 to-emerald-400 text-center rounded-4xl"
    >
      {/* Animated Images */}
      <motion.img
        src={l1}
        alt="logo"
        className="absolute top-10 left-0 w-16 md:w-24 lg:w-30"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.img
        src={leadershipc1}
        alt="logo"
        className="absolute top-10 right-0 w-16 md:w-24 lg:w-30"
        whileHover={{ scale: 1.2, rotate: -10 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Heading */}
      <motion.h2
        variants={itemVariants}
        className="font-serif text-3xl md:text-5xl text-shadow-blue-950 mt-5 mx-5"
      >
        Shaping Tomorrow’s Leaders, Today
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        variants={itemVariants}
        className="m-7 mx-8 text-lg md:text-2xl text-white"
      >
        The International Youth Foundation (IYF) is committed to equipping young people with the skills, resources, and opportunities needed to thrive in a rapidly changing world.
      </motion.p>

      {/* Animated Footer Images */}
      <motion.img
        src={l2}
        alt="logo"
        className="absolute bottom-5 left-0 w-16 md:w-24 lg:w-30"
        variants={bounceVariants}
        initial="hidden"
        animate="visible"
      />
      
      <motion.img
        src={l2}
        alt="logo"
        className="absolute bottom-5 right-0 w-16 md:w-24 lg:w-30"
        variants={bounceVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Animated Button */}
      <motion.button
        variants={itemVariants}
        className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

export default Container;
