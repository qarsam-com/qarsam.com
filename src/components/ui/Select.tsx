import React from "react";
import { ChevronDownIcon } from "@/components/icons";
import { focusRingClassName } from "@/constants/ui";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: SelectOption[];
  placeholder?: string;
  hasError?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, hasError = false, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-11 w-full appearance-none rounded-lg border bg-white px-4 pr-10 text-base text-navy-900 transition-colors disabled:cursor-not-allowed disabled:bg-navy-50",
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-navy-200 hover:border-navy-300 focus:border-electric-500",
          focusRingClassName,
          className
        )}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-500" aria-hidden="true" />
    </div>
  )
);

Select.displayName = "Select";

export default Select;
