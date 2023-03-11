<?php

// include('connect.php');

// $query = $conn->prepare('SELECT id, name FROM users');
// $query->execute();
// $array = $query->get_result();

// $response = array();
// while ($users = $array->fetch_assoc()) {
//     $response[] = $users;
// }

// // Separating users in the response
// $separated_response = array();
// foreach ($response as $user) {
//     $separated_response[] = array('user' => $user);
// }

// header('Content-Type: application/json');
// echo json_encode($separated_response);
include('connect.php');

$sql = "SELECT id, name FROM users";
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