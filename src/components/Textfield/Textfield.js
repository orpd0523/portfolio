import "./Textfield.scss";

function Textfield(props) {
  const { Node = "input", primary = "form", ...otherProps } = props;
  return (
    <div className="textfield">
      <Node className={`form form--${primary}`} {...otherProps}/>
    </div>
  );
}

export default Textfield;