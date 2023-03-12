<?php
include('connect.php');


$department_id = $_GET['department_id'];

$sql = "SELECT id, number FROM rooms WHERE department_id=$department_id";
$result = $conn->query($sql);

$rooms = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $room = array("id" => $row["id"], "number" => $row["number"]);
    array_push($rooms, $room);
  }
} else {
  echo "0 results";
}
$conn->close();

echo json_encode($rooms);
?>