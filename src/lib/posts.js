const POSTS_BASE = `${process.env.PUBLIC_URL || ""}/posts`;

// Add a slug here for each file in public/posts/<slug>.md
export const blogSlugs = ["pixel-how-it-started"];

export function formatPostDate(date, lang = "en", precision = "day") {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  if (lang === "fa" && precision === "month") {
    const parts = new Intl.DateTimeFormat("fa-IR", {
      calendar: "persian", year: "numeric", month: "long",
    }).formatToParts(parsed);
    return `${parts.find((part) => part.type === "month").value} ${parts.find((part) => part.type === "year").value}`;
  }
  return parsed.toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    ...(precision === "month" ? {} : { day: "numeric" }),
  });
}

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {}, content: raw };
  }

  const meta = {};
  match[1].split("\n").forEach((line) => {
    const index = line.indexOf(":");
    if (index === -1) return;
    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  });

  return { meta, content: match[2].trim() };
}

export async function loadPosts() {
  const posts = await Promise.all(
    blogSlugs.map(async (slug) => {
      const response = await fetch(`${POSTS_BASE}/${slug}.md`);
      if (!response.ok) return null;
      const raw = await response.text();
      const { meta, content } = parseFrontmatter(raw);
      return {
        slug,
        title: meta.title || slug,
        date: meta.date || "",
        datePrecision: meta.datePrecision === "month" ? "month" : "day",
        summary: meta.summary || "",
        cover: meta.cover || "",
        lang: meta.lang === "fa" ? "fa" : "en",
        content,
      };
    })
  );

  return posts
    .filter(Boolean)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export async function loadPost(slug) {
  const posts = await loadPosts();
  return posts.find((post) => post.slug === slug) || null;
}
