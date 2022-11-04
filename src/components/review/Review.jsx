const Review = ({ img, review, author }) => {
  return (
    <div className="reviews__items__item">
      <div className="reviews__items__item__image">
        <img src={img} alt={img} />
      </div>

      <div className="reviews__items__item__content">
        <p className="review">{review}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

export default Review;
