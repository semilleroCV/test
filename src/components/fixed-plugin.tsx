"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
      <Button
        color="white"
        size="lg"
        className="!fixed bottom-4 right-4 flex items-center border bg-violet-700 text-white pr-4"
      >
        <Image
          width={24}
          height={24}
          className="w-10 h-10 mr-4 -ml-4"
          alt="Discord"
          src="/logos/discord-logo.svg" 
        />{" "}
        Únete a Discord
      </Button>
    </a>
  );
}