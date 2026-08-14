import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { loadPosts } from "../lib/posts";

const Blogs = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    loadPosts().then(setPosts);
  }, []);

  return (
    <main className="blogPage section">
      <header className="blogPageHeader">
        <p className="heroEyebrow">Writing</p>
        <h1>Blogs</h1>
        <p>
          Notes on LLMs, deep learning, and building software that scales.
          Posts are written in Markdown.
        </p>
      </header>
      <div className="blogCardList">
        {posts === null ? (
          <p className="blogEmpty">Loading posts…</p>
        ) : posts.length ? (
          posts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <p className="blogEmpty">No posts yet.</p>
        )}
      </div>
    </main>
  );
};

export default Blogs;
