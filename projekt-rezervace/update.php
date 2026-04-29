<?php
include 'db.php';

$id = $_POST['id'];

$stmt = $conn->prepare("UPDATE rezervace SET jmeno=?, email=?, datum=?, cas=?, osoby=?, poznamka=?, misto=? WHERE id=?");
$stmt->bind_param("ssssissi",
    $_POST['jmeno'],
    $_POST['email'],
    $_POST['datum'],
    $_POST['cas'],
    $_POST['osoby'],
    $_POST['poznamka'],
    $_POST['misto'],
    $id
);

$stmt->execute();
$stmt->close();

$conn->close();

header("Location: admin.php");
exit;
?>