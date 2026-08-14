import { Link } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ href, to, className = "", children, ...rest }) => {
  const classes = ["button", className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
