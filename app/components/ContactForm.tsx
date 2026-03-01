"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Field = { name: string; email: string; message: string };
const empty: Field = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [fields, setFields] = useState<Field>(empty);
  const [errors, setErrors] = useState<Partial<Field>>({});
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Partial<Field> = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Enter a valid email.";
    if (!fields.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setFields(empty);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  }

  return (
    <div className="relative">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-14 left-0 right-0 flex items-center justify-center"
          >
            <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg dark:bg-zinc-50 dark:text-black">
              <span>✓</span> Message sent! We&apos;ll get back to you soon.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
      >
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Your Name
          </label>
          <input
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Selva Kumar"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Message
          </label>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            placeholder="Tell me what's on your mind..."
            rows={5}
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-black dark:border-t-transparent" />
          ) : (
            "Send Message →"
          )}
        </button>
      </form>
    </div>
  );
}
