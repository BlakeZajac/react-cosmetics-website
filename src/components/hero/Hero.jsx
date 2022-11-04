import heroImage from "../../assets/img-hero.png";
import Button from "../button/Button";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="section hero">
      <div className="row hero__row">
        <div className="hero__content">
          <h1>
            Smooth <br /> skin <span className="color-orange">all day</span>
          </h1>

          <p>
            We create products to make your skin smooth, shiny and beautiful.
          </p>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      <div className="row">
        <div className="hero__button">
          <Button text="See more" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
