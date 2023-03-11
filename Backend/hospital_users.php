<?php
include('connect.php');

header('Access-Control-Allow-Origin:*');
$user_id = $_POST['user_id'];
$hospital_id = $_POST['hospital_id'];
$is_active = $_POST['is_active'];
$date_joined = $_POST['date_joined'];
$date_left= $_POST['date_left'];

$check_id =  $conn->prepare('select user_id from hospital_users where user_id=?');
$check_id->bind_param('i', $user_id);
$check_id->execute();
$check_id->store_result();
$id_exists = $check_id->num_rows();


if ($id_exists > 0) {
    $response['status'] = "failed";
} else {

$query =  $conn->prepare('insert into hospital_users(user_id,hospital_id,is_active,date_joined ,date_left) values(?,?,?,?,?)');
$query->bind_param('iisss', $user_id, $hospital_id, $is_active,$date_joined,$date_left);
$query->execute();
$response['status'] = "success";

}
echo json_encode($response);

?>