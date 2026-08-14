import type { FormFieldValue, FormValues, Validator } from "@/types/forms";

export const required = <T extends FormFieldValue, TValues extends FormValues>(message = "This field is required"): Validator<T, TValues> =>
  (value) => {
    if (typeof value === "string" && value.trim().length === 0) return message;
    if (value === null || value === undefined || value === false) return message;
    return null;
  };

export const email = <TValues extends FormValues>(message = "Enter a valid email address"): Validator<string, TValues> =>
  (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : message);

export const phone = <TValues extends FormValues>(message = "Enter a valid phone number"): Validator<string, TValues> =>
  (value) => (/^[\d\s()+-]{7,}$/.test(value) ? null : message);

export const minLength = <TValues extends FormValues>(length: number, message?: string): Validator<string, TValues> =>
  (value) => (value.trim().length >= length ? null : message ?? `Must be at least ${length} characters`);

export const maxLength = <TValues extends FormValues>(length: number, message?: string): Validator<string, TValues> =>
  (value) => (value.trim().length <= length ? null : message ?? `Must be ${length} characters or fewer`);
