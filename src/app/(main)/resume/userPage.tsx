"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { UserButton, ClerkLoaded } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function UserPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures that the component is only rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // You can return a loader or nothing until it's mounted
  }

  return (
    <>
      <ThemeToggle />

      <ClerkLoaded>
        <UserButton
          appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
            elements: {
              avatarBox: {
                height: 36,
                width: 36,
              },
            },
          }}
        />
      </ClerkLoaded>
    </>
  );
}
