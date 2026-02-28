"use client";

import { useState } from "react";
import Image from "next/image";
import { Comment } from "../data/posts";

export default function CommentSection({ initial }: { initial: Comment[] }) {
  const [comments, setComments] = useState<Comment[]>(initial);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !body.trim()) {
      setError("Both fields are required.");
      return;
    }
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        avatar: `https://picsum.photos/seed/${Date.now()}/40/40`,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        body: body.trim(),
      },
    ]);
    setName("");
    setBody("");
    setError("");
  }

  return (
    <section className="mt-16 border-t border-zinc-100 pt-10 dark:border-zinc-800">
      <h2 className="mb-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Comments <span className="text-zinc-400">({comments.length})</span>
      </h2>

      {/* Comment list */}
      <div className="flex flex-col gap-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4">
            <Image
              src={c.avatar}
              alt={c.name}
              width={40}
              height={40}
              className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
            />
            <div className="flex-1 rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {c.name}
                </span>
                <span className="text-xs text-zinc-400">{c.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add comment form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <h3 className="mb-5 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Leave a comment
        </h3>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
          />
          <textarea
            placeholder="Write your comment..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-500"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            className="self-end rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
          >
            Post Comment
          </button>
        </div>
      </form>
    </section>
  );
}
