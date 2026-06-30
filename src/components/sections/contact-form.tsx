"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { projectTypes, budgetRanges } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

type Status = "idle" | "submitting" | "success" | "error";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-destructive">{message}</p>;
}

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-semibold">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. A member of our team will get back to you
          within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            className="mt-1.5"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Acme Inc."
            aria-invalid={!!errors.company}
            className="mt-1.5"
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@acme.com"
            aria-invalid={!!errors.email}
            className="mt-1.5"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            aria-invalid={!!errors.phone}
            className="mt-1.5"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="projectType">Project Type *</Label>
          <Select
            id="projectType"
            aria-invalid={!!errors.projectType}
            className="mt-1.5"
            defaultValue=""
            {...register("projectType")}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <FieldError message={errors.projectType?.message} />
        </div>

        <div>
          <Label htmlFor="budget">Budget Range *</Label>
          <Select
            id="budget"
            aria-invalid={!!errors.budget}
            className="mt-1.5"
            defaultValue=""
            {...register("budget")}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
          <FieldError message={errors.budget?.message} />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, goals and timeline…"
          aria-invalid={!!errors.message}
          className="mt-1.5"
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {serverError && (
        <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-5" />
            Send Message
          </>
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting, you agree to our processing of your information in line
        with our Privacy Policy.
      </p>
    </form>
  );
}
