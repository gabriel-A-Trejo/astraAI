"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block"></div>

            <div className="flex   space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 w-fit">
              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(isScrolled && "lg:hidden")}
              >
                <Link href="#">
                  <span>Login</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className={cn(isScrolled && "lg:hidden")}
              >
                <Link href="#">
                  <span>Sign Up</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              ></Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
