import Image from "next/image";
import Link from "next/link";
import { Post } from "../data/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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
          <h2 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
            {post.excerpt}
          </p>

          {/* Author + Date */}
          <div className="flex items-center justify-between pt-1 text-xs text-zinc-400 dark:text-zinc-500">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
