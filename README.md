# challenge para ITPS
https://challenge-itps.herokuapp.com/

-EXERCISES-

Javascript

General Hints
For all exercises, please prefer readability/expressiveness over maximum algorithmic efficiency.
Use the DRY method, and good code practices improve your final test score.
      - You must use explanatory names for your variables.
      - Use ES6 syntax.
It is preferable that you use javascript's standard built-in objects.
Example:
Array, Map, Math.
 
You may add any other code such as functions, data structures, etc. that you may want in order to better complete an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.


Exercises
1 - Create a function that takes an array of integers as its lone argument and returns an array containing the square of each value in the input.
 
For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.

For Testing:
console.log(calculateSquare([2, 4, 6, 8, 10]));


2 - Create a function that takes an array of counter objects (see example) as its lone argument and returns the sum of all of the counters' `count` properties.
 
For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.

For Testing:
console.log(sumCounters([{count: 1}, {count: 2}, {count: 3}]));

3 - Create a function that takes an object in the general shape of `movies` (see below) as the first argument,and the name of an actor as the second argument. The function should return an object that is equivalent to
the input, only with the given actor's name included in each movie's `actors` array. If the name is already present, it should not be added again. The function should not mutate the input object, or any of its sub-structures.
 
Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.

For Testing:
console.log(actorInMovies(movies, "Tom Cruise"));


4 - Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends an unordered list of every actor's name to the DOM's `body` element.
 
The names in the list should be unique (no actor's name should appear in the list more than once).
If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
Bonus points if the names are alphabetically sorted :)

For Testing:
listActors(movies);

5 - Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e" or undefined if it does not exist. It should also log any potential retrieval errors using `console.error`.

Data Structure

General Hints
You may add any other code such as functions, data structures, etc. that you may want in order to better complete an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.

If you would like to test your solutions, you may call the "testSolutions" function defined at the bottom of this document. It is not meant to be comprehensive, but if the function completes without throwing any errors then your code passes all of the simple test cases .


