import React from 'react'

import Header from '../../components/header'
import banner from '../../assets/images/banner.jpg'
import Card from '../../components/card'

import girl from '../../assets/images/temp/girl.jpeg'
import eGirl from '../../assets/images/temp/e-girl.jpg'

import * as Styled from './styles'

const Home = () => {
    return (
        <Styled.LandingContainer className="container">
            <Header />
            <img src={banner} alt=""/>

            <main>
                <Card 
                    thumbnail={
                        {
                            image:girl,
                            alt: "Garota"
                        }
                    }
                    description="Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé."
                    author={
                        {
                            image:eGirl,
                            name: "Fernanda Melo"
                        }
                    }
                    releaseDate="25/10/2020"
                 
                />
            </main>
        </Styled.LandingContainer>
    )
}

export default Home