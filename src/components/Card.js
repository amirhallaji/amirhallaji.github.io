import { useState } from "react";
import "../styles/Card.css";
import Lightbox from "./Lightbox";

const Card = (props) => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <article
      className={`card${props.hasBanner ? " noPadding" : ""}${
        props.hasGallery ? " gallery" : ""
      }${props.hasEmblem ? " emblem" : ""}`}
    >
      <header
        className={`cardHeader${props.hasBanner ? " isBanner" : ""}${
          props.hasGallery ? " isGallery" : ""
        }${props.hasEmblem ? " isEmblem" : ""}`}
      >
        {props.logos.map((logo, index) =>
          props.hasGallery || props.hasEmblem ? (
            <button
              type="button"
              className="cardGalleryLink"
              key={index}
              onClick={() => setLightboxSrc(logo)}
              aria-label={`View ${props.title} image`}
            >
              <img src={logo} alt="" />
            </button>
          ) : (
            <img src={logo} key={index} alt="" />
          )
        )}
      </header>
      <main
        className={`cardMain${
          props.hasBanner || props.hasGallery || props.hasEmblem
            ? " withPadding"
            : ""
        }`}
      >
        <header className="cardMainTitle">{props.title}</header>
        {props.isList ? (
          <ul className="cardMainBody">
            {props.body.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="cardMainBody">{props.body}</p>
        )}
        {props.link ? (
          typeof props.link === "string" ? (
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="cardMainLink"
            >
              {props.linkText}
            </a>
          ) : (
            <ul className="cardLinks">
              {props.link.map((item, index) => (
                <li key={index}>
                  {props.hasGallery && props.logos[index] ? (
                    <button
                      type="button"
                      className="cardMainLink"
                      onClick={() => setLightboxSrc(props.logos[index])}
                    >
                      {props.linkText[index]}
                    </button>
                  ) : (
                    <a
                      href={item}
                      target="_blank"
                      rel="noreferrer"
                      className="cardMainLink"
                    >
                      {props.linkText[index]}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )
        ) : null}
      </main>
      {lightboxSrc ? (
        <Lightbox
          src={lightboxSrc}
          alt={props.title}
          onClose={() => setLightboxSrc(null)}
        />
      ) : null}
    </article>
  );
};

export default Card;
