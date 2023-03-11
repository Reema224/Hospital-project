<?php
include('connect.php');

header('Access-Control-Allow-Origin:*');
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$dob = $_POST['dob'];
$type = $_POST['type'];

$check_email =  $conn->prepare('select email from users where email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

$hashed_password = password_hash($password, PASSWORD_BCRYPT);

if ($email_exists > 0) {
    $response['status'] = "failed";
} else {
    $query =  $conn->prepare('insert into users(name,email,password,dob,type) values(?,?,?,?,?)');
    $query->bind_param('ssssi', $name, $email, $hashed_password,$dob,$type);
    $query->execute();
    $response['status'] = "success";
}

echo json_encode($response);
?>