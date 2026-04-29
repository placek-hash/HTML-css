<?php
include 'db.php';

$sql = "SELECT * FROM rezervace ORDER BY datum, cas";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Admin – Rezervace</title>

    <style>
        body {
            font-family: Arial;
            background: #f5f5f5;
            padding: 30px;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }

        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: center;
        }

        th {
            background: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background: #f2f2f2;
        }

        a {
            text-decoration: none;
            font-weight: bold;
        }

        .delete {
            color: red;
        }

        .edit {
            color: blue;
        }
    </style>
</head>
<body>

<h1>Seznam rezervací</h1>

<table>
    <tr>
        <th>ID</th>
        <th>Jméno</th>
        <th>Email</th>
        <th>Datum</th>
        <th>Čas</th>
        <th>Osoby</th>
        <th>Poznámka</th>
        <th>Místo</th>
        <th>Akce</th>
    </tr>

<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['jmeno']}</td>
            <td>{$row['email']}</td>
            <td>{$row['datum']}</td>
            <td>{$row['cas']}</td>
            <td>{$row['osoby']}</td>
            <td>{$row['poznamka']}</td>
            <td>{$row['misto']}</td>
            <td>
                <a class='delete' href='delete.php?id={$row['id']}' onclick=\"return confirm('Opravdu smazat?')\">❌</a>
                |
                <a class='edit' href='edit.php?id={$row['id']}'>✏️</a>
            </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='9'>Žádné rezervace</td></tr>";
}

$conn->close();
?>

</table>

</body>
</html>