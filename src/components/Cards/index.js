import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card";
//import styled from '@emotion/styled';

const numbers = [1, 2, 3, 4, 5, 6];
const lessThan4 = numbers.filter((number) => number < 4);

const people = [{ age: 1 }, { age: 2 }, { age: 3 }, { age: 4 }];
const youngerThan3 = people.filter((person) => person.age < 3);
console.log(youngerThan3);

const Cards = () => {
  //Fetch
  const data = useFetch("https://rickandmortyapi.com/api/character");

  const [filter, setFilter] = useState(true);
  const toggleFilter = () => {
    //setFilter(filter ? false : true); --> lange Version, kurze:
    setFilter(!filter);
  };

  const men = data
    ? data.results.filter((character) => character.gender === "Male")
    : null;
  const women = data
    ? data.results.filter((character) => character.gender === "Female")
    : null;
  console.log(filter);
  
  return (
    <div>
      <div>
        <label>
          Filter:
          <input type="checkbox" checked={filter} onChange={toggleFilter} />
        </label>
      </div>
      {data
        ? (filter? men : women).map((character) => {
            return (
              <Card
                key={character.id}
                image={character.image}
                name={filter ? "boo" : character.name}
              />
            );
          })
        : null}
    </div>
  );
};

export default Cards;
