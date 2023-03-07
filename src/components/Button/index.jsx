const Button = (props) => {
  return (
    <button onClick={() => props.handleClick (props.text)}>
        {props.text}
    </button>
  );
}

export default Button