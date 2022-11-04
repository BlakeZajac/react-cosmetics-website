import { Review } from "../../components";
import imgReview1 from "../../assets/img-review-1.jpg";
import imgReview2 from "../../assets/img-review-2.jpg";
import "./reviews.scss";

const Reviews = () => {
  return (
    <div className="section reviews">
      <div className="row reviews__row">
        <div className="reviews__content">
          <h2>Loved by thousands</h2>
        </div>

        <div className="reviews__items">
          <Review
            img={imgReview1}
            review="I used the skin serums from Neauthy. They are amazing and definitely worth buying!"
            author="Jesse"
          />

          <Review
            img={imgReview2}
            review="I used the skin serums from Neauthy. They are amazing and definitely worth buying!"
            author="Josh"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
