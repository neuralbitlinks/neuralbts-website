"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";

const services = [
  "Custom AI Tools",
  "Intelligent Automation",
  "ML & Data Science",
  "Conversational AI",
  "AI Integration",
  "MLOps & Support",
  "Not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo-only handler. Wire to an API route / form service for production.
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-lg border border-line bg-white p-10 text-center shadow-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-2xl text-white">
          ✓
        </div>
        <h3 className="display mt-5 text-2xl">Thanks — message received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          We&apos;ll get back to you within one business day. In the meantime,
          feel free to explore our work.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn-ghost mt-6"
          type="button"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Doe" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Acme Inc." />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            What do you need?
          </label>
          <select
            name="service"
            className="w-full rounded-sm border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40 focus:bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Tell us about your project
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build or solve?"
          className="w-full resize-none rounded-sm border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-ink/40 focus:bg-white"
        />
      </div>
      <p className="mt-4 text-xs text-ink-faint">{contact.consent}</p>
      <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-ink/40 focus:bg-white"
      />
    </div>
  );
}
