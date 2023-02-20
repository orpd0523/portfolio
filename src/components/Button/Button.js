import "./Button.scss";

function Button(props) {
  const {
    type = "button",
    children,
    variant = "primary",
    ...otherProps
  } = props;
  return (
    <button type={type} className={`button button--${variant}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
