"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Fields = { email: string; password: string; remember: boolean };
const empty: Fields = { email: "", password: "", remember: false };

export default function LoginForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!fields.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Enter a valid email.";
    if (!fields.password) e.password = "Password is required.";
    else if (fields.password.length < 6)
      e.password = "Password must be at least 6 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div className="relative w-full">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-14 left-0 right-0 flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg dark:bg-zinc-50 dark:text-black">
              <span>✓</span> Welcome back! You&apos;re logged in.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
      >
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

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </label>
            <Link
              href="#"
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={fields.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 pr-10 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2.5">
          <input
            name="remember"
            type="checkbox"
            checked={fields.remember}
            onChange={handleChange}
            className="h-4 w-4 rounded border-zinc-300 accent-zinc-900 dark:accent-zinc-50"
          />
          <span className="text-xs text-zinc-600 dark:text-zinc-400">Remember me</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-black dark:border-t-transparent" />
          ) : (
            "Sign In →"
          )}
        </button>

        {/* Sign up link */}
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            Sign up for free
          </Link>
        </p>
      </form>
    </div>
  );
}
