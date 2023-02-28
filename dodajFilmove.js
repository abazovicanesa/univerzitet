document.querySelector("#btnSave").addEventListener("click", createFilm);
function createFilm() {
  let naziv = document.querySelector("#naziv").value;
  let urlSlike = document.querySelector("#urlSlike").value;
  let datum = document.querySelector("#datum").value;
  let cijena = document.querySelector("#cijena").value;

  let data = "naziv=" + naziv + "&urlSlike=" + urlSlike + "&datum=" + datum + "&cijena=" + cijena;
  console.log(data);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let answer = JSON.parse(this.responseText);
      if (answer.success) {
        alert("Uspješno ste kreirali novi film!");
        location.reload();
      } else {
        alert(answer.message);
      }
    }
  };
  xhttp.open("POST", "./dodajFilmove.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data);
}
