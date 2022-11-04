import imgMap from "../../assets/img-map.jpg";
import "./map.scss";

const svgArrow = (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
  >
    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
  </svg>
);

const Map = () => {
  return (
    <div className="section map">
      <div className="row map__row">
        <div className="map__content">
          <h2>Where to find us</h2>
          <p>
            Explore our nearest store around you and test our products before
            buying.
          </p>
          <p>
            <a href="#" className="text-link">
              Explore locations {svgArrow}
            </a>
          </p>
        </div>

        <div className="map__image">
          <img src={imgMap} alt={imgMap} />
        </div>
      </div>
    </div>
  );
};

export default Map;
