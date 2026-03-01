import Image from "next/image";
import LoginForm from "../components/LoginForm";

export const metadata = {
  title: "Login | AI Engineering",
  description: "Sign in to your AI Engineering account.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <div className="flex flex-col items-center gap-3 text-center mb-10">
        <Image src="/sk_logo.png" alt="Logo" width={48} height={48} priority />
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Welcome back
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Sign in to continue reading and commenting.
        </p>
      </div>

      <LoginForm />
    </main>
  );
}
