class Movie {
  constructor() {
    (this.clientid = ''), (this.clientSecret = '');
  }
  async getMovie(title) {
    const movieResponse = await fetch(
      `http://www.omdbapi.com/?apikey=3017fb1d&t=${title}`
    );
    const movie = await movieResponse.json();

    return {
      movie
    };
  }
}
