const movie = new Movie();
const ui = new UI();

const searchMovie = document.querySelector('#searchMovie');

searchMovie.addEventListener('keyup', event => {
  ui.alert.innerHTML = '';
  let text = event.target.value;

  if (text !== '' && text.length >= 3) {
    movie.getMovie(text).then(res => {
      if (res.movie.Response === 'True') {
        ui.showMovie(res.movie);
      } else {
        ui.showAlert(text);
        ui.clearContainer();
      }
    });
  } else {
    ui.clearContainer();
  }
});
