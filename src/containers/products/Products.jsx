import { Product } from "../../components";
import productImg1 from "../../assets/img-product-moisturiser.jpg";
import productImg2 from "../../assets/img-product-serum.jpg";
import productImg3 from "../../assets/img-product-hydrater.jpg";
import { Button } from "../../components";
import "../../index.scss";
import "./products.scss";

const Products = () => {
  return (
    <div className="section products">
      <div className="row">
        <div className="products__content">
          <h2>Best selling products</h2>
          <p>We make products to make your skin smooth, shiny and beautiful.</p>
        </div>

        <div className="products__items">
          <Product
            img={productImg1}
            title="Moisturiser"
            description="Neauthy skin moisturiser"
          />

          <Product
            img={productImg2}
            title="Serum"
            description="Neauthy face serum"
          />

          <Product
            img={productImg3}
            title="Hydrator"
            description="Neauthy skin hydrator"
          />
        </div>
      </div>

      <div className="row">
        <div className="products__button">
          <Button text="See more" className={"button--black"} />
        </div>
      </div>
    </div>
  );
};

export default Products;
