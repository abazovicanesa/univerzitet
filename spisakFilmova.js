loadTopMovies();
function loadTopMovies() {
  let topMovies = document.querySelector("#topMovies");
  let url = "./spisakFilmova.php";
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    let answer = JSON.parse(this.responseText);
    if (answer.success) {
      let data = answer.data;
      data.forEach((film) => {
        topMovies.insertAdjacentHTML(
          "beforeend",
          '<div class="col-4">' +
            '<img src="' +
            film.urlSlike +
            '" alt="" />' +
            "<p>POČETAK PRIKAZIVANJA FILMA: " +
            film.datumPrikazivanja +
            "</p>" +
            "<h4>" +
            film.naziv +
            "</h4>" +
            '<div class="rating">' +
            '<i class="fa-solid fa-ticket"></i>' +
            "</div>" +
            "</div>"
        );
      });
      console.log(answer);
    }
  };
  xmlhttp.open("GET", url);
  xmlhttp.send();
}
