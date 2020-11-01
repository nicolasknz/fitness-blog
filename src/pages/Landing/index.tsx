import React from 'react'

import Header from '../../components/header'
import banner from '../../assets/images/banner.jpg'
import Card from '../../components/card'

import {posts} from '../../utils/posts'

import * as Styled from './styles'

interface CardProps {
    thumbnail: {
        image:string,
        alt:string,
     
    },
    description: string,
    title: string,
    author : {
        image: string,
        name: string
    },
    releaseDate: string
}

const Home = () => {
    return (
        <Styled.LandingContainer className="container">
            <Header />
            <img src={banner} alt=""/>

            <main>
                {posts.map(({title,thumbnail,description,author,releaseDate}:CardProps,index) => {
                        return (
                            <Card 
                            thumbnail={
                                {
                                    image:thumbnail.image,
                                    alt: thumbnail.alt
                                }
                            }
                            title={title}
                            description={description}
                            author={
                                {
                                    image:author.image,
                                    name: author.name
                                }
                            }
                            releaseDate={releaseDate}
                            key={index}
                         
                        />
                        )
                })}
            </main>
        </Styled.LandingContainer>
    )
}

export default Home