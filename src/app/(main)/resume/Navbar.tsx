"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UserPage from "./userPage";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
const{theme} = useTheme()
  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted
  }, []);

  // Don't render the Navbar until the component has mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="h-5">
        <div className="flex justify-between  md:justify-between items-center md:px-50 border-1 shadow-lg">
          <Link href={"/resume"} className="flex justify-center items-center p-2">
            <Image
              className="rounded-xl"
              height={40}
              width={40}
              alt="Logo"
              src={"/Logo.jpeg"}
            />
            <h1 className={`${theme === 'light' ? 'text-neutral-800' : 'text-neutral-500' } font-semibold md:text-lg pl-4  tsxt-sm`}>AI Resume Builder</h1>
          </Link>

          <div></div>
          <div className="pr-5 flex gap-5">
            <UserPage />
          </div>
        </div>
      </header>
    </>
  );
}
