import "./button.scss";

const Button = ({ className, text }) => {
  return (
    <div className="button__wrapper">
      <button type="button" className={`button ${className}`}>
        <div className="button__text">{text}</div>
      </button>
    </div>
  );
};

export default Button;
