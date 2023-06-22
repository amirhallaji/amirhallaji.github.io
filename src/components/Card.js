import "../styles/Card.css";

const Card = (props) => {
  return (
    <article className={`card${props.hasBanner ? " noPadding" : ""}`}>
      <header className={`cardHeader${props.hasBanner ? " isBanner" : ""}`}>
        {props.logos.map((logo, index) => (
          <img src={logo} key={index} alt="card icon" />
        ))}
      </header>
      <main className={`cardMain${props.hasBanner ? " withPadding" : ""}`}>
        <header className="cardMainTitle">{props.title}</header>
        {props.isList ? (
          <ol className="cardMainBody">
            {props.body.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <p className="cardMainBody">{props.body}</p>
        )}
        {props.link ? (
          <a href={props.link} target="_blank" className="cardMainLink">
            {props.linkText}
          </a>
        ) : null}
      </main>
    </article>
  );
};

export default Card;
