import React from 'react'
import * as Styled from './styles'
import Header from '../../components/header'
import banner from '../../assets/images/banner.jpg'

const Home = () => {
    return (
        <Styled.LandingContainer className="container">
            <Header />
            <img src={banner} alt=""/>
            <main>
                <p>asmamsaismaismamssmia</p>
                <p>asmamsaismaismamssmia</p>
                <p>asmamsaismaismamssmia</p>
                <p>asmamsaismaismamssmia</p>
                <p>asmamsaismaismamssmia</p>
                <p>asmamsaismaismamssmia</p>
            </main>
        </Styled.LandingContainer>
    )
}

export default Home