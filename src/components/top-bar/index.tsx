import React, {useState} from "react";

import { AiOutlineSearch } from "react-icons/ai";

import * as Styled from "./styles";

const TopBar = () => {
    const [search, setSearch] = useState("")
    console.log(search)

    const handleInput = (e:React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
        console.log(search)
    }

    const handleClick = () => {
        console.log(search)
    }

  return (
    <Styled.Container>
      <Styled.SearchBarContainer>
        <Styled.Input 
            placeholder="O que você deseja saber?" 
            onChange={handleInput}
        />
        <Styled.Button onClick={handleClick}>

            <AiOutlineSearch size="25px" color="#3d3b3b"/>
      
        </Styled.Button>
      </Styled.SearchBarContainer>
    </Styled.Container>
  );
};

export default TopBar;
