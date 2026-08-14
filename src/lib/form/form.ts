import type { FormConfig, FormErrors, FormValues } from "@/types/forms";

export function getInitialFormValues<TValues extends FormValues>(config: FormConfig<TValues>): TValues {
  return Object.entries(config.fields).reduce((accumulator, [key, field]) => {
    accumulator[key as keyof TValues] = field.initialValue;
    return accumulator;
  }, {} as TValues);
}

export function validateForm<TValues extends FormValues>(values: TValues, config: FormConfig<TValues>): FormErrors<TValues> {
  const errors: FormErrors<TValues> = {};

  for (const key of Object.keys(config.fields) as Array<keyof TValues>) {
    const field = config.fields[key];
    const validators = field.validators ?? [];

    for (const validator of validators) {
      const result = validator(values[key], values);
      if (result) {
        errors[key] = result;
        break;
      }
    }
  }

  return errors;
}

export function hasErrors<TValues extends FormValues>(errors: FormErrors<TValues>): boolean {
  return Object.values(errors).some(Boolean);
}
