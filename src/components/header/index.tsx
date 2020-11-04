import React from "react";
import * as Styled from "./styles";
import InstagramIcon from "../../assets/images/icons/instagram-icon.svg";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import HeaderLink from '../HeaderLink'

export const Header = () => {
  return (
    <Styled.HeaderContent>
      <Styled.Menu>
        <HeaderLink to="/">
          {" "}
          <div>HOME</div>
        </HeaderLink>
        <HeaderLink to="/categorias">
          <div>CATEGORIAS</div>
        </HeaderLink>

        <HeaderLink to="/contato">
          <div>CONTATO</div>
        </HeaderLink>
        <HeaderLink to="/sobre">
          {" "}
          <div>SOBRE</div>
        </HeaderLink>
      </Styled.Menu>

      <Styled.SocialMedia>
        <img src={InstagramIcon} alt="Icone Instagram" />
        <img src={FacebookIcon} alt="Icone Facebook" />
      </Styled.SocialMedia>
    </Styled.HeaderContent>
  );
};

export default Header;
