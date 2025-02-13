import React from "react";
import { color, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaReact,
  FaPhp,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 p-0 m-0">
      {/* HEAD */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 -mt-10 min-w-screen">
        <div className="grid grid-cols-1 gap-4 max-w-4xl w-full p-8 md:grid-cols-2">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 8 }}
            className="mb-4"
          >
            <h1 className="text-4xl font-bold mb-2">Vasek Kolar</h1>
            <p className="text-lg">Software engineer</p>
            <div className="flex mt-4 space-x-4.5">
              <motion.button whileHover={{ scale: 1.3 }}>
                <a href="https://github.com/kolarvasek">
                  <FaGithub size={24} />
                </a>
              </motion.button>
              <motion.button whileHover={{ scale: 1.3 }}>
                <a href="tel:773461557">
                  <FaPhone size={24} />
                </a>
              </motion.button>
              <motion.button whileHover={{ scale: 1.3 }}>
                <a href="https://www.instagram.com/vasek._.kolar/">
                  <FaInstagram size={24} />
                </a>
              </motion.button>
              <motion.button whileHover={{ scale: 1.3 }}>
                <a href="mailto:vasek.kolar435@icloud.com">
                  <FaEnvelope size={24} />
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="p-6 md:mt-[-20px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              delay: 0.2,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="leading-7.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, incidunt vitae. Mollitia architecto eveniet deleniti
              accusantium quasi, blanditiis nihil temporibus illo eius
              cupiditate ipsum voluptatem autem ex et molestias tempore?
            </p>
          </motion.div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="-translate-y-1 flex justify-center bg-gray-100 min-h-100">
        <motion.div
          className="md:w-4xl gap-10 bg-gray-100 grid grid-cols-5 grid-rows-2 items-center justify-center h-5"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 30 }}
        >
          <motion.div
            className="bg-black p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#E0E0E0",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <FaReact size={30} className="flex-shrink-0" color="white" />
            <div className="flex flex-col text-white">
              <h4 className="font-bold">React</h4>
              <p className="text-sm">Frontend</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-black p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#E0E0E0",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <FaFlutter size={30} className="flex-shrink-0" color="white" />
            <div className="flex flex-col text-white">
              <h4 className="font-bold">Flutter</h4>
              <p className="text-sm">Mobile app</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-black p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#242424",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <FaPhp size={30} className="flex-shrink-0" color="white" />
            <div className="flex flex-col text-white">
              <h4 className="font-bold">Php</h4>
              <p className="text-sm">Backend</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-black p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#525252",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <FaDatabase size={30} className="flex-shrink-0" color="white" />
            <div className="flex flex-col text-white">
              <h4 className="font-bold">Mysql</h4>
              <p className="text-sm">Database</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-black p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#455269",
              transition: { ease: "easeInOut", duration: 0.4 },
            }}
          >
            <FaHtml5 size={30} className="flex-shrink-0" color="white" />
            <div className="flex flex-col text-white">
              <h4 className="font-bold">Html</h4>
              <p className="text-sm">Frontend</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* PROJECTS */}
    </div>
  );
};

export default App;
