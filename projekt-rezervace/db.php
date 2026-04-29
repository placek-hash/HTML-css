<?php
$servername = "localhost";
$username = "root";       // zkontroluj své přihlašovací údaje
$password = "";           // heslo k DB
$dbname = "restaurace";

// Vytvoření připojení
$conn = new mysqli($servername, $username, $password, $dbname);

// Kontrola připojení
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>