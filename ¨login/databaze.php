<?php
$dsn = "mysqp:host=localhost;dbname=programovani";
$username = "alex";
$password = "alex1";

try {
    $db = new PDO(dsn: $dsn, username: $username, password: $password);
    echo "Jsme pripojeni k db";
}
catch (PDOExepction $e) {
    echo "nelze se pripojit k db: ", $e->getMessage();
    exit();
}

$sql = "INSERT INTO people (name, email)VALUES ('John Doe', 'john@example.com')";
$db->query($sql)
