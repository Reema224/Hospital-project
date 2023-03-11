<?php
include('connect.php');
header('Access-Control-Allow-Origin:*');


// Fetch the list of departments from the database
$departments = array();
$query = "SELECT * FROM departments WHERE hospital_id = 1"; // assuming hospital_id = 1 is the hospital the patient wants to visit
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    $departments[] = $row;
  }
}

$selected_department_id = isset($_POST['department_id']) ? $_POST['department_id'] : '';
// $rooms = array();
// if ($selected_department_id) {
//   $query = "SELECT * FROM rooms WHERE department_id = $selected_department_id";
//   $result = mysqli_query($conn, $query);
//   if (mysqli_num_rows($result) > 0) {
//     while ($row = mysqli_fetch_assoc($result)) {
//       $rooms[] = $row;
//     }
//   }
// }

// // If the patient has selected a room, fetch the list of beds in that room
// $selected_room_id = isset($_POST['room_id']) ? $_POST['room_id'] : '';
// $beds = array();
// if ($selected_room_id) {
//   $query = "SELECT * FROM beds WHERE room_id = $selected_room_id";
//   $result = mysqli_query($conn, $query);
//   if (mysqli_num_rows($result) > 0) {
//     while ($row = mysqli_fetch_assoc($result)) {
//       $beds[] = $row;
//     }
//   }
// }

// Display the list of departments, rooms, and beds as dropdown menus
echo '<form method="POST">';
echo '<label for="department_id">Select a department:</label>';
echo '<select name="department_id" id="department_id">';
echo '<option value="">-- Select department --</option>';
foreach ($departments as $department) {
  echo '<option value="' . $department['id'] . '"';
  if ($department['id'] == $selected_department_id) {
    echo ' selected';
  }
  echo '>' . $department['name'] . '</option>';
}
echo '</select>';

// if ($selected_department_id) {
//   echo '<br><br>';
//   echo '<label for="room_id">Select a room:</label>';
//   echo '<select name="room_id" id="room_id">';
//   echo '<option value="">-- Select room --</option>';
//   foreach ($rooms as $room) {
//     echo '<option value="' . $room['id'] . '"';
//     if ($room['id'] == $selected_room_id) {
//       echo ' selected';
//     }
//     echo '>' . $room['number'] . '</option>';
//   }
//   echo '</select>';

//   if ($selected_room_id) {
//     $no_beds = $rooms[0]['no_beds'];
//     if ($no_beds > 1) {
//       echo '<br><br>';
//       echo '<label for="bed_id">Select a bed:</label>';
//       echo '<select name="bed_id" id="bed_id">';
//       echo '<option value="">---- Select bed --</option>';
// for ($i = 1; $i <= $no_beds; $i++) {
// $bed_available = true;
// foreach ($beds as $bed) {
// if ($bed['bed_number'] == $i) {
// $bed_available = false;
// break;
// }
// }
// if ($bed_available) {
// echo '<option value="' . $i . '">' . $i . '</option>';
// } else {
// echo '<option value="' . $i . '" disabled>Occupied</option>';
// }
// }
// echo '</select>';
// }
// }
// }

// echo '<br><br>';
// echo '<button type="submit" name="submit">Submit</button>';
// echo '</form>';


?>