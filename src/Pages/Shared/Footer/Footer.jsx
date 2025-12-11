import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-20 rounded-xl">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">LocalFoodBazar</h2>
          <p className="text-gray-400 leading-6">
            A modern platform connecting home chefs with food lovers. Enjoy
            fresh, homemade meals prepared by local chefs.
          </p>
        </div>

        {/* Column 2: Contact Details */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">📞 Phone: +880 123 456 789</p>
          <p className="text-gray-400">📧 Email: support@localfoodbazar.com</p>
          <p className="text-gray-400">📍 Address: Dhaka, Bangladesh</p>
          <h3 className="text-xl font-semibold text-white mt-5 mb-3">
            Working Hours
          </h3>
          <p className="text-gray-400">Mon - Sat: 8:00 AM - 10:00 PM</p>
          <p className="text-gray-400">Sunday: Closed</p>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-5 mt-4">
            <a
              href="https://facebook.com/YOUR_USERNAME"
              target="_blank"
              className="p-3 bg-gray-800 rounded-full  transition-all"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="p-3 bg-gray-800 rounded-full  transition-all"
            >
              <FaGithub size={20} />
            </a>

            <a
              href=""
              https:target="_blank" //www.linkedin.com/in/YOUR_USERNAME"
              className="p-3 bg-gray-800 rounded-full  transition-all"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} LocalFoodBazar — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
