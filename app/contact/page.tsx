import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | AI Engineering",
  description: "Get in touch — ideas, collaborations, or just a hello.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">

      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Have something to say? I&apos;d love to hear from you.
        </p>
      </div>

      {/* Banner CTA */}
      <div className="mb-10 rounded-2xl bg-zinc-900 px-8 py-8 dark:bg-zinc-50">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Let&apos;s Connect
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-white dark:text-zinc-900 sm:text-3xl">
          Got an idea? Let&apos;s build it.
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 dark:text-zinc-600">
          Whether you want to collaborate, give feedback, or just say hi — I read every message. Don&apos;t be a stranger.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
          {["Open to Collabs", "Freelance Projects", "Speaking Invites", "Just Saying Hi"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-300 dark:border-zinc-300 dark:text-zinc-600"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Form */}
      <ContactForm />

    </main>
  );
}
