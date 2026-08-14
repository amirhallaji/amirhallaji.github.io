import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatPostDate, loadPost } from "../lib/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    loadPost(slug).then((result) => {
      if (!cancelled) setPost(result);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (post === undefined) {
    return (
      <main className="blogPage section">
        <p className="blogEmpty">Loading post…</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="blogPage section">
        <Link to="/blogs" className="blogBackLink">
          ← All posts
        </Link>
        <h1>Post not found</h1>
        <p className="blogEmpty">There is no Markdown file for this URL.</p>
      </main>
    );
  }

  const isFa = post.lang === "fa";

  return (
    <main className="blogPage section">
      <article
        className={`blogArticle${isFa ? " isRtl" : ""}`}
        lang={isFa ? "fa" : "en"}
        dir={isFa ? "rtl" : "ltr"}
      >
        <Link to="/blogs" className="blogBackLink">
          {isFa ? "همه نوشته‌ها" : "← All posts"}
        </Link>
        <p className="blogCardDate">{formatPostDate(post.date, post.lang)}</p>
        <h1>{post.title}</h1>
        <div className="blogProse">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
