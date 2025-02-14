"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  RocketLaunchIcon,
  CameraIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-all duration-300"
      >
        {children}
      </Typography>
    </li>
  );
}

/* function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Discord"
      {...props}
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0238-.319 13.5799.0992 18.0578a.082.082 0 00.0312.0561c2.0528 1.5076 4.0413 2.4227 5.9926 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1257-.0943.2514-.1885.3718-.2844a.0743.0743 0 01.0776-.0105c3.9272 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0781.0095c.1204.096  .2461.1901.372.2844a.077.077 0 01-.0066.1277c-.598.347-1.2205.6497-1.8732.8923a.0766.0766 0 00-.0406.1057c.3608.698  .7723 1.3629 1.225 1.9942a.076.076 0 00.0842.0276c1.9613-.6067 3.9498-1.5218 6.0026-3.0294a.076.076 0 00.0312-.0561c.5004-5.177-.8382-9.6939-3.5495-13.6604a.061.061 0 00-.0312-.028zm-11.3482 9.1323c-1.1835 0-2.1538-1.0827-2.1538-2.419 0-1.3362.9555-2.4189 2.1538-2.4189 1.2102 0 2.167.109 2.1539 2.4189-.0131 1.3363-.9437 2.419-2.1539 2.419zm6.4955 0c-1.1835 0-2.1538-1.0827-2.1538-2.419 0-1.3362.9554-2.4189 2.1538-2.4189 1.2102 0 2.1671.109 2.1539 2.4189-.0131 1.3363-.9437 2.419-2.1539 2.419z" />
    </svg>
  );
} */

const NAV_MENU = [
  { name: "Inicio", icon: HomeIcon },
  { name: "Sesiones", icon: RocketLaunchIcon },
  { name: "Galería", icon: CameraIcon },
  { name: "Nosotros", icon: UserIcon },
  { name: "HoCV 2024", icon: ArrowRightOnRectangleIcon },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl 
        transition-all duration-500 ease-in-out 
        rounded-xl px-6 py-3 backdrop-blur-md border border-white/20 
        ${isScrolling ? "bg-white/10 shadow-xl" : "bg-white/5 shadow-none"}
      `}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="Tool Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <Typography color="white" className="text-xl font-bold">
            Hands-on Computer Vision
          </Typography>
        </div>

        {/* Desktop Menu + Discord Icon */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-white" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>
          {/* Discord Link (Desktop) */}
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-300"
          >
            <Image
                src="/logos/discord-logo.svg"
                alt="Tool Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="lg:hidden"
        >
          {/* You can add an icon here, e.g. a menu icon. */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </IconButton>
      </div>

      {/* Mobile Dropdown */}
      <Collapse open={open}>
        <div className="mt-4 rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-teal-300" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/logos/discord-logo.svg"
                alt="Tool Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
