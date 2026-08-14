import "../styles/Button.css";

const Button = ({ href, className = "", children, ...rest }) => {
  const classes = ["button", className].filter(Boolean).join(" ");

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
