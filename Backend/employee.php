<?php

include('connect.php');

$sql = "SELECT id, name FROM users WHERE type=2";
$result = $conn->query($sql);

$users = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $user = array("id" => $row["id"], "name" => $row["name"]);
    array_push($users, $user);
  }
} else {
  echo "0 results";
}
$conn->close();

echo json_encode($users);


?>