import React from "react";
import * as Styled from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = () => {
  return (
    <Styled.Container>
      <Styled.SearchBarContainer>
        <Styled.Input placeholder="O que você deseja saber?" />
        <Styled.Button>
      
            <AiOutlineSearch size="25px" color="#3d3b3b"/>
      
        </Styled.Button>
      </Styled.SearchBarContainer>
    </Styled.Container>
  );
};

export default TopBar;
