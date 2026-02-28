export type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  coverImage: string;
  slug: string;
};

export const posts: Post[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  slug: `post-${i + 1}`,
  title: [
    "Building Scalable APIs with Next.js",
    "Understanding TypeScript Generics",
    "Mastering Tailwind CSS Layouts",
    "Intro to AI Engineering",
    "Claude API: A Practical Guide",
    "Framer Motion Deep Dive",
    "Clean Code Principles for Frontend",
    "State Management in 2025",
    "Edge Functions vs Serverless",
    "Designing for Dark Mode",
    "Full Stack with App Router",
    "Prompt Engineering Best Practices",
  ][i % 12],
  excerpt:
    "A deep dive into modern engineering patterns, best practices, and how to ship production-ready code faster with confidence.",
  author: ["Selva Kumar", "Alex Reed", "Jordan Lee"][i % 3],
  date: new Date(2025, i % 12, (i % 28) + 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  tags: [
    ["Next.js", "API", "Backend"],
    ["TypeScript", "Frontend"],
    ["Tailwind", "CSS", "Design"],
    ["AI", "Claude", "LLM"],
  ][i % 4],
  coverImage: `https://picsum.photos/seed/${i + 10}/800/450`,
}));
