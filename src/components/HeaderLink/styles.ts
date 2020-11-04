import styled from 'styled-components'
import {Link as LinkRouterDom} from 'react-router-dom'


export const Link = styled(LinkRouterDom)`
 text-decoration:none;
    &:hover {
       div {
           color:#fff;
           background-color:#000;
       }
    }
`