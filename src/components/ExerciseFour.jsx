import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
let movies = {
  big: {
    actors: ["Elizabeth Perkins", "Robert Loggia"],
  },

  "forrest gump": {
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  },

  "cast away": {
    actors: ["Helen Hunt", "Paul Sanchez", "Helen Hunt"],
  },
};
let array1 = [];

for (let i in movies) {
  array1.push(movies[i].actors);
}
let actorsArray1 = array1.join(",").split(",").sort();

// movies 2

let movies2 = (movies = {
  "good will hunting": {
    actors: ["Robin Williams", "Ben Affleck"],
  },

  "the departed": {
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
  },
});
let array2 = [];
for (let i in movies2) {
  array2.push(movies2[i].actors);
}
let actorsArray2 = array2.join(",").split(",").sort();

function esPrimero(valor, indice, lista) {
  return lista.indexOf(valor) === indice;
}

export default function ExerciseFour() {
  return (
    <div className="container">
      <h1>Exercise 4</h1>
      <p>
        Create a procedure that takes an object in the general shape of `movies`
        as its lone argument and appends an unordered list of every actor's name
        to the DOM's `body` element. The names in the list should be unique (no
        actor's name should appear in the list more than once). If the list
        element already exists in the DOM, the procedure should replace the
        existing list with a new one. Bonus points if the names are
        alphabetically sorted :)
      </p>

      <h2>Results: </h2>

      {actorsArray1.every(esPrimero)
        ? actorsArray1.map((actors, i) => {
            return (
              <ul striped key={i}>
                <li>{actors}</li>
              </ul>
            );
          })
        : actorsArray2.map((actors, i) => {
            return (
              <ul key={i}>
                <li>{actors}</li>
              </ul>
            );
          })}
      <Button variant="dark">View code</Button>
     
    </div>
  );
}
