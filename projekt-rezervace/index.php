<?php

include 'db.php';

$jmeno = $_POST['jmeno'] ?? '';
$email = $_POST['email'] ?? '';
$datum = $_POST['datum'] ?? '';
$cas = $_POST['cas'] ?? '';
$osoby = $_POST['osoby'] ?? '';
$poznamka = $_POST['poznamka'] ?? '';
$misto = $_POST['misto'] ?? '';

if ($jmeno && $email && $datum && $cas && $osoby && $misto) {

    $stmt = $conn->prepare("INSERT INTO rezervace (jmeno, email, datum, cas, osoby, poznamka, misto) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssiss", $jmeno, $email, $datum, $cas, $osoby, $poznamka, $misto);

    if ($stmt->execute()) {
        echo "<h2>Rezervace uložena!</h2>";
        echo "Jméno: $jmeno <br>";
        echo "Datum: $datum <br>";
        echo "Čas: $cas <br>";
        echo "Počet osob: $osoby <br>";
        echo "Místo: " . ($misto === "venku" ? "Venku" : "Uvnitř");
    } else {
        echo "Chyba: " . $stmt->error;
    }

    $stmt->close();

} else {
    echo "Vyplň všechna pole!";
}
 
$conn->close();
?>