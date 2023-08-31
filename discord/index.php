<?php
require_once '../config/pdo_connection.php';
// Подключение к базе данных

// Получение IP-адреса посетителя
$ip = $_SERVER['REMOTE_ADDR'];

// Добавление записи о посещении в базу данных
$sql = "INSERT INTO visits (page, ip_address) VALUES ('/discord/index.php', '$ip')";
$pdo->query($sql);

// Получение количества уникальных посещений
$sql = "SELECT COUNT(DISTINCT ip_address) AS unique_visits FROM visits WHERE page = 'discord'";
$result = $pdo->query($sql);
$row = $result->fetch(PDO::FETCH_ASSOC);
$uniqueVisits = $row['unique_visits'];

// Получение количества всех посещений
$sql = "SELECT COUNT(*) AS total_visits FROM visits WHERE page = 'discord'";
$result = $pdo->query($sql);
$row = $result->fetch(PDO::FETCH_ASSOC);
$totalVisits = $row['total_visits'];

// Закрытие соединения с базой данных
$pdo = null;
header('Location: https://discord.com/users/658287767490527243');
?>