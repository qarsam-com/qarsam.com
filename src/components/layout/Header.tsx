"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import CTAButton from "@/components/ui/CTAButton";
import { MenuIcon, CloseIcon, QarsamLogo, WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import { NAV_ITEMS, CTA } from "@/lib/constants";

/**
 * Header Component
 * Premium, responsive navigation with sticky behavior and mobile menu
 */
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-navy-100"
          : "bg-white/50 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 rounded-lg"
            aria-label="Qarsam - Home"
          >
            <QarsamLogo className="h-8 w-auto md:h-10 text-navy-900" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  "text-navy-700 hover:text-electric-600",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 rounded-lg"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <CTAButton
              text={CTA.primary}
              variant="primary"
              size="md"
              icon={<WhatsAppIcon className="w-4 h-4" />}
            />
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2"
            >
              {CTA.secondary}
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <CloseIcon className="w-6 h-6 text-navy-900" />
            ) : (
              <MenuIcon className="w-6 h-6 text-navy-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="px-4 py-6 space-y-4 border-t border-navy-100 bg-white/50 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-base font-medium transition-colors duration-200",
                  "text-navy-700 hover:text-electric-600",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 rounded-lg"
                )}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-navy-100">
              <CTAButton
                text={CTA.primary}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<WhatsAppIcon className="w-4 h-4" />}
              />
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  handleNavClick();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full justify-center flex items-center gap-2"
              >
                {CTA.secondary}
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
