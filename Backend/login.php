<?php
include('connect.php');
header('Access-Control-Allow-Origin:*');

$email = $_POST['email'];
$password = $_POST['password'];

$query = $conn->prepare('select id,name,email,password,dob,type from users where email=?');
$query->bind_param('s', $email);
$query->execute();

$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($id, $name, $email, $hashed_password,$dob, $type);
$query->fetch();
$response = [];
if ($num_rows == 0) {
    $response['response'] = "user not found";
} else {
    
    if (password_verify($password, $hashed_password)) {
        $response['response'] = "logged in";
        $response['id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
        $response['dob'] = $dob;
        $response['type'] = $type;
        
    } else {
        $response["response"] = "Incorrect password";
    }
}

echo json_encode($response);
?>