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

    @media(max-width:680px) {
        width:100%
    }
    
`


export const PostsWrapper = styled.div`
    width:100%;
    margin: 0 auto;

    display:flex;
    justify-content: space-between;
    align-content: center;

    flex-wrap:wrap;

    @media(max-width:1300px) {
        justify-content:center;
        flex-direction:column;
    }

    
`