import styled from 'styled-components'

export const HeaderContent = styled.header`
  height: 5rem;
 
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color:var(--color-background);
`
export const Menu = styled.div`
  display:flex;

  div {
    font: 400 1.5rem "Poppins";
    margin-right:1.3rem;
    color: #000
  }
`

export const SocialMedia = styled.div`
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
`
