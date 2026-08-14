import "../styles/Card.css";

const Card = (props) => {
  return (
    <article className={`card${props.hasBanner ? " noPadding" : ""}`}>
      <header className={`cardHeader${props.hasBanner ? " isBanner" : ""}`}>
        {props.logos.map((logo, index) => (
          <img src={logo} key={index} alt="" />
        ))}
      </header>
      <main className={`cardMain${props.hasBanner ? " withPadding" : ""}`}>
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
                  <a
                    href={item}
                    target="_blank"
                    rel="noreferrer"
                    className="cardMainLink"
                  >
                    {props.linkText[index]}
                  </a>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </main>
    </article>
  );
};

export default Card;
