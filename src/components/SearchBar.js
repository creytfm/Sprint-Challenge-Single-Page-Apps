import React, { useState } from "react";
import axios from "axios";
import { useHistory, Route } from "react-router-dom";
import { CharCard, CharName, CharImg, CharSpec } from "./Styles/Styles";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  let history = useHistory();
  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/character/${name}`)
      .then(res =>
        res.data.id ? history.push(`/name/${res.data.id}`) : setErr(true)
      )
      .catch(err => console.log(err));
  };
  return (
    <div className="search-wrapper">
      <Route path="SearchBar" component={SearchBar} />
      <form className="search-bar" onSubmit={e => onSubmitHandler(e)}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="name of character"
        />
        <button type="submit" disabled={!name}>
          Search
        </button>
        {name.push(character => (
          <CharCard>
            <CharName>{character.name}</CharName>
            <CharImg src={character.image}></CharImg>
            <CharSpec>{character.species}</CharSpec>
          </CharCard>
        ))}
      </form>
      {err && <p>not a character</p>}
    </div>
  );
}

export default SearchBar;
