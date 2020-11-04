import styled from 'styled-components'

export const Card = styled.div`
    width: 35rem;
    margin-bottom:1rem;
    margin-top:5rem;
    img {
        width: 100%;
        height: 18rem;
        object-fit: cover;
    }
    h3 {
        font-size: 1.7rem;
        color: #000;
        font-weight: 600;
        margin-bottom: 1.1rem;
    }
   
`
export const DescriptionContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 10rem;
    /* text-align: center; */
`

export const BottomContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    
  
`
export const WrapperButtons = styled.div`
    width: 4rem;

    display: flex;
    justify-content: space-between;
`


export const Author = styled.div`
    display:flex;
    align-items: center;
    margin-top: 1.4rem;

    img {
        width: 4.9rem;
        height: 4.9rem;

        margin-right: 1.6rem;

        border-radius: 49%;
    }

    div {
        display:flex;
        flex-direction:column;

        strong {
            letter-spacing: 0.1rem;
            font-size: 1.4rem;
            color: #000;
            font-weight: 600;
        }
        span {
            font-size: 1.4rem;
        }
    }

`