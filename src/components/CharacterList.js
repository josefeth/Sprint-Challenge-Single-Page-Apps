import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const H2 = styled.h2`  
    text-align:center;
    font-size:3rem;
`;
const Div = styled.div`
text-align:center;
font-size:1rem;

`;
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([])



  const search = charArr => {
      updateData(charArr)

  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      updateData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list">      
      <H2>Character List</H2>
      <Div>
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}</Div>
    </section>
  );
}
