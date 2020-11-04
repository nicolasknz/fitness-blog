import React from 'react'

import * as Styled from './styles'

interface HeaderLinksProps {
    to: string
}

export const HeaderLink = ({to}:HeaderLinksProps) => {
    return (
        <Styled.Link to={to}></Styled.Link>
    )
}

export default HeaderLink