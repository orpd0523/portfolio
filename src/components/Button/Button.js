import './Button.scss'

function Button(props){
    const { type = "button", variant = "primary"} = props;
    return(
        <button type={type} className={`button button--${variant}`}>{props.children}</button>
    )
} 

export default Button;