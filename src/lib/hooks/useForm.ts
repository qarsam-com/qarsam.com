"use client";

import { useCallback, useMemo, useState } from "react";
import { getInitialFormValues, hasErrors, validateForm } from "@/lib/form/form";
import type { FormErrors, FormValues, UseFormOptions } from "@/types/forms";

export function useForm<TValues extends FormValues>(options: UseFormOptions<TValues>) {
  const initialValues = useMemo(() => getInitialFormValues(options), [options]);
  const [values, setValues] = useState<TValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<TValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const runValidation = useCallback(
    (nextValues: TValues) => {
      const nextErrors = validateForm(nextValues, options);
      setErrors(nextErrors);
      return nextErrors;
    },
    [options]
  );

  const setValue = useCallback(
    <K extends keyof TValues>(key: K, value: TValues[K]) => {
      setValues((current) => {
        const nextValues = { ...current, [key]: value };
        if (options.validateOnChange) {
          runValidation(nextValues);
        }
        return nextValues;
      });
    },
    [options.validateOnChange, runValidation]
  );

  const handleBlur = useCallback(
    (key: keyof TValues) => {
      if (options.validateOnBlur) {
        runValidation(values);
      }
      return errors[key] ?? null;
    },
    [errors, options.validateOnBlur, runValidation, values]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      const nextErrors = runValidation(values);
      if (hasErrors(nextErrors)) return false;

      setIsSubmitting(true);
      try {
        await options.onSubmit?.(values);
        return true;
      } finally {
        setIsSubmitting(false);
      }
    },
    [options, runValidation, values]
  );

  return { values, errors, isSubmitting, setValue, handleBlur, handleSubmit, reset, validate: () => runValidation(values) };
}
