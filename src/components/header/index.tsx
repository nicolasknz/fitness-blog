import React from "react";
import * as Styled from "./styles";
import InstagramIcon from "../../assets/images/icons/instagram-icon.svg";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Styled.HeaderContent>
      <Styled.Menu>
        <Link to="/">
          {" "}
          <div>HOME</div>
        </Link>
        <Link to="/categorias">
          <div>CATEGORIAS</div>
        </Link>

        <Link to="/contato">
          <div>CONTATO</div>
        </Link>
        <Link to="/sobre">
          {" "}
          <div>SOBRE</div>
        </Link>
      </Styled.Menu>

      <Styled.SocialMedia>
        <img src={InstagramIcon} alt="Icone Instagram" />
        <img src={FacebookIcon} alt="Icone Facebook" />
      </Styled.SocialMedia>
    </Styled.HeaderContent>
  );
};

export default Header;
