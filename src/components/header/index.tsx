import React from 'react'
import * as Styled from './styles'
import InstagramIcon from '../../assets/images/icons/instagram-icon.svg'
import FacebookIcon from '../../assets/images/icons/facebook-icon.svg'

export const Header = () => {
    return (
      
        <Styled.HeaderContent>
           <Styled.Menu>
                <div>HOME</div>
                <div>CATEGORIAS</div>
                <div>CONTATO</div>
                <div>SOBRE</div>
           </Styled.Menu>

           <Styled.SocialMedia>
                <img src={InstagramIcon} alt="Icone Instagram"/>
                <img src={FacebookIcon} alt="Icone Facebook"/>
           </Styled.SocialMedia>
        </Styled.HeaderContent>
  
      
    )
}

export default Header