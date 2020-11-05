import styled from 'styled-components'
import {Link as LinkRouterDom} from 'react-router-dom'


export const Link = styled(LinkRouterDom)`
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