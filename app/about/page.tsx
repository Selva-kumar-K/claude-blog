import Image from "next/image";

export const metadata = {
  title: "About | AI Engineering",
  description: "Learn about this blog, the author, and our privacy policy.",
};

const whyItems = [
  {
    title: "Sharing Real-World Experience",
    body: "This blog was created to document hands-on learnings from building AI-powered products — the wins, the failures, and everything in between.",
  },
  {
    title: "Bridging AI and Engineering",
    body: "There's a gap between AI research and practical engineering. This platform exists to close that gap with actionable, opinionated content.",
  },
  {
    title: "Building in Public",
    body: "Transparency drives trust. By sharing the journey openly, we hope to inspire other engineers to experiment, ship, and learn without fear.",
  },
];

const privacyItems = [
  {
    title: "Data We Collect",
    body: "We collect minimal data — only what's necessary to improve your reading experience. No personal data is sold or shared with third parties.",
  },
  {
    title: "Cookies",
    body: "We use essential cookies for site functionality. Analytics cookies are used in an anonymized, aggregated form only.",
  },
  {
    title: "Third-Party Services",
    body: "We may use services like Vercel Analytics or image CDNs. These services have their own privacy policies and are chosen for their privacy-first approach.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete any data associated with your use of this platform. Contact us anytime.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">

      {/* Author */}
      <section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/selva.png"
            alt="Selva"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Selva
          </h1>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            AI Engineer · Full Stack Developer · Builder
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Hey, I&apos;m Selva — an engineer obsessed with AI, clean code, and shipping things that matter. I&apos;ve spent years building products at the intersection of machine learning and modern web development. This blog is my space to think out loud, share what I&apos;ve learned, and connect with like-minded builders around the world.
          </p>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            When I&apos;m not coding, I&apos;m reading about cognitive science, tinkering with side projects, or exploring how large language models are reshaping the way we build software.
          </p>
        </div>
      </section>

      <hr className="my-12 border-zinc-100 dark:border-zinc-800" />

      {/* Why this blog */}
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Why This Blog?
        </h2>
        <div className="flex flex-col gap-6">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-zinc-100 dark:border-zinc-800" />

      {/* Privacy Policy */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Privacy Policy
        </h2>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: March 1, 2026
        </p>
        <div className="flex flex-col gap-6">
          {privacyItems.map((item) => (
            <div key={item.title}>
              <h3 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
