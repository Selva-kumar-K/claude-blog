export type Comment = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  body: string;
};

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  coverImage: string;
  slug: string;
  body: string;
  comments: Comment[];
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
  body: `
Modern engineering demands both speed and precision. In this post, we explore how to design systems that scale gracefully without sacrificing developer experience.

## Getting Started

The foundation of any great project is a clear architecture. Start by identifying your core domain and build outward from there. Avoid premature abstractions — solve the problem in front of you first.

\`\`\`typescript
const greet = (name: string): string => \`Hello, \${name}!\`;
console.log(greet("World"));
\`\`\`

## Key Principles

1. **Keep it simple** — Complexity is the enemy of reliability.
2. **Ship early** — Real feedback beats perfect planning.
3. **Iterate fast** — Small changes are easier to reason about and revert.

## Conclusion

Building great software is less about tools and more about discipline. Pick a pattern, stay consistent, and always optimize for the reader of your code — future you will thank you.
  `.trim(),
  comments: [
    {
      id: 1,
      name: "Priya Sharma",
      avatar: `https://picsum.photos/seed/${i + 100}/40/40`,
      date: "Jan 15, 2025",
      body: "Really well written! The section on key principles resonated a lot with me.",
    },
    {
      id: 2,
      name: "Marcus Tan",
      avatar: `https://picsum.photos/seed/${i + 200}/40/40`,
      date: "Jan 18, 2025",
      body: "Great post. Would love a follow-up on testing strategies for this approach.",
    },
  ],
}));
