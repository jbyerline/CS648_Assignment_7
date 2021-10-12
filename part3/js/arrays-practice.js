//STEP 01
const favoriteMovies = ["Transformers", "Fantastic Beasts", "Avengers: Age of Ultron", "Thor Ragnarok", "It's a Wonderful Life"];
window.console.log(favoriteMovies[1]);

//STEP 02

let favoriteMovies = [5];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
window.console.log(favoriteMovies[0]);


//STEP 03

const favoriteMovies = ["Transformers", "Fantastic Beasts", "Avengers: Age of Ultron", "Thor Ragnarok", "It's a Wonderful Life"];
favoriteMovies.splice(2, 0, "Harry Potter");
window.console.log(favoriteMovies.length);


//STEP 04

let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
delete favoriteMovies[0];
window.console.log(favoriteMovies);


//STEP 05
let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";

for (let i = 0; i < favoriteMovies.length; i++) {
    window.console.log(favoriteMovies[i]);
}

//STEP 06

let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";

for (let movie in favoriteMovies) {
    if (favoriteMovies.hasOwnProperty(movie)) {
        window.console.log(favoriteMovies[movie]);
    }
}


//STEP 07

let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";
favoriteMovies.sort();

for (let movie in favoriteMovies) {
    if (favoriteMovies.hasOwnProperty(movie)) {
        window.console.log(favoriteMovies[movie]);
    }
}

//STEP 08
let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";

window.console.log("Movies I like:\n\n");

for (let movie in favoriteMovies) {
    if (favoriteMovies.hasOwnProperty(movie)) {
        window.console.log(favoriteMovies[movie]);
    }
}

let leastFavMovies = [];
leastFavMovies[0] = "Halloween 1";
leastFavMovies[1] = "Halloween 2";
leastFavMovies[2] = "Halloween 3";

window.console.log("\n\nMovies I regret watching:\n\n");

for (let movie in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(movie)) {
        window.console.log(leastFavMovies[movie]);
    }
}

//STEP 09

let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";

let leastFavMovies = [];
leastFavMovies[0] = "Halloween 1";
leastFavMovies[1] = "Halloween 2";
leastFavMovies[2] = "Halloween 3";

let movies = favoriteMovies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (let movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        window.console.log(movies[movies]);
    }
}


//STEP 10

let favoriteMovies = [];
favoriteMovies[0] = "Transformers";
favoriteMovies[1] = "Fantastic Beasts";
favoriteMovies[2] = "Avengers: Age of Ultron";
favoriteMovies[3] = "Thor Ragnarok";
favoriteMovies[4] = "It's a Wonderful Life";
favoriteMovies[5] = "Harry Potter";
favoriteMovies[6] = "The Simpsons Movie";

let leastFavMovies = [];
leastFavMovies[0] = "Halloween 1";
leastFavMovies[1] = "Halloween 2";
leastFavMovies[2] = "Halloween 3";

let movies = favoriteMovies.concat(leastFavMovies);

window.console.log(movies.pop());
