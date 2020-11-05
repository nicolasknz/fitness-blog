import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    min-height: 9rem;
    max-height: 6rem;

    background:var(--color-background);

    display:flex;
    align-items:center;
    justify-content:center;

`

export const Input = styled.input`
    padding-left: 16px;
    height: 4rem;
    font-size: 1.2rem;
    /* border:1px solid #9c98a6; */
    border:none;
    width:87%;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #000;
  }
  &:focus {
        outline: none;
       
    }
`
export const SearchBarContainer = styled.div`
    display:flex;
    width:40rem;
    border:1px solid #9c98a6;


`
export const Button = styled.button`
    width:14%;
    border:none;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#eadb54;
 

    &:hover {
        background-color:#edd310;
    }
`

