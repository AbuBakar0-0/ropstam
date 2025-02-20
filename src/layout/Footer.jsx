import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Owners", link: "#" },
    { name: "Tenants", link: "#" },
    { name: "Properties", link: "#" },
  ];

  const otherLinks = [
    { name: "Online Medications", link: "#" },
    { name: "Download App", link: "#" },
    { name: "Start Treatment", link: "#" },
    { name: "Online Urgent Care", link: "#" },
    { name: "FAQ", link: "#" },
  ];

  return (
    <footer className="bg-white text-gray-700 py-10  border-t border-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-5 lg:px-20">
        
        {/* Logo & Description */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <div className="w-full lg:w-2/3 mx-auto lg:mx-0 space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold text-primary">LOGO</h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 capitalize">
              Experience the convenience of Recovery Delivered, your trusted source for online medication delivery. We bring the pharmacy to your doorstep, ensuring fast, discreet, and reliable service.
            </p>
          </div>
        </div>

        {/* Links & Contact Section */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-center text-center md:items-start lg:text-left gap-10">
          
          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl lg:text-2xl text-teal-500 font-frank">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm lg:text-lg">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-slate-600 hover:text-teal-700 ">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl lg:text-2xl text-teal-500 font-frank">Other Links</h3>
            <ul className="mt-4 space-y-3 text-sm lg:text-lg">
              {otherLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-slate-600 hover:text-teal-700 ">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center lg:items-start gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-2xl text-teal-500 font-frank">Contact</h3>
              <div className="mt-2 flex flex-row gap-3 items-center text-sm lg:text-lg">
                <FiPhone />
                <p className="text-slate-600">1-866-757-9868</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl lg:text-2xl text-teal-500 font-frank">Social Media</h3>
                <div className="mt-2 flex justify-center lg:justify-start space-x-4 text-lg">
                  <a href="#" className="text-slate-600 hover:text-teal-500"><FaTwitter size={20} /></a>
                  <a href="#" className="text-slate-600 hover:text-teal-500"><FaFacebookF size={20} /></a>
                  <a href="#" className="text-slate-600 hover:text-teal-500"><FaYoutube size={20} /></a>
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-base">Designed and Developed by Ropstam</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-8 text-center">
        <hr />
        <p className="mt-2 text-xs lg:text-sm">©2024 – Recovery Delivered | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
