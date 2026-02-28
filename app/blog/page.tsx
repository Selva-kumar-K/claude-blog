import BlogList from "../components/BlogList";

export const metadata = {
  title: "Blog | AI Engineering",
  description: "Explore articles on AI, frontend, and engineering.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Thoughts on AI, engineering, and building in public.
        </p>
      </div>

      <BlogList />
    </main>
  );
}
