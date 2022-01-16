import React, { useState, useEffect } from "react";
import useFetch from "../../useFetch";
//import styled from '@emotion/styled';

const Card = () => {
  //Fetch
  const data = useFetch("https://rickandmortyapi.com/api/character");
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(data ? data.results : []);
  }, [data]);

  return (
    <div>
      {characters
        ? characters.map((character) => {
            return (
              <div key={character.id}>
                <figure>
                  <img src={character.image} alt={character.name} />
                </figure>
                <h2>{character.name}</h2>
              </div>
            );
          })
        : []}
    </div>
  );
};

export default Card;
