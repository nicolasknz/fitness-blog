import React from 'react'
import * as Styled from './styles'
import Header from '../../components/header'
import banner from '../../assets/images/banner.jpg'
import Card from '../../components/card'

const Home = () => {
    return (
        <Styled.LandingContainer className="container">
            <Header />
            <img src={banner} alt=""/>

            <main>
                <Card/>
            </main>
        </Styled.LandingContainer>
    )
}

export default Home