import React from 'react'

import Header from '../../components/header'
import banner from '../../assets/images/banner.jpg'
import Card from '../../components/card'


import * as Styled from './styles'

const Home = () => {
    return (
        <Styled.LandingContainer className="container">
            <Header />
            <img src={banner} alt=""/>

            <main>
           
            </main>
        </Styled.LandingContainer>
    )
}

export default Home