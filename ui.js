class UI {
  constructor() {
    this.movieContainer = document.querySelector('#movieContainer');
    this.alert = document.querySelector('#alert');
  }

  clearContainer() {
    this.movieContainer.innerHTML = `
    <div class="card-body">
          <p class="lead">
          No movies found
          </p>
      </div>
    `;
  }
  showAlert(text) {
    this.alert.innerHTML = `${text} is not found.`;
  }
  showMovie(movie) {
    this.movieContainer.innerHTML = `
  <div class="card card-body">
      <div class="row">
        <div class="col-md-3">
        <img src="${movie.Poster}" class="img-thumbnail">
        <a target="_blank" href="https://www.imdb.com/title/${movie.imdbID}"><img style="height:50px; width:50px;" src="img/imdb.png"> </a>

        </div>
        <div class="col-md-9">
          <h4>${movie.Title}</h4>
          <ul class="list-group">
            <li class="list-group-item">
              Director : ${movie.Director}
            </li>
            <li class="list-group-item">
              Writer : ${movie.Writer}
            </li>
            <li class="list-group-item">
             Released : ${movie.Released}
            </li>
            <li class="list-group-item">
             Actors : ${movie.Actors}
            </li>
            <li class="list-group-item">
             Plot : ${movie.Plot}
            </li>
            <li class="list-group-item">
             Language : ${movie.Language}
            </li>
            <li class="list-group-item">
             Country : ${movie.Country}
            </li>
            <li class="list-group-item">
             IMDB Rating : ${movie.imdbRating}
            </li>




          </ul>
        </div>
      </div>
  </div>      
  
  `;
  }
}
