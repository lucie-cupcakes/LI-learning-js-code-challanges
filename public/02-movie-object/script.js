// this time I am making the solution with plain Javascript prototype instead of 'class' keyword.

function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function () {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`;
}

const pulpFiction = new Movie("Pulp Fiction", "Quentin Tarantino", "Crime", 1994, 8.9);
console.log(pulpFiction.getOverview());

const matrix = new Movie("The Matrix", "The Wachowskis", "Sci-Fi", 1999, 8.7);
console.log(matrix.getOverview());
