import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowRight, ArrowLeft, CheckCircle, Star, Envelope } from "phosphor-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

// Import project images
import homepage from "./img/homepage.png";
import cas from "./img/cas.png";
import admin from "./img/admin.png";
import revize from "./img/revize.png";

const screenshots = [
  {
    img: homepage,
    title: "Hlavní stránka",
    desc: "Moderní a přehledná hlavní stránka s prezentací služeb a holičů"
  },
  {
    img: cas,
    title: "Rezervační systém",
    desc: "Intuitivní rezervační systém s výběrem data, času a holiče"
  },
  {
    img: admin,
    title: "Administrace",
    desc: "Přehledná správa rezervací, dostupnosti a obsahu webu"
  },
  {
    img: revize,
    title: "Shrnutí objednávky",
    desc: "Přehledná rekapitulace rezervace s potvrzením všech detailů"
  }
];

const features = [
  "Moderní responzivní design",
  "Rychlý rezervační systém",
  "Přehledná administrace",
  "Optimalizace pro mobilní zařízení",
  "SEO optimalizace",
  "Rychlé načítání stránek",
  "Technická podpora"
];

const BarberOffer = () => {
  // Initialize EmailJS
  emailjs.init('g5RHJOT81YNRH5piM');

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS integration
      const result = await emailjs.send(
        "service_wunij9i", // service_id
        "template_7ta9h11", // template_id
        {
          from_email: formData.email,
          message: formData.message,
          to_name: "Václav",
          from_name: "Zákazník z barber offer stránky",
          subject: "Nová poptávka - Web pro barbershop",
        },
        "g5RHJOT81YNRH5piM" // user_id
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Moderní web pro barbery | Václav Kolář</title>
        <meta
          name="description"
          content="Získej moderní web pro svůj barbershop s online rezervacemi, správou dostupnosti a profesionálním vzhledem. Nabídka platí pro první 3 barbershopy za zvýhodněnou cenu."
        />
        <meta
          name="keywords"
          content="web pro barbershop, rezervační systém, barbershop web, online rezervace, holič web"
        />
        <meta
          property="og:title"
          content="Moderní web pro barbery | Václav Kolář"
        />
        <meta
          property="og:description"
          content="Získej moderní web pro svůj barbershop s online rezervacemi a profesionálním vzhledem."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vasek-kolar-portfolio.vercel.app/barber-offer"
        />
        <link
          rel="canonical"
          href="https://vasek-kolar-portfolio.vercel.app/barber-offer"
        />
      </Helmet>

      <div className="font-poppins antialiased bg-white">
        {/* Back Button - Fixed Position */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-6 left-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:outline-none border border-gray-200 hover:border-indigo-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span className="hidden sm:inline">Zpět na hlavní stránku</span>
              <span className="sm:hidden">Zpět</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        {/* Hero Section */}
        <section className="pt-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white relative pb-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
            >
              Web na míru pro barbershop
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
            >
              Získejte moderní web s rychlým rezervačním systémem, přehlednou
              administrací a profesionálním vzhledem, který přiláká nové
              zákazníky a zjednoduší správu vašeho barbershopu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3">
                <Star
                  size={20}
                  className="text-yellow-300 mr-2"
                  weight="fill"
                />
                <span className="font-semibold text-sm sm:text-base">
                  Pouze pro první 3 barbershopy
                </span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3">
                <CheckCircle
                  size={20}
                  className="text-green-300 mr-2"
                  weight="fill"
                />
                <span className="font-semibold text-sm sm:text-base">Kompletní řešení</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Wave divider */}
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

        {/* Screenshots Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-32 bg-white">
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
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Jak bude váš web vypadat
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-center mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-600"
            >
              Prohlédněte si ukázky z funkčního webu pro barbershop
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={screenshot.img}
                      alt={screenshot.title}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {screenshot.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center "
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Co získáte
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-600"
            >
              Kompletní webové řešení pro váš barbershop
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl"
                >
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 flex-shrink-0"
                    weight="fill"
                  />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-32 bg-gradient-to-br from-indigo-50 to-purple-50 relative pb-20">
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
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Cena
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-600 mb-4">
                3 000 Kč
              </div>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Pouze pro první 3 barbershopy
              </p>
              <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
                * Cena zahrnuje kompletní web s rezervačním systémem a
                administrací
              </div>

              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05, x: 6 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:outline-none"
              >
                Chci web pro svůj barbershop
                <ArrowRight size={20} weight="bold" className="ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Wave divider */}
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

        {/* Contact Form Section */}
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Kontaktujte mě
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-center mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600"
            >
              Máte zájem o web pro váš barbershop? Napište mi a domluvíme se na
              detailech.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                  Napište mi
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="barber@gmail.cz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Zpráva
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                      placeholder="Napište mi o vašem barbershopu a požadavcích..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? "Odesílám..." : "Odeslat"}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center font-medium text-sm sm:text-base"
                    >
                      Zpráva byla úspěšně odeslána! Ozvu se vám co nejdříve.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-center font-medium text-sm sm:text-base"
                    >
                      Došlo k chybě při odesílání. Zkuste to prosím znovu nebo
                      mě kontaktujte přímo.
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                    Kontaktní informace
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    <motion.a
                      href="mailto:vasek.kolar435@icloud.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-base sm:text-lg text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:outline-none"
                    >
                      <Envelope size={20} className="mr-3 text-indigo-600" />
                      vasek.kolar435@icloud.com
                    </motion.a>

                    <motion.a
                      href="tel:+420773461557"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-base sm:text-lg text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:outline-none"
                    >
                      <Envelope size={20} className="mr-3 text-indigo-600" />
                      +420 773 461 557
                    </motion.a>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
                    Alternativní kontakt
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                    Můžete mě kontaktovat také přes Instagram:
                  </p>
                  <motion.a
                    href="https://www.instagram.com/vasek._.kolar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors focus:outline-none focus-visible:outline-none text-sm sm:text-base"
                  >
                    @vasek._.kolar
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              © {new Date().getFullYear()} Václav Kolář. Všechna práva
              vyhrazena.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BarberOffer; 