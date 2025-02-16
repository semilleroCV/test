"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  const isExternal = href && (href.startsWith("http://") || href.startsWith("https://"));
  if (isExternal) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-all duration-300"
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href || "#"}
        className="flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

const NAV_MENU = [
  { name: "Inicio", icon: HomeIcon, href: "/" },
  { name: "Sesiones", icon: RocketLaunchIcon, href: "#" },
  { name: "Galería", icon: CameraIcon, href: "#" },
  { name: "Nosotros", icon: UserIcon, href: "/nosotros" },
  {
    name: "2024",
    icon: ArrowRightOnRectangleIcon,
    href: "https://semillerocv.github.io/2024",
  },
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
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
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
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            color="white"
            className="text-xl font-bold"
          >
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
            href="https://discord.gg/MkCpdsHZzJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/logos/discord-logo.svg"
              alt="Discord Logo"
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
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
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
                alt="Discord Logo"
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
