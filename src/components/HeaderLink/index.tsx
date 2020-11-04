import React from 'react'
import {Link} from 'react-router-dom'

interface HeaderLinksProps {
    to: string
}

export const HeaderLink = ({to}:HeaderLinksProps) => {
    return (
        <Link to={to}></Link>
    )
}

export default HeaderLink