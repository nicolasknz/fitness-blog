import React from 'react'

import * as Styled from './styles'

interface HeaderLinksProps {
    to: string,
    children: any
}

export const HeaderLink = ({to, children}:HeaderLinksProps) => {
    return (
        <Styled.Link href={`${to}`}>
            <Styled.Anchor>{children}</Styled.Anchor>
        </Styled.Link>
    )
}

export default HeaderLink