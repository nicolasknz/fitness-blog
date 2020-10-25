import React from 'react'

import {BiShareAlt} from 'react-icons/bi'
import {GrFavorite} from 'react-icons/gr'


import * as Styled from './styles'

interface CardProps {
    thumbnail: {
        image:string,
        alt:string,
     
    },
    description: string,
    author : {
        image: string,
        name: string
    },
    releaseDate: string
}

const Card = ({thumbnail, description, author,releaseDate}: CardProps) => {
    return (
        <Styled.Card>
            <img src={thumbnail.image} alt={thumbnail.alt}/>
            <h3>13 melhores formas de comer manga com leite sem falecer hoje</h3>
            <span>{description}</span>

        <Styled.BottomContent>
            <Styled.Author>
                <img src={author.image}/>

                <div>
                    <strong>{author.name}</strong>
                    <span>{releaseDate}</span>
                </div>
            </Styled.Author>
            <Styled.ShareAndFavorite>
                <BiShareAlt color="000"/>
                <GrFavorite />
            </Styled.ShareAndFavorite>

        </Styled.BottomContent>
       

        </Styled.Card>
    )
}

export default Card