import styled from 'styled-components'

export const Card = styled.div`
    width: 35rem;
    img {
        width: 100%;
        height: 19rem;
        object-fit: cover;
    }
    h3 {
        font-size: 1.8rem;
        color: #000;
        font-weight: 600;
        margin-bottom: 1.2rem;
    }
`

export const BottomContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const ShareAndFavorite = styled.div`
    width: 4rem;

    display: flex;
    justify-content: space-between;
`


export const Author = styled.div`
    display:flex;
    align-items: center;
    margin-top: 1.3rem;

    img {
        width: 4.8rem;
        height: 4.8rem;

        margin-right: 1.5rem;

        border-radius: 50%;
    }

    div {
        display:flex;
        flex-direction:column;

        strong {
            letter-spacing: 0.1rem;
            font-size: 1.3rem;
            color: #000;
            font-weight: 600;
        }
        span {
            font-size: 1.3rem;
        }
    }

`