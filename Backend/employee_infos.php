<?php
include('connect.php');

header('Access-Control-Allow-Origin:*');
$id = $_POST['id'];
$user_id = $_POST['user_id'];
$hospital_id = $_POST['hospital_id'];
$ssn= $_POST['ssn'];
$position= $_POST['position'];
$date_joined= $_POST['date_joined'];
$date_left= $_POST['date_left'];


$query =  $conn->prepare('insert into employee_infos(id,user_id,hospital_id,ssn,position,date_joined ,date_left) values(?,?,?,?,?,?,?)');
$query->bind_param('iiissss',$id, $user_id, $hospital_id, $ssn,$position,$date_joined,$date_left);
$query->execute();
$response['status'] = "success";


echo json_encode($response);

?>