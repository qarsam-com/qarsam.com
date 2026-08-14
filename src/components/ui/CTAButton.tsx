import React from "react";
import Button from "./Button";
import { getWhatsAppInquiryLink } from "@/lib/whatsapp";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      text,
      variant = "primary",
      size = "lg",
      asLink = false,
      href,
      icon,
      ...props
    },
    ref
  ) => {
    const handleWhatsAppClick = () => {
      window.open(getWhatsAppInquiryLink(), "_blank");
    };

    const handleLinkClick = () => {
      if (href) {
        window.location.href = href;
      }
    };

    const onClick = asLink ? handleLinkClick : handleWhatsAppClick;

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        onClick={onClick}
        className="inline-flex items-center gap-2"
        {...props}
      >
        {icon}
        {text}
      </Button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
