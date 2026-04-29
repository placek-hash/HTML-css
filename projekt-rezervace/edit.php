<?php
include 'db.php';

$id = $_GET['id'] ?? 0;

$stmt = $conn->prepare("SELECT * FROM rezervace WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<title>Upravit rezervaci</title>
</head>
<body>

<h2>Upravit rezervaci</h2>

<form method="POST" action="update.php">

<input type="hidden" name="id" value="<?= $data['id'] ?>">

Jméno: <input type="text" name="jmeno" value="<?= $data['jmeno'] ?>"><br>
Email: <input type="email" name="email" value="<?= $data['email'] ?>"><br>
Datum: <input type="date" name="datum" value="<?= $data['datum'] ?>"><br>
Čas: <input type="time" name="cas" value="<?= $data['cas'] ?>"><br>
Osoby: <input type="number" name="osoby" value="<?= $data['osoby'] ?>"><br>

Poznámka:<br>
<textarea name="poznamka"><?= $data['poznamka'] ?></textarea><br>

Místo:
<select name="misto">
    <option value="venku" <?= $data['misto']=="venku"?"selected":"" ?>>Venku</option>
    <option value="uvnitr" <?= $data['misto']=="uvnitr"?"selected":"" ?>>Uvnitř</option>
</select><br><br>

<button type="submit">Uložit změny</button>

</form>

</body>
</html>