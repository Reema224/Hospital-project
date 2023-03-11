<?php
include('connect.php');


$hospital_id = $_GET['hospital_id'];

$sql = "SELECT id, name FROM departments WHERE hospital_id=$hospital_id";
$result = $conn->query($sql);

$departments = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $department = array("id" => $row["id"], "name" => $row["name"]);
    array_push($departments, $department);
  }
} else {
  echo "0 results";
}
$conn->close();

echo json_encode($departments);
?>






