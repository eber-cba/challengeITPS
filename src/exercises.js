// 1 - Create a function that takes an array of integers as its lone argument and returns an array containing the square of each value in the input.

// For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.

// For Testing:
// console.log(calculateSquare([2, 4, 6, 8, 10]));

const calculateSquare = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        result.push(array[i] * array[i]);
      }
    }
    //   console.log(result);
  };
  
  calculateSquare([1, 2, 4, 6]);
  
  // 2 - Create a function that takes an array of counter objects (see example) as its lone argument and returns the sum of all of the counters' `count` properties.
  
  // For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.
  
  // For Testing:
  // console.log(sumCounters([{count: 1}, {count: 2}, {count: 3}]));
  
  const sumCounters = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i].count;
    }
    //   console.log(result)
  };
  sumCounters([{ count: 1 }, { count: 2 }, { count: 3 }]);
  
  /*
  3
   Create a function that takes an object in the general shape of `movies` (see below) as the first argument,
   and the name of an actor as the second argument. 
   The function should return an object that is equivalent to
   the input, only with the given actor's name included in each movie's `actors` array. 
   If the name is already present, it should not be added again.
   The function should not mutate the input object, or any of its sub-structures.
   
   Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.
  
   For Testing:
   console.log(actorInMovies(movies, "Tom Cruise"));
  */
  // let movies = {
  //   movie: "Oblivion",
  //   actors: [
  //     "Tom Cruise",
  //     "Kelly McGillis",
  //     "Val Kilmer",
  //     "Anthony Edwards",
  //     "Tom Skerritt",
  //   ],
  // };
  
  let movies = {
    big: {
      actors: ["Elizabeth Perkins", "Robert Loggia"],
    },
  
    "forrest gump": {
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    },
  
    "cast away": {
      actors: ["Helen Hunt", "Paul Sanchez"],
    },
  };
  
  const actorInMovies = (object, nameActor) => {
    let newObject = JSON.parse(JSON.stringify(object));
  
    for (let i in newObject) {
      if (newObject[i].actors.indexOf(nameActor) == -1) {
        newObject[i].actors.push(nameActor);
        console.log(`${nameActor} does not exist, it will now be added`);
      } else {
        console.log(`${nameActor} already exists`);
      }
    }
    console.log(newObject);
  };
  actorInMovies(movies, "Tom Hanks");
  