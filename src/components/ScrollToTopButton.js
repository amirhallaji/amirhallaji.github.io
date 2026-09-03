import { useEffect, useState } from "react";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = ({ hide = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scrollToTopButton${hide || !isVisible ? " isHidden" : ""}`}
      aria-label="Scroll to top"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12l-7-7z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

