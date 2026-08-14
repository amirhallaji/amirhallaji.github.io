import { Link } from "react-router-dom";
import { formatPostDate } from "../lib/posts";

const BlogCard = ({ post }) => {
  const isFa = post.lang === "fa";

  return (
    <article
      className={`blogCard${isFa ? " isRtl" : ""}`}
      lang={isFa ? "fa" : "en"}
      dir={isFa ? "rtl" : "ltr"}
    >
      <p className="blogCardDate">{formatPostDate(post.date, post.lang)}</p>
      <h3 className="blogCardTitle">
        <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
      </h3>
      {post.summary ? <p className="blogCardSummary">{post.summary}</p> : null}
      <Link to={`/blogs/${post.slug}`} className="blogCardLink">
        {isFa ? "خواندن نوشته" : "Read post"}
      </Link>
    </article>
  );
};

export default BlogCard;
