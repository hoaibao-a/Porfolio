import React from "react";
import { useTranslation } from "react-i18next";

import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa"; // Import icons

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" text-white py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="mt-4 flex gap-6 text-gray-400 text-sm">
          <a href="#HOME" className="hover:text-light-orange transition">{t("footer.home")}</a>
          <a href="#ABOUT" className="hover:text-light-orange transition">{t("footer.about")}</a>
          <a href="#EXPERIENCE" className="hover:text-light-orange transition">{t("footer.experience")}</a>
          <a href="#PROJECT" className="hover:text-light-orange transition">{t("footer.projects")}</a>
          <a href="#CONTACT" className="hover:text-light-orange transition">{t("footer.contact")}</a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/maigiaminh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-orange transition">
            <FaGithub size={24} />
          </a>
          <a href="https://t.me/maigiaminh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-orange transition">
            <FaTelegram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mgminh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-orange transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61561928965148" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-orange transition">
            <FaFacebook size={24} />
          </a>
          <a href="mailto:minh.mgia@gmail.com" className="text-gray-400 hover:text-light-orange transition">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} {t("footer.privacy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
