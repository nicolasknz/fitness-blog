import styled from 'styled-components'
import {default as NextLink} from 'next/link'



export const Link = styled(NextLink)`
    a {


    }
   

`

export const Anchor = styled.a`
        text-decoration:none;

            
        height:5rem;
        width:11rem;

        display:flex;
        align-items:center;
        justify-content:center;

        transition:background-color 0.4s;

        &:hover {
        background-color:#000;
     
        div {
            transition:color 0.4s;
            color:#fff;
          
        }
       
    }

`