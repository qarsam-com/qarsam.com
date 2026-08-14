"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import CTAButton from "@/components/ui/CTAButton";
import { MenuIcon, CloseIcon, QarsamLogo, WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import { primaryNavigation } from "@/constants/navigation";
import { CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "border-b border-navy-100 bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm") }>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2" aria-label="Qarsam home">
            <QarsamLogo className="h-8 w-auto text-navy-900 md:h-10" />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex lg:gap-10">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg text-sm font-medium transition-colors hover:text-electric-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2",
                  pathname === item.href ? "text-electric-600" : "text-navy-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <CTAButton text={CTA.primary} variant="primary" size="md" icon={<WhatsAppIcon className="h-4 w-4" />} />
            <Button
              variant="outline"
              size="md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              {CTA.secondary}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <CloseIcon className="h-6 w-6 text-navy-900" /> : <MenuIcon className="h-6 w-6 text-navy-900" />}
          </button>
        </div>

        <nav id="mobile-menu" aria-label="Mobile navigation" className={cn("overflow-hidden transition-all duration-300 ease-in-out md:hidden", isOpen ? "max-h-screen" : "max-h-0")}>
          <div className="space-y-4 border-t border-navy-100 bg-white px-4 py-6">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg text-base font-medium transition-colors hover:text-electric-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2",
                  pathname === item.href ? "text-electric-600" : "text-navy-700"
                )}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-3 border-t border-navy-100 pt-4">
              <CTAButton text={CTA.primary} variant="primary" size="md" className="w-full justify-center" icon={<WhatsAppIcon className="h-4 w-4" />} />
              <Link href="/contact" onClick={handleNavClick}>
                <Button variant="outline" size="md" className="flex w-full items-center justify-center gap-2">
                  {CTA.secondary}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
