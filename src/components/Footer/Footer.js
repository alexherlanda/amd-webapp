import React from "react";
import logo from "../../assets/logo.png";
import { SocialButton } from "../../components";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about-us">
        <span className="footer__title"> ACERCA DE </span>
        <p className="footer__text">
          Creando espacios para compartir, discutir y comprender desde 2015.
          Conoce nuestro aviso de
          <a href="https://debatemexico.org/legal/Aviso%20de%20Privacidad%20Sitio%20Web.pdf">
            privacidad
          </a>
        </p>
      </div>
      <img className="footer__logo" src={logo} alt="Logo de la AMD" />
      <div className="footer__social">
        <span className="footer__title"> ENCUÉNTRANOS EN: </span>
        <div className="social__buttons-container">
          <SocialButton
            socialNetwork="youtube"
            alt="Link a la cuenta de Youtube de la AMD"
            link="https://www.youtube.com/channel/UCquNtX33eAg33dezwrK0JDw"
          />
          <SocialButton
            socialNetwork="instagram"
            alt="Link a la cuenta de Instagram de la AMD"
            link="https://www.instagram.com/amxdebate/"
          />
          <SocialButton
            socialNetwork="twitter"
            alt="Link a la cuenta de Twitter  de la AMD"
            link="https://twitter.com/amxdebate"
          />
          <SocialButton
            socialNetwork="messenger"
            alt="Link a la cuenta de Messenger de la AMD"
            link="https://twitter.com/amxdebate"
          />
        </div>
        <a href="mailto:example@email.com">
          <span className="footer__email">comunicacion@debatemx.org</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
