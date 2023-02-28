<?php
require_once("connect.php");
$conn = povezi();
$email = $_GET["email"];
$password = $_GET["password"];
$id = "";
if($conn){
$sql = "SELECT * FROM user where email = '$email' and password = '$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $id = $row["id"];
  }
  $json = array("success"=>true, "id"=> $id);
  echo json_encode($json);
} else {
  echo '{"success" : false, "message" : "Ne postoji nalog sa navedenim kredencijalima"}';
}
} else {
  echo '{"success" : false, "message" : "Greška prilikom konekcije na bazu!"}';
}
?>