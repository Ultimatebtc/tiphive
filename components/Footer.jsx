import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerItems = [
    { url: "#", label: "About Us" },
    { url: "#", label: "Contact" },
    { url: "#", label: "Privacy Policy" },
    { url: "#", label: "Terms of Use" },
  ];
  return (
    <main className="bg-gray-800 text-white py-8 px-6 md:px-10 rounded-t-lg mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
        <p className="font-semibold">&copy; 2025 TipHive. All rights reserved.</p>
        <p className="text-sm text-gray-400">Your daily dose of smart living.</p>
        </div>

      <div className="flex flex-wrap justify-center md:justify-end space-x-6">
        {footerItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="hover:underline text-gray-300 hover:text-white transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>

    </main>
  );
};

export default Footer;
