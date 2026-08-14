"use client";

import { useCallback, useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { contactFormOptions } from "@/lib/content";
import { FORM_LABELS } from "@/lib/constants";

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  projectDetails: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validate = useCallback(
    (nextValues: ContactFormValues) => {
      const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};

      if (!nextValues.name.trim()) nextErrors.name = "Please enter your name.";
      if (!nextValues.email.trim()) {
        nextErrors.email = "Please enter your email address.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }
      if (!nextValues.phone.trim()) nextErrors.phone = "Please provide a phone or WhatsApp number.";
      if (!nextValues.service.trim()) nextErrors.service = "Please select a service area.";
      if (!nextValues.projectDetails.trim()) {
        nextErrors.projectDetails = "Please share a brief overview of your project.";
      } else if (nextValues.projectDetails.trim().length < 20) {
        nextErrors.projectDetails = "Please provide at least 20 characters so we understand your needs.";
      }

      return nextErrors;
    },
    [],
  );

  const handleChange = <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (submitted) {
      setErrors(validate(nextValues));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsLoading(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            service: values.service,
            projectDetails: values.projectDetails,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSubmitStatus({
            type: "success",
            message: "Thank you for your inquiry! We will get back to you soon.",
          });
          setValues(initialValues);
          setSubmitted(false);
        } else {
          setSubmitStatus({
            type: "error",
            message: data.error || "Failed to submit the form. Please try again.",
          });
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus({
          type: "error",
          message: "Failed to submit the form. Please check your connection and try again.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {submitStatus && (
        <div
          className={`rounded-lg p-4 text-sm ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy-800">
            {FORM_LABELS.name}
          </label>
          <Input
            id="name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            hasError={Boolean(errors.name)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isLoading}
          />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy-800">
            {FORM_LABELS.company}
          </label>
          <Input
            id="company"
            value={values.company}
            onChange={(event) => handleChange("company", event.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy-800">
            {FORM_LABELS.email}
          </label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            hasError={Boolean(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isLoading}
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy-800">
            {FORM_LABELS.phone}
          </label>
          <Input
            id="phone"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            hasError={Boolean(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            disabled={isLoading}
          />
          {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone}</p> : null}
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-navy-800">
          {FORM_LABELS.serviceRequired}
        </label>
        <Select
          id="service"
          value={values.service}
          onChange={(event) => handleChange("service", event.target.value)}
          options={contactFormOptions}
          placeholder="Select a service"
          hasError={Boolean(errors.service)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          disabled={isLoading}
        />
        {errors.service ? <p id="service-error" className="mt-2 text-sm text-red-600">{errors.service}</p> : null}
      </div>
      <div>
        <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-navy-800">
          {FORM_LABELS.projectDetails}
        </label>
        <Textarea
          id="projectDetails"
          value={values.projectDetails}
          onChange={(event) => handleChange("projectDetails", event.target.value)}
          hasError={Boolean(errors.projectDetails)}
          aria-invalid={Boolean(errors.projectDetails)}
          aria-describedby={errors.projectDetails ? "details-error" : undefined}
          disabled={isLoading}
        />
        {errors.projectDetails ? <p id="details-error" className="mt-2 text-sm text-red-600">{errors.projectDetails}</p> : null}
      </div>
      <Button type="submit" size="lg" disabled={isLoading}>
        {isLoading ? "Sending..." : FORM_LABELS.submit}
      </Button>
    </form>
  );
}
