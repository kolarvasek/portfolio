import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { ArrowRight, Browser, Code, Palette, Phone } from "phosphor-react";
import {
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiFlutter,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { BiSolidEnvelope } from "react-icons/bi";

import stravnicek from "./img/stravnicek.png";
import instalater from "./img/instalater.png";

const projects = [
  {
    id: 1,
    title: "Strávníček",
    img: stravnicek,
    desc: "Jednoduchá aplikace pro sledování stravy.",
    link: "https://github.com/kolarvasek/stravnicek",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    id: 2,
    title: "Instalatér",
    img: instalater,
    desc: "Landing page pro instalatérskou firmu.",
    link: "https://github.com/kolarvasek/instalater",
    tech: ["React", "Tailwind"],
  },
];

export default function App() {
  const [openProj, setOpenProj] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="font-poppins text-slate-800 antialiased">
      <Hero />
      <Services />
      <Projects openProj={openProj} setOpenProj={setOpenProj} />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

/* Hero Section */
const Hero = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-blue-400 text-white px-4 sm:px-6 md:px-16"
  >
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 text-center"
    >
      Ahoj, jsem Václav Kolář
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-base sm:text-lg md:text-2xl max-w-xl text-center mb-8"
    >
      Vytvářím moderní webová a mobilní řešení, která pomáhají firmám růst.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <motion.a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ x: 6 }}
        className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg"
      >
        Spojte se se mnou
        <ArrowRight size={20} weight="bold" className="ml-2" />
      </motion.a>
      <motion.a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full"
      >
        Zobrazit služby
      </motion.a>
    </motion.div>
    <svg
      className="absolute bottom-0 left-0 w-full h-24 text-white rotate-180"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.14,22,103.33,29.17,158.73,17.4C261.5,49,341.85,7.18,432.79,4.93c129.22-3.31,214.14,62.65,342.75,72.8C857,87.36,934.38,28,1014.07,15.06c66.07-10.4,133.21,6.7,186.13,39.89V0Z"
        fill="currentColor"
      />
    </svg>
  </section>
);

/* Services Section */
const Services = () => (
  <section id="services" className="bg-white py-20 px-6 md:px-16 lg:px-32">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold text-center mb-12 text-indigo-700"
    >
      Moje služby
    </motion.h2>
    <div className="grid sm:grid-cols-3 gap-8">
      {[
        {
          icon: <Browser size={48} className="text-blue-500" />,
          title: "Frontend Development",
          bullets: [
            "Vytvářím moderní a efektivní webové aplikace na míru",
            "Optimalizuji vzhled i funkčnost pro všechna zařízení",
            "Zaručuji rychlé načítání a bezproblémový provoz",
          ],
        },
        {
          icon: <Palette size={48} className="text-green-500" />,
          title: "Strategická rozhraní a uživatelský zážitek",
          bullets: [
            "Přehledný a funkční design, který zákazníci ocení",
            "Každý detail má svůj účel – žádné zbytečnosti",
            "Navrhuji rozhraní, která vedou uživatele k akci",
          ],
        },
        {
          icon: <Code size={48} className="text-purple-500" />,
          title: "Podpora pro váš byznys",
          bullets: [
            "Zajistím technické i obsahové SEO, aby vás lidé snadno našli",
            "Web připravím tak, aby mohl růst s vámi",
            "Navrhnu digitální řešení podle vašich cílů",
          ],
        },
      ].map((s, i) => (
        <motion.div
          key={i}
          whileHover={{
            y: -6,
            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-indigo-50 p-8 rounded-xl text-center"
        >
          <div className="mb-4 inline-block">{s.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
          <ul className="text-slate-600 space-y-1">
            {s.bullets.map((b, j) => (
              <li key={j}>• {b}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
    <div className="flex justify-center mt-12">
    <motion.a
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" })
      }}
      whileHover={{ x: 6 }}
      className="inline-flex items-center bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg"
    >
      Spojte se se mnou
      <ArrowRight size={20} weight="bold" className="ml-2" />
    </motion.a>
  </div>
</section>
);

/* Projects Section */
const Projects = ({ openProj, setOpenProj }) => (
  <section
    id="projects"
    className="relative bg-gray-200 py-20 px-6 md:px-16 lg:px-32"
  >
    <svg
      className="absolute top-0 left-0 w-full h-24 text-white"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.14,22,103.33,29.17,158.73,17.4C261.5,49,341.85,7.18,432.79,4.93c129.22-3.31,214.14,62.65,342.75,72.8C857,87.36,934.38,28,1014.07,15.06c66.07-10.4,133.21,6.7,186.13,39.89V0Z"
        fill="currentColor"
      />
    </svg>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold text-center mb-12 text-indigo-700"
    >
      Portfolio
    </motion.h2>
    {projects.length === 0 ? (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center p-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl"
      >
        Buďte první, kdo uvidí mou práci ➔{" "}
        <a href="#contact" className="text-indigo-600 font-semibold underline">
          Kontaktujte mě
        </a>
      </motion.div>
    ) : (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setOpenProj(p.id)}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                {p.title}
              </h3>
              <p className="text-slate-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )}
    <AnimatePresence>
      {openProj && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-10"
          onClick={() => setOpenProj(null)}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl max-w-2xl w-full overflow-hidden p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenProj(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <img
              src={projects.find((p) => p.id === openProj).img}
              alt={projects.find((p) => p.id === openProj).title}
              className="w-full max-h-64 sm:max-h-80 object-cover rounded-lg mx-auto"
            />

            <div className="mt-6 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {projects.find((p) => p.id === openProj).title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {projects.find((p) => p.id === openProj).desc}
              </p>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Technologie:</h4>
                <div className="flex flex-wrap gap-3">
                  {projects
                    .find((p) => p.id === openProj)
                    .tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-sm px-4 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                </div>
              </div>

              <a
                href={projects.find((p) => p.id === openProj).link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
              >
                Zobrazit na GitHubu
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <svg
      className="absolute bottom-0 left-0 w-full h-24 text-white rotate-180 z-0"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.14,22,103.33,29.17,158.73,17.4C261.5,49,341.85,7.18,432.79,4.93
        c129.22-3.31,214.14,62.65,342.75,72.8C857,87.36,934.38,28,1014.07,15.06
        c66.07-10.4,133.21,6.7,186.13,39.89V0Z"
        fill="currentColor"
      />
    </svg>
  </section>
);

/* Contact Section */
const Contact = () => (
  <section
    id="contact"
    className="relative py-20 bg-white px-6 md:px-16 lg:px-32"
  >
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold text-primary text-center mb-8 text-indigo-700"
    >
      Spojte se se mnou
    </motion.h2>
    <div className="flex flex-col items-center space-y-4">
      <motion.a
        href="mailto:vasek.kolar435@icloud.com"
        whileHover={{ scale: 1.05 }}
        className="text-primary font-medium hover:underline"
      >
        Email: vasek.kolar435@icloud.com
      </motion.a>
      <motion.a
        href="tel:+420773461557"
        whileHover={{ scale: 1.05 }}
        className="text-primary font-medium hover:underline"
      >
        Telefon: +420 773 461 557
      </motion.a>
      <motion.a
        href="https://www.instagram.com/vasek._.kolar"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="text-primary font-medium hover:underline"
      >
        Instagram: @vasek._.kolar
      </motion.a>
      <div className="flex space-x-6 mt-4">
        <motion.a
          href="https://www.instagram.com/vasek._.kolar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <SiInstagram size={28} weight="duotone" className="text-primary" />
        </motion.a>
        <motion.a
          href="https://github.com/kolarvasek"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <SiGithub size={28} weight="duotone" className="text-primary" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/vasek-kolar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <SiLinkedin size={28} weight="duotone" className="text-primary" />
        </motion.a>
      </div>
    </div>
  </section>
);

/* Footer */
const Footer = () => (
  <footer className="relative py-12 bg-slate-800 text-white mt-10">
    <div className="absolute -top-24 left-0 w-full h-24 text-slate-800 rotate-180 z-0">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0V46.29c47.14,22,103.33,29.17,158.73,17.4C261.5,49,341.85,7.18,432.79,4.93
           c129.22-3.31,214.14,62.65,342.75,72.8C857,87.36,934.38,28,1014.07,15.06
           c66.07-10.4,133.21,6.7,186.13,39.89V0Z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6 lg:px-32">
      <p>© {new Date().getFullYear()} Václav Kolář. All rights reserved.</p>
      <div className="flex justify-center items-center">
        <motion.a
          href="https://github.com/kolarvasek"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="mx-2"
        >
          <SiGithub size={24} weight="duotone" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/vasek-kolar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="mx-2"
        >
          <SiLinkedin size={24} weight="duotone" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/vasek._.kolar/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="mx-2"
        >
          <SiInstagram size={24} weight="duotone" />
        </motion.a>
        <motion.a
          href="mailto:vasek.kolar435@icloud.com"
          whileHover={{ scale: 1.1 }}
          className="mx-2"
        >
          <BiSolidEnvelope size={24} weight="duotone" />
        </motion.a>
        <motion.a
          href="tel:+420773461557"
          whileHover={{ scale: 1.1 }}
          className="mx-2"
        >
          <Phone size={24} weight="duotone" />
        </motion.a>
      </div>
    </div>
  </footer>
);
