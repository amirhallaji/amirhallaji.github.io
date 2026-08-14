import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/Lightbox.css";

const Lightbox = ({ src, alt = "", onClose }) => {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightboxClose" aria-label="Close">
        Close
      </button>
      <img
        src={src}
        alt={alt}
        className="lightboxImage"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body
  );
};

export default Lightbox;
