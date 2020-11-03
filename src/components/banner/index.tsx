import React from 'react'
import * as Styled from './styles'
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <Styled.Container>
            <img src={banner}/>
        </Styled.Container>
    )
}

export default Banner