<?php
session_start();

$servername = "localhost";
$username = "root"; // default username
$password = ""; // default password
$dbname = "sportsmen register"; // replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM registration WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $_SESSION['email'] = $email;
        echo "Login successful!";
        // Redirect to a logged-in page or perform necessary actions
    } else {
        echo "Invalid email or password";
        // Handle invalid login
    }
}

$conn->close();
?>
