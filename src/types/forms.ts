export type FormFieldValue = string | number | boolean | null | undefined;

export type FormValues = Record<string, FormFieldValue>;

export type FormErrors<T extends FormValues = FormValues> = Partial<Record<keyof T, string>>;

export type ValidatorResult = string | null;

export type Validator<T extends FormFieldValue = FormFieldValue, TValues extends FormValues = FormValues> = (
  value: T,
  values: TValues
) => ValidatorResult;

export type FormFieldConfig<T extends FormFieldValue = FormFieldValue, TValues extends FormValues = FormValues> = {
  initialValue: T;
  validators?: Array<Validator<T, TValues>>;
};

export type FormConfig<TValues extends FormValues> = {
  fields: { [K in keyof TValues]: FormFieldConfig<TValues[K], TValues> };
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
};

export type UseFormOptions<TValues extends FormValues> = FormConfig<TValues> & {
  onSubmit?: (values: TValues) => void | Promise<void>;
};
