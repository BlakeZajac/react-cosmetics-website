import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ img, title, description }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const wishlistAdded = () =>
    toast(`${title} has been added to your wishlist.`);
  const wishlistRemoved = () =>
    toast(`${title} has been removed from your wishlist.`);

  return (
    <div className="products__items__item">
      <div className="products__items__item__image">
        <img src={img} alt={img} />
      </div>

      <div className="products__items__item__wrapper">
        <div className="products__items__item__wrapper__content">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>

        <div className="products__items__item__wrapper__wishlist">
          <AiFillHeart
            onClick={wishlistAdded}
            className={active ? "wishlist-clicked" : "wishlist-default"}
            size={20}
          />
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Product;
