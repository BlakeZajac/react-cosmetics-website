import { Benefit } from "../../components";
import iconLeaf from "../../assets/icon-leaf.png";
import iconTicks from "../../assets/icon-ticks.png";
import iconRecycle from "../../assets/icon-recycle.png";
import iconStar from "../../assets/icon-star.png";
import iconTime from "../../assets/icon-time.png";
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="section benefits">
      <div className="row benefits__row">
        <div className="benefits__items">
          <Benefit icon={iconLeaf} text="Made with organic materials" />
          <Benefit icon={iconTicks} text="Prolonged shelf life" />
          <Benefit icon={iconRecycle} text="Recyclable packaging" />
          <Benefit icon={iconStar} text="Suitable for all skin types" />
          <Benefit icon={iconTime} text="12 hours lasting effect" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
