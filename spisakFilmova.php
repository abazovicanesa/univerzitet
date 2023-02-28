<?php
require_once("connect.php");
$conn = povezi();
$rowFinal = [];
if($conn){
$sql = "SELECT * FROM filmovi";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    array_push($rowFinal,$row);
  }
  $json = array("success"=>true, "data"=>$rowFinal);
  echo json_encode($json);
} else {
  echo '{"success" : false}';
}
} else {
  echo '{"success" : false}';
}
?>