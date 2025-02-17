import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

export function TeamCard({ name, role, image, socialLinks }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="
        relative 
        overflow-hidden 
        rounded-xl 
        bg-white/10 
        backdrop-blur-sm 
        border 
        border-white/20 
        p-6
        transition-all 
        duration-300 
        group-hover:shadow-xl 
        group-hover:shadow-teal-500/20
      ">
        {/* Image */}
        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-teal-300 mb-4">{role}</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.github && (
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
            )}
            {socialLinks.linkedin && (
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            )}
            {socialLinks.twitter && (
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard; 