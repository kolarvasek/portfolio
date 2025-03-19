import React from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import stravnicek from "./img/stravnicek.png";
import instalater from "./img/instalater.png";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaReact,
  FaPhp,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaPython,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiDailymotion, SiTailwindcss } from "react-icons/si";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { MdClose } from "react-icons/md";

const App = () => {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  return (
    <div className="relative min-h-screen bg-gray-100 p-0 m-0">
      {/* HEAD */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 -mt-10 min-w-screen px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full p-8">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 8 }}
            className="mb-4 flex flex-col items-center sm:items-start"
          >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center sm:text-left">
              Václav Kolář
            </h1>
            <p className="text-ms sm:text-ms text-center sm:text-left">
              Webový & Mobilní Vývojář
            </p>
            <div className="flex mt-4 space-x-4.5">
              <motion.button
                className="group relative flex items-center"
                whileHover={{ scale: 1.4 }}
              >
                <a href="https://github.com/kolarvasek" target="blank">
                  <FaGithub size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                  GitHub
                </span>
              </motion.button>
              <motion.button
                className="group relative flex items-center"
                whileHover={{ scale: 1.4 }}
              >
                <a
                  href="https://www.instagram.com/vasek._.kolar/"
                  target="blank"
                >
                  <FaInstagram size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                  Instagram
                </span>
              </motion.button>
              <motion.button
                className="group relative flex items-center"
                whileHover={{ scale: 1.4 }}
              >
                <a href="mailto:vasek.kolar435@icloud.com">
                  <FaEnvelope size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                  Email
                </span>
              </motion.button>
              <motion.button
                className="group relative flex items-center"
                whileHover={{ scale: 1.4 }}
              >
                <a href="tel:773461557">
                  <FaPhone size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                  Phone
                </span>
              </motion.button>
              <motion.button
                className="group relative flex items-center"
                whileHover={{ scale: 1.4 }}
              >
                <a href="https://www.linkedin.com/in/vasek-kolar" target="blank">
                  <FaLinkedin size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                  LinkedIn
                </span>
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
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex justify-center sm:justify-start">
              O mně
            </h2>
            <p className="leading-6 sm:leading-7.5 text-sm flex justify-center">
              Jmenuji se Václav Kolář a jsem webový a mobilní vývojář. Zaměřuji
              se na tvorbu moderních, responzivních a uživatelsky přívětivých
              webů a aplikací. Pracuji s technologiemi jako React, Flutter, PHP,
              MySQL a Tailwind. Neustále se snažím zdokonalovat a přinášet
              inovativní řešení pro své klienty i vlastní projekty.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.h2
        className="relative -top-30 flex justify-center items-center text-xl sm:text-2xl font-bold"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 30, delay: 0.2 }}
      >
        Technologie
      </motion.h2>

      {/* SKILLS */}
      <div className="-translate-y-18 flex flex-col items-center bg-gray-100 min-h-100 px-4 sm:px-8">
        <motion.div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Skill: React */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.2 }}
            >
              <FaReact size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">React</h4>
                <p className="text-sm">Frontend</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Flutter */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.5 }}
            >
              <FaFlutter size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Flutter</h4>
                <p className="text-sm">Mobile apps</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Php */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.8 }}
            >
              <FaPhp size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Php</h4>
                <p className="text-sm">Backend</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Mysql */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 1.1 }}
            >
              <FaDatabase size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Mysql</h4>
                <p className="text-sm">Database</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Tailwind */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.2 }}
            >
              <SiTailwindcss
                size={30}
                className="flex-shrink-0"
                color="white"
              />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Tailwind</h4>
                <p className="text-sm">Styling</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Css */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.5 }}
            >
              <FaCss3 size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Css</h4>
                <p className="text-sm">Styling</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Html */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 0.8 }}
            >
              <FaHtml5 size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Html</h4>
                <p className="text-sm">Frontend</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skill: Python */}
          <motion.div
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              backgroundColor: "#E5E5E5",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-gray-800 p-3 rounded-xl flex items-center space-x-4 drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 30, delay: 1.1 }}
            >
              <FaPython size={30} className="flex-shrink-0" color="white" />
              <div className="flex flex-col text-white">
                <h4 className="font-bold">Python</h4>
                <p className="text-sm">Automation</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* PROJECTS */}
      <motion.h2
        className="relative flex justify-center items-center text-xl sm:text-2xl font-bold mb-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 30, delay: 0.2 }}
      >
        Projekty
      </motion.h2>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 8 }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 py-8"
      >
        {/* Project 01 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleOpenModal1}
          className="p-6 bg-gray-800 rounded-xl cursor-pointer shadow-xl"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-2xl font-bold mb-4 text-white"
          >
            Strávníček
          </motion.h3>
          <div className="flex flex-col gap-4">
            <motion.img
              src={stravnicek}
              alt="Project 01"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, delay: 0.2 }}
            />
            <div className="flex flex-col justify-between">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, delay: 0.1 }}
                className="text-gray-300 mb-4"
              >
                Jednoduchá aplikace pro sledování a měrění stravy.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, delay: 0.3 }}
              >
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <FaReact size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">React</span>
                </div>
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <FaPhp size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">PHP</span>
                </div>
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <FaDatabase size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">MySQL</span>
                </div>
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <SiTailwindcss size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">Tailwind</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project 02 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleOpenModal2}
          className="p-6 bg-gray-800 rounded-xl cursor-pointer shadow-xl"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-2xl font-bold mb-4 text-white"
          >
            Instalatér
          </motion.h3>
          <div className="flex flex-col gap-4">
            <motion.img
              src={instalater}
              alt="Project 01"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, delay: 0.2 }}
            />
            <div className="flex flex-col justify-between">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, delay: 0.1 }}
                className="text-gray-300 mb-4"
              >
                Úvodní stránka pro instalatérskou firmu.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, delay: 0.3 }}
              >
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <FaReact size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">React</span>
                </div>
                <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <SiTailwindcss size={16} className="mr-2 text-white" />
                  <span className="text-sm text-white">Tailwind</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.h2
        className="relative flex justify-center items-center text-xl sm:text-2xl font-bold mb-8 mt-16"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 30, delay: 0.2 }}
      >
        Kontaktuj mě
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 8 }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="tel:773461557"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <div className="bg-gray-700 p-3 rounded-full">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-medium">Telefon</p>
                <span className="text-gray-300 hover:text-white">
                  +420 773 461 557
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:vasek.kolar435@icloud.com"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <div className="bg-gray-700 p-3 rounded-full">
                <FaEnvelopeOpen className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <span className="text-gray-300 hover:text-white">
                  vasek.kolar435@icloud.com
                </span>
              </div>
            </motion.a>
          </div>

          <div className="space-y-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://www.linkedin.com/in/vasek-kolar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <div className="bg-gray-700 p-3 rounded-full">
                <FaLinkedin className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <span className="text-gray-300 hover:text-white">
                  Václav Kolář
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://www.instagram.com/vasek._.kolar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <div className="bg-gray-700 p-3 rounded-full">
                <FaInstagram className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-medium">Instagram</p>
                <span className="text-gray-300 hover:text-white">
                  @vasek._.kolar
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Updated Modal */}
      <Modal
        open={openModal1}
        onClose={handleCloseModal1}
        aria-labelledby="modal-title-1"
        aria-describedby="modal-description-1"
        disableScrollLock
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "16px",
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.3,
          }}
          className="w-full max-w-[800px] mx-4"
          onClick={handleCloseModal1}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              position: "relative",
              outline: "none",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#1a1a1a",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#333",
                borderRadius: "4px",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Typography variant="h3" component="h2" gutterBottom>
                Strávníček
              </Typography>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <motion.img
                  src={stravnicek}
                  alt="Project"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                />
                <motion.div
                  className="flex flex-wrap gap-2 mt-4 justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaReact size={20} className="mr-2" />
                      <span>React</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaPhp size={20} className="mr-2" />
                      <span>PHP</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaDatabase size={20} className="mr-2" />
                      <span>MySQL</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <SiTailwindcss size={20} className="mr-2" />
                      <span>Tailwind</span>
                    </motion.div>
                  </div>

                  {/* GitHub bttn*/}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  ></motion.div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    O Projektu
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 4 }}
                    className="text-gray-300"
                  >
                    Webová aplikace pro sledování a měření stravy pomocí API,
                    která zobrazuje informace o kalorickém příjmu, makroživinách
                    a dalších nutričních hodnotách.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Funkce
                  </Typography>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Sledování kalorického příjmu</li>
                    <li>Analýza makroživin</li>
                    <li>Denní statistiky</li>
                    <li>Osobní cíle a plány</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div> {/* Left side */}
                <Button
                  variant="outlined"
                  disabled
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    borderColor: "rgba(255,255,255,0.2)",
                    cursor: "not-allowed",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.2)",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Demo nedostupné
                </Button>
              </div>
              <div className="flex gap-4"> {/* Right side */}
                <Button
                  variant="outlined"
                  component="a"
                  href="https://github.com/kolarvasek/stravnicek"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "grey.500",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </Button>
                <Button
                  onClick={handleCloseModal1}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "grey.500",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  variant="outlined"
                >
                  Zavřít
                </Button>
              </div>
            </motion.div>

            {/* close bttn */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton
                onClick={handleCloseModal1}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <MdClose size={24} />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>
      </Modal>
      {/* MODAL 02 */}
      <Modal
        open={openModal2}
        onClose={handleCloseModal2}
        aria-labelledby="modal-title-2"
        aria-describedby="modal-description-2"
        disableScrollLock
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "16px",
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.3,
          }}
          className="w-full max-w-[800px] mx-4"
          onClick={handleCloseModal2}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              position: "relative",
              outline: "none",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#1a1a1a",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#333",
                borderRadius: "4px",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Typography variant="h3" component="h2" gutterBottom>
                Instalatér
              </Typography>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <motion.img
                  src={instalater}
                  alt="Project"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                />
                <motion.div
                  className="flex flex-wrap gap-2 mt-4 justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex flex-wrap gap-2">
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaReact size={20} className="mr-2" />
                      <span>React</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center bg-gray-800 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <SiTailwindcss size={20} className="mr-2" />
                      <span>Tailwind</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    O Projektu
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 4 }}
                    className="text-gray-300"
                  >
                    Webová aplikace pro instalatérskou firmu s základními informacemi a kontakty.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Funkce
                  </Typography>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Kontakty</li>
                    <li>Služby</li>
                    <li>Základní informace</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div> {/* Left side */}
                <Button
                  variant="outlined"
                  component="a"
                  href="https://instalater-git-main-kolarvaseks-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "grey.500",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Demo
                </Button>
              </div>
              <div className="flex gap-4"> {/* Right side */}
                <Button
                  variant="outlined"
                  component="a"
                  href="https://github.com/kolarvasek/instalater"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "grey.500",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </Button>
                <Button
                  onClick={handleCloseModal2}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "grey.500",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  variant="outlined"
                >
                  Zavřít
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton
                onClick={handleCloseModal2}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <MdClose size={24} />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>
      </Modal>

      <motion.footer
        className="bg-gray-800 text-white py-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
          <motion.div
            className="flex space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/kolarvasek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="www.linkedin.com/in/vasek-kolar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/vasek._.kolar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:vasek.kolar435@icloud.com"
              className="hover:text-gray-400 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:773461557"
              className="hover:text-gray-400 transition-colors"
            >
              <FaPhone size={24} />
            </a>
          </motion.div>
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Václav Kolář. Všechna práva vyhrazena.
          </p>
        </div>
      </motion.footer>
      <Analytics />
    </div>
  );
};

export default App;
