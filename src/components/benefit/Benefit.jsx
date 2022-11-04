const Benefit = ({ icon, text }) => {
  return (
    <div className="benefits__items__item">
      <div className="benefits__items__item__icon">
        <img src={icon} alt={icon} />
      </div>

      <div className="benefits__items__item__content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Benefit;
