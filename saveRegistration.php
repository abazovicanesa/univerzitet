<?php
require_once("connect.php");
$conn = povezi();
$email = $_POST["email"];
$ime = $_POST["ime"];
$datum = $_POST["datum"];
$password = $_POST["password"];
$prezime = $_POST["prezime"];
$pol = $_POST["pol"];

if($conn){
    $sqlInsert = "INSERT INTO user (email,ime,prezime,datum,password,pol) VALUES ('$email', '$ime', '$prezime','$datum','$password', '$pol')";
if ($conn->query($sqlInsert) === TRUE) {
  echo '{"success": true}';
} else {
  echo '{"success" : false, "message" : "Greška prilikom registracije."}';
}
} else {
  echo '{"success" : false, "message" : "Greška prilikom konekcije. Provjerite konekcione parametre!"}';
}
?>