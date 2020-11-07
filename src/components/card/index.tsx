import React from "react";

import { BiShareAlt } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

import * as Styled from "./styles";

interface CardProps {
  thumbnail: {
    image: string;
    alt: string;
  };
  description: string;
  title: string;
  author: {
    image: string;
    name: string;
  };
  releaseDate: string;
}

const Card = ({
  thumbnail,
  description,
  title,
  author,
  releaseDate,
}: CardProps) => {
  return (
    <Styled.Card>
      <img src={thumbnail.image} alt={thumbnail.alt} />
      <h3>{title}</h3>
      <Styled.DescriptionContainer>
        <span>{description}</span>
      </Styled.DescriptionContainer>

      <Styled.BottomContent>
        <Styled.Author>
          <img src={author.image} />

          <div>
            <strong>{author.name}</strong>
            <span>{releaseDate}</span>
          </div>
        </Styled.Author>
        <Styled.WrapperButtons>
          <BiShareAlt color="000" />
          <GrFavorite />
        </Styled.WrapperButtons>
      </Styled.BottomContent>
    </Styled.Card>
  );
};

export default Card;
