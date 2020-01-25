import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import {
  CharCard,
  CharImg,
  CharName,
  ListBody,
  CharSpec
} from "./Styles/Styles";

// TODO: Add useState to track data from useEffect

const List = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
        console.log(setCharacter);
      });
  }, []);

  return (
    <ListBody>
      <Route path="List" component={List} />
      {character.map(character => (
        <CharCard>
          <CharName>{character.name}</CharName>
          <CharImg src={character.image}></CharImg>
          <CharSpec>{character.species}</CharSpec>
        </CharCard>
      ))}
    </ListBody>
  );
};

export default List;
