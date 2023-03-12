<?php
include('connect.php');


$sql = "SELECT id, name FROM medications";
$result = $conn->query($sql);

$medications = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $medication = array("id" => $row["id"], "name" => $row["name"]);
    array_push($medications, $medication);
  }
} else {
  echo "0 results";
}
$conn->close();

echo json_encode($medications);
?>