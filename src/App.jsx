import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { 
  ArrowRight, 
  Browser, 
  Code, 
  Palette, 
  Phone, 
  X,
  Star
} from "phosphor-react";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { BiSolidEnvelope } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import project images
import barber from "./img/barber.png";
import revize from './img/revize.png';
import cas from "./img/cas.png";
import homepage from "./img/homepage.png";
import admin from "./img/admin.png";

// Import BarberOffer component
import BarberOffer from "./BarberOffer";

// Project data with screenshots for image slider
const projects = [
  {
    id: 1,
    title: "Barbershop",
    img: barber,
    desc: "Stylová webová prezentace pro moderní barbershop. Rychlá, responzivní a s plynulou animací.",
    link: "https://barber-v2-nine.vercel.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    screenshots: [barber], // Fallback to single image
  },
  {
    id: 2,
    title: "Kompletní web pro barbershop",
    img: homepage,
    desc: "Komplexní webová prezentace pro moderní barbershop zahrnující rezervační systém, nabídku služeb, prezentaci holičů a přehlednou administraci. Postaveno na Next.js a Supabase pro rychlý a plynulý uživatelský zážitek.",
    link: "https://barber-v2-bexqqthch-kolarvaseks-projects.vercel.app/",
    tech: ["Next.js", "React", "Supabase", "Framer Motion", "CSS"],
    screenshots: [revize, cas, homepage, admin],
  },
];

// Image Slider Component
const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    console.log(`Image slider: Current index changed to ${currentIndex}`);
  }, [currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative  h-96 sm:h-[28rem] md:h-[32rem] overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center m-0 p-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-full h-auto w-auto object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/barber-offer" element={<BarberOffer />} />
      </Routes>
    </Router>
  );
}

function Portfolio() {
  const [openProj, setOpenProj] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Václav Kolář — Moderní Web & Mobilní Vývojář | Profesionální řešení na míru</title>
        <meta
          name="description"
          content="Václav Kolář - profesionální webový a mobilní vývojář. Vytvářím moderní webové aplikace, e-shopy a mobilní řešení na míru. React, Next.js, Node.js. Kontaktujte mě pro bezplatnou konzultaci."
        />
        <meta name="keywords" content="webový vývojář, mobilní aplikace, React, Next.js, JavaScript, TypeScript, frontend, backend, full-stack, Praha, Česko" />
        <meta name="author" content="Václav Kolář" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vasek-kolar-portfolio.vercel.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Václav Kolář — Moderní Web & Mobilní Vývojář | Profesionální řešení na míru" />
        <meta
          property="og:description"
          content="Václav Kolář - profesionální webový a mobilní vývojář. Vytvářím moderní webové aplikace, e-shopy a mobilní řešení na míru. React, Next.js, Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vasek-kolar-portfolio.vercel.app" />
        <meta property="og:image" content="https://vasek-kolar-portfolio.vercel.app/og-image.jpg" />
        <meta property="og:site_name" content="Václav Kolář Portfolio" />
        <meta property="og:locale" content="cs_CZ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Václav Kolář — Moderní Web & Mobilní Vývojář" />
        <meta
          name="twitter:description"
          content="Profesionální webový a mobilní vývojář. Vytvářím moderní řešení na míru s React, Next.js a Node.js."
        />
        <meta name="twitter:image" content="https://vasek-kolar-portfolio.vercel.app/twitter-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/portfolio.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>

      <div className="font-poppins antialiased bg-white">
        <Hero />
        <Services />
        <Projects openProj={openProj} setOpenProj={setOpenProj} />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

/* Hero Section */
const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight mb-6 text-center"
      >
        Ahoj, jsem{" "}
        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
          <a
            href="https://www.instagram.com/vasek._.kolar/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus-visible:outline-none"
          >
            Václav Kolář
          </a>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg sm:text-xl md:text-2xl max-w-2xl text-center mb-12 text-white/90 leading-relaxed"
      >
        Vytvářím moderní webová a mobilní řešení, která pomáhají firmám růst a
        dosahovat jejich cílů.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.button
          onClick={handleContactClick}
          whileHover={{ scale: 1.05, x: 6 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full shadow-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Spojte se se mnou
          <ArrowRight size={24} weight="bold" className="ml-2" />
        </motion.button>

        <motion.button
          onClick={handleServicesClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
        >
          Zobrazit služby
        </motion.button>
      </motion.div>

      {/* Decorative wave */}
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
};

/* Services Section */
const Services = () => {
  const services = [
    {
      icon: <Browser size={56} className="text-blue-500" />,
      title: "Frontend Development",
      description: "Vytvářím moderní a efektivní webové aplikace na míru s nejnovějšími technologiemi.",
      bullets: [
        "React, Next.js, Vue.js aplikace",
        "Responzivní design pro všechna zařízení",
        "Optimalizace výkonu a SEO",
        "Moderní UI/UX principy"
      ],
    },
    {
      icon: <Palette size={56} className="text-green-500" />,
      title: "UI/UX Design",
      description: "Strategické navrhování rozhraní, která uživatelé milují používat.",
      bullets: [
        "Uživatelsky přívětivé rozhraní",
        "Design systém a konzistence",
        "Prototypování a testování",
        "Přístupnost a usability"
      ],
    },
    {
      icon: <Code size={56} className="text-purple-500" />,
      title: "Full-Stack Solutions",
      description: "Kompletní digitální řešení od databází až po uživatelské rozhraní.",
      bullets: [
        "Databáze a API integrace",
        "Cloud deployment a hosting",
        "Bezpečnost a autentifikace",
        "Škálovatelnost a udržovatelnost"
      ],
    },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 px-6 md:px-16 lg:px-32 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Moje služby
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-600"
        >
          Poskytuji komplexní digitální řešení, která pomáhají firmám růst a dosahovat jejich cílů.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="p-8 rounded-2xl text-center transition-all duration-300 bg-gray-50 hover:bg-white border border-gray-100"
            >
              <motion.div 
                className="mb-6 inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              
              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>
              
              <ul className="space-y-2 text-left text-gray-600">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05, x: 6 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Spojte se se mnou
            <ArrowRight size={24} weight="bold" className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Barber Offer CTA */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, x: 6 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/barber-offer"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:outline-none"
            >
              <Star size={24} weight="fill" className="mr-2" />
              Speciální nabídka pro barbershopy
              <ArrowRight size={24} weight="bold" className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* Projects Section */
const Projects = ({ openProj, setOpenProj }) => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gray-100"
    >
      {/* Decorative wave */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-600"
        >
          Prohlédněte si mé nejnovější projekty a zjistěte, jak mohu pomoci vašemu byznysu.
        </motion.p>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-16 rounded-2xl bg-white shadow-xl"
          >
            <p className="text-xl mb-4 text-gray-600">
              Buďte první, kdo uvidí mou práci
            </p>
            <a 
              href="#contact" 
              className="text-indigo-600 font-semibold underline hover:text-indigo-700 transition-colors"
            >
              Kontaktujte mě
            </a>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 bg-white border border-gray-100"
                onClick={() => setOpenProj(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-medium">Klikněte pro zobrazení</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Modal with Image Slider */}
      <AnimatePresence>
        {openProj && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setOpenProj(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-6xl w-full max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl bg-white border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenProj(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                aria-label="Zavřít modal"
              >
                <X size={24} />
              </button>

              {(() => {
                const project = projects.find((p) => p.id === openProj);
                return (
                  <>
                    {/* Image Slider */}
                    <div className="p-4 sm:p-6">
                      <ImageSlider 
                        images={project.screenshots || [project.img]} 
                        title={project.title}
                      />
                    </div>

                    {/* Project Details */}
                    <div className="px-4 sm:px-6 pb-6 sm:pb-8">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg leading-relaxed mb-8 text-gray-700"
                      >
                        {project.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                      >
                        <h4 className="font-semibold mb-4 text-gray-900">
                          Použité technologie:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-sm px-4 py-2 rounded-full font-medium bg-gray-100 text-gray-800 border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:outline-none"
                      >
                        Zobrazit projekt
                        <ArrowRight size={20} className="ml-2" />
                      </motion.a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom decorative wave */}
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
};

/* Contact Section */
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Spojte se se mnou
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600"
        >
          Jsem Václav Kolář, vývojář, který vytváří čisté a efektivní aplikace přesně podle vašich potřeb. 
          Spolupracuji s klienty transparentně a dodávám řešení, která skutečně posouvají jejich byznys.
        </motion.p>
        
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="mailto:vasek.kolar435@icloud.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-semibold hover:text-indigo-600 transition-colors text-gray-900 focus:outline-none focus-visible:outline-none"
          >
            vasek.kolar435@icloud.com
          </motion.a>

          <motion.a
            href="tel:+420773461557"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-semibold hover:text-indigo-600 transition-colors text-gray-900 focus:outline-none focus-visible:outline-none"
          >
            +420 773 461 557
          </motion.a>
          
          <motion.div 
            className="flex space-x-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/kolarvasek"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus-visible:outline-none"
            >
              <SiGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vasek-kolar"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus-visible:outline-none"
            >
              <SiLinkedin size={32} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/vasek._.kolar"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus-visible:outline-none"
            >
              <SiInstagram size={32} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* Footer */
const Footer = () => {
  return (
    <footer className="relative py-16 bg-gray-800 text-white">
      <div className="absolute -top-24 left-0 w-full h-24 text-gray-800 rotate-180">
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
        <p className="text-gray-300">
          © {new Date().getFullYear()} Václav Kolář. Všechna práva vyhrazena.
        </p>
        <div className="flex justify-center items-center space-x-6">
          <motion.a
            href="https://github.com/kolarvasek"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:outline-none"
          >
            <SiGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vasek-kolar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:outline-none"
          >
            <SiLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/vasek._.kolar/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:outline-none"
          >
            <SiInstagram size={24} />
          </motion.a>
          <motion.a
            href="mailto:vasek.kolar435@icloud.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:outline-none"
          >
            <BiSolidEnvelope size={24} />
          </motion.a>
          <motion.a
            href="tel:+420773461557"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:outline-none"
          >
            <Phone size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
