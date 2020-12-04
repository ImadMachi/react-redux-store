import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__info">
          <h2 className="footer__logo">atlas</h2>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur
            repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a
            quod Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="footer__call">
            <FontAwesomeIcon icon="phone-alt" /> 123-456-789
          </div>
          <div className="footer__call">
            <FontAwesomeIcon icon="envelope" /> atlas@store.ma
          </div>
          <div className="footer__socials">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </div>
        </div>
        <div className="footer__contact">
          <h2 className="footer__title">contact us</h2>
          <form>
            <input
              type="text"
              className="input"
              placeholder="Your Email Address.."
            />
            <textarea
              type="text"
              className="input input--textarea"
              placeholder="Message.."
            />
            <input type="submit" className="input input--submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="footer__copyright">&copy;2020 created by Imad MACHI</div>
    </footer>
  );
};

export default Footer;
