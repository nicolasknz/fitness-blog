import styled from 'styled-components'

export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;

    display:flex;
    flex-direction:column;
    align-items:center;
  
   
  
`;

export const ContentContainer = styled.div`
    width:58%;
    align-items:center;
    justify-content:center;
    
`

export const PostsWrapper = styled.div`
    width:100%;
    margin: 0 auto;

    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;

    @media(max-width:1366px) {
        justify-content:center;
    }

    
`