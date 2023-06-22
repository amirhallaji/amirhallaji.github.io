import "../styles/Button.css";

const Button = (props) => {
  return <button className="button">{props.children}</button>;
};

export default Button;
