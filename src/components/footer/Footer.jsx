import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="row">
        <div className="footer__upper">
          <h4>Neauthy</h4>
          <div className="footer__upper__socials">
            <FaFacebookF size={24} className="footer__upper__socials__item" />
            <FaInstagram size={24} className="footer__upper__socials__item" />
          </div>
        </div>

        <div className="footer__lower">
          <div className="footer__lower__col first">
            <p>
              <a href="#">Find us</a>
            </p>
            <p>
              <a href="#">Formula</a>
            </p>
            <p>
              <a href="#">Benefits</a>
            </p>
          </div>

          <div className="footer__lower__col last">
            <p>
              <a href="#">Contact us</a>
            </p>
            <p>
              <a href="#">News</a>
            </p>
            <p>
              <a href="#">Media</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
