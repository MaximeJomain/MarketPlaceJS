<?php

$db = new PDO('sqlite:marketPlaceDataBase.db');

function getCourse($id) {
    $request = $db->query("SELECT * FROM Courses WHERE id = :id");
    $request->bindValue(':id', $id);
    $response = $request->fetchAll();
    return $response;

};

var_dump(getCourse(1));

