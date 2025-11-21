"use client";


import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube, FaPhone, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import nav_logo from "../../assets/images/logo-white.svg";
import Image from "next/image";


interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  // В вашем проекте используйте:
  // const navigate = useNavigate();
  const handleNavigate = (path: string): void => {
    console.log(`Navigate to: ${path}`);
  };

  const courses = [
    { name: "Frontend dasturlash kursi", path: "toshkentda-dasturlash-kurslari" },
    { name: "Backend dasturlash kursi", path: "toshkentda-dasturlash-kurslari" },
    { name: "Mobile dasturlash kursi", path: "toshkentda-dasturlash-kurslari" },
    { name: "DevOps Engineering kursi", path: "toshkentda-dasturlash-kurslari" },
    { name: "Junior KIDS kursi", path: "toshkentda-dasturlash-kurslari" },
  ];

  const sections = [
    { name: "Biz haqimizda", href: "#about" },
    { name: "Rasmlar", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Ustozlarimiz", path: "ustozlarimiz" },
  ];

  interface SocialLink {
    icon: React.ReactNode;
    url: string;
    label: string;
  }

  const socialLinks: SocialLink[] = [
    { 
      icon: <IoLogoInstagram className="text-xl" />, 
      url: "https://instagram.com/fintechhubuz?igshid=MzRlODBiNWFlZA==",
      label: "Instagram"
    },
    { 
      icon: <FaYoutube className="text-xl" />, 
      url: "https://www.youtube.com/@fintechhubuz",
      label: "YouTube"
    },
    { 
      icon: <SiTelegram className="text-xl" />, 
      url: "https://t.me/fintechhubuz",
      label: "Telegram"
    },
    { 
      icon: <FaFacebook className="text-xl" />, 
      url: "#",
      label: "Facebook"
    },
    { 
      icon: <FaLinkedin className="text-xl" />, 
      url: "#",
      label: "LinkedIn"
    },
  ];

  return (
    <footer className="w-full bg-[#0a2540]">
      {/* Footer Top */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - 70% */}
        <div className="w-full lg:w-[70%] bg-[#0a2540] px-6 md:px-10 lg:px-16 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 text-white">
            {/* Logo and Contact Column */}
            <div className="flex flex-col gap-6 lg:min-w-[280px]">
              {/* Logo */}
              <div 
                onClick={() => handleNavigate("/")} 
                className="cursor-pointer mb-2"
              >
               <Image
              src={nav_logo}
              width={220}
              height={60}
              alt="FintechHub Logo"
              className="cursor-pointer hover:opacity-90 transition"
            />
                
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:+998712038800" 
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                >
                  <FaPhone className="text-base" />
                  <span className="text-base">71 203 88 00</span>
                </a>
                <a 
                  href="mailto:info@fintechhub.uz" 
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                >
                  <IoMdMail className="text-lg" />
                  <span className="text-base">info@fintechhub.uz</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Courses Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Kurslarimiz</h3>
              <ul className="flex flex-col gap-3 text-[#94a3ac]">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    onClick={() => handleNavigate(course.path)}
                    className="cursor-pointer hover:text-white transition-colors text-sm"
                  >
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Bo'limlar</h3>
              <ul className="flex flex-col gap-3 text-[#94a3ac]">
                {sections.map((section, index) => (
                  <li key={index}>
                    {section.href ? (
                      <a
                        href={section.href}
                        className="cursor-pointer hover:text-white transition-colors text-sm"
                      >
                        {section.name}
                      </a>
                    ) : (
                      <span
                        onClick={() => section.path && handleNavigate(section.path)}
                        className="cursor-pointer hover:text-white transition-colors text-sm"
                      >
                        {section.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - 30% */}
        <div className="w-full lg:w-[30%] bg-[#0d1f2d] px-6 md:px-8 lg:px-12 py-12 lg:py-16 flex flex-col gap-6">
          <h2 className="text-white text-2xl font-bold leading-tight">
            Biz haqimizda qisqacha
          </h2>
          <p className="text-[#94a3ac] text-sm leading-relaxed">
            FintechHub - dasturlashga ilk qadam shu yerdan boshlanadi!
          </p>
          <a
            href="tel:+998712038800"
            className="bg-linear-to-r from-red-600 to-red-500 text-white text-center py-4 px-6 rounded font-semibold text-lg hover:bg-[#B01030] transition-colors"
          >
            71 203 88 00
          </a>
          <button
            onClick={() => handleNavigate("/register")}
            className="bg-transparent text-white text-center py-4 px-6 rounded font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-colors"
          >
            Ro'yhatdan o'tish
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[70%] bg-[#0d1f2d] px-6 md:px-10 lg:px-16 py-6">
          <span className="text-white/50 text-sm">
            © Copyright 2023 by{" "}
            <a 
              href="/" 
              className="font-bold text-white hover:text-gray-300 transition-colors"
            >
              fintechhub.uz
            </a>
          </span>
        </div>
        <div className="w-full lg:w-[30%] bg-[#0a2540] h-16 lg:h-auto"></div>
      </div>
    </footer>
  );
};

export default Footer;