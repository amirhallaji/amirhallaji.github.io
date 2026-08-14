import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";
import { loadPosts } from "../lib/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts().then(setPosts);
  }, []);

  return (
    <main>
      <Hero />
      <Section title="education" />
      <Section title="publications" />
      <Section title="experiences" />
      <Section title="certifications" />
      <Section title="projects" />
      <section id="blogs" className="section subSection blogs">
        <h3 className="sectionTitle">blogs</h3>
        <main className="sectionMain">
          {posts.length ? (
            <>
              <div className="blogCardList">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <Link to="/blogs" className="blogIndexLink">
                All posts
              </Link>
            </>
          ) : (
            <p className="blogEmpty">No posts yet.</p>
          )}
        </main>
      </section>
      <Section title="about" />
      <Section title="contact" />
    </main>
  );
};

export default Home;
