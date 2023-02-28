<?php
require_once("connect.php");
$conn = povezi();
$naziv = $_POST["naziv"];
$urlSlike = $_POST["urlSlike"];
$datum = $_POST["datum"];
$cijena = $_POST["cijena"];

if($conn){
    $sqlInsert = "INSERT INTO filmovi (naziv,urlSlike,datumPrikazivanja,cijena) VALUES ('$naziv', '$urlSlike', '$datum','$cijena')";
if ($conn->query($sqlInsert) === TRUE) {
  echo '{"success": true}';
} else {
  echo '{"success" : false, "message" : "Greška prilikom registracije."}';
}
} else {
  echo '{"success" : false, "message" : "Greška prilikom konekcije. Provjerite konekcione parametre!"}';
}
?>