"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { focusRingClassName } from "@/constants/ui";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string | null;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpen = null,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(defaultOpen ? new Set([defaultOpen]) : new Set());

  const toggleItem = (id: string) => {
    const next = new Set(openItems);

    if (next.has(id)) {
      next.delete(id);
    } else {
      if (!allowMultiple) next.clear();
      next.add(id);
    }

    setOpenItems(next);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-trigger`;

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white shadow-card transition-colors duration-300",
              isOpen ? "border-electric-200" : "border-navy-100"
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-navy-50/60",
                  focusRingClassName
                )}
              >
                <span className="font-semibold text-navy-900">{item.title}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isOpen ? "bg-electric-600 text-white" : "bg-navy-50 text-navy-600"
                  )}
                >
                  <ChevronDownIcon
                    className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-navy-100 bg-navy-50/60 px-6 py-5 text-navy-700">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
