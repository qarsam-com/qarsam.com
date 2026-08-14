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
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-trigger`;

        return (
          <div key={item.id} className="overflow-hidden rounded-lg border border-navy-200">
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors duration-200 hover:bg-navy-50",
                  focusRingClassName
                )}
              >
                <span className="font-semibold text-navy-900">{item.title}</span>
                <ChevronDownIcon
                  className={cn("h-5 w-5 text-navy-600 transition-transform duration-200", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-navy-200 bg-navy-50 px-6 py-4 text-navy-700">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
