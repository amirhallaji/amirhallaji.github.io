import "../styles/Logo.css";

const Logo = ({ variant = "dark" }) => {
  return (
    <span className={`logoA logoA--${variant}`} aria-label="Amir Hallaji">
      <span className="logoAWord">
        A
        <svg
          className="logoAM"
          viewBox="0 0 88 100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F5900C"
            d="M4 96L26 6L44 50L62 6L84 96H70.5L62 34L44 70L26 34L17.5 96H4Z"
          />
        </svg>
        IR
      </span>
      <span className="logoALast">Hallaji</span>
    </span>
  );
};

export default Logo;
