import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";
import CommentSection from "../../components/CommentSection";

interface PageProps {
  params: {
    slug: string;
  };
}

// export function generateStaticParams() {
//   return posts.map((p) => ({ slug: p.slug }));
// }

// export function generateMetadata({ params }: PageProps) {
//   const post = posts.find((p) => p.slug === params.slug);
//   console.log("Generating metadata for slug:", post?.slug);
//   if (!post) return {};
//   return { title: `${post.title} | AI Engineering`, description: post.excerpt };
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        ← Back to Blog
      </Link>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3 text-sm text-zinc-400">
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
      </div>

      {/* Cover Image */}
      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Body */}
      <article className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
        {post.body.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
              >
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("```")) {
            const code = block.replace(/```typescript\n?|```/g, "");
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-xl bg-zinc-100 p-4 text-sm dark:bg-zinc-800"
              >
                <code className="text-zinc-800 dark:text-zinc-200">{code}</code>
              </pre>
            );
          }
          if (block.match(/^\d\./)) {
            const items = block.split("\n").filter(Boolean);
            return (
              <ol
                key={i}
                className="mt-4 list-decimal space-y-1 pl-5 text-zinc-600 dark:text-zinc-400"
              >
                {items.map((item, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: item
                        .replace(/^\d\.\s\*\*(.+?)\*\*/, "<strong>$1</strong>")
                        .replace(/^\d\.\s/, ""),
                    }}
                  />
                ))}
              </ol>
            );
          }
          return (
            <p
              key={i}
              className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {block}
            </p>
          );
        })}
      </article>

      {/* Comments */}
      <CommentSection initial={post.comments} />
    </main>
  );
}
