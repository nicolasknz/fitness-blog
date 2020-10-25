import React from 'react'

import girl from '../../assets/images/temp/girl.jpeg'
import eGirl from '../../assets/images/temp/e-girl.jpg'

import {BiShareAlt} from 'react-icons/bi'
import {GrFavorite} from 'react-icons/gr'


import * as Styled from './styles'

const Card = () => {
    return (
        <Styled.Card>
            <img src={girl} alt=""/>
            <h3>13 melhores formas de comer manga com leite sem falecer hoje</h3>
            <span>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé.</span>

        <Styled.BottomContent>
            <Styled.Author>
                <img src={eGirl} alt=""/>

                <div>
                    <strong>Fernanda Melo</strong>
                    <span>23/10/2020</span>
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