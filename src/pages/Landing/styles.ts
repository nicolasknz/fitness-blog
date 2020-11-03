import styled from 'styled-components'

export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    background-color:red;
`;

export const ContentContainer = styled.div`
    width:100%;
`

export const PostsWrapper = styled.div`
    width:100%;

    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    border:1px solid black;
`