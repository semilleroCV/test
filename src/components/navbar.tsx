"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

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

const NAV_MENU = [
  { name: "Page", icon: RectangleStackIcon },
  { name: "Account", icon: UserCircleIcon },
  { name: "Docs", icon: CommandLineIcon, href: "https://www.material-tailwind.com/docs/react/installation" },
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
        ${
          isScrolling
            ? "bg-white/10 shadow-xl"
            : "bg-white/5 shadow-none"
        }
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Typography color="white" className="text-xl font-bold">
          🚀 Hands-on Computer Vision
        </Typography>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 text-white" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="text" className="text-white hover:text-teal-300 transition-all">
            Log in
          </Button>
          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg 
            hover:shadow-cyan-500/50 transition-all"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="lg:hidden"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
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
          <div className="mt-6 flex flex-col items-center gap-4">
            <Button variant="text" className="text-white hover:text-teal-300 transition-all">
              Log in
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg 
              hover:shadow-cyan-500/50 transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
