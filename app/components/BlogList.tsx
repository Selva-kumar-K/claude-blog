"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { posts } from "../data/posts";

const PAGE_SIZE = 8;

export default function BlogList() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visible = posts.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < posts.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          setTimeout(() => {
            setPage((p) => p + 1);
            setLoading(false);
          }, 600);
        }
      },
      { threshold: 1.0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.05 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>

      {/* Sentinel */}
      <div ref={sentinelRef} className="flex justify-center py-6">
        {loading && (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        )}
        {!hasMore && (
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            You&apos;ve reached the end.
          </p>
        )}
      </div>
    </div>
  );
}
