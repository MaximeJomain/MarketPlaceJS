<?php

if (isset($_POST['id'])) {
    echo json_encode(getCourseById($_POST['id']));
} else {
    echo json_encode(getAllCourses());
}


function getAllCourses() {
    $db = new PDO('sqlite:marketPlaceDataBase.db');

    $request = $db->query("SELECT * FROM Courses");
    $response = $request->fetchAll();
    return $response;
}

function getCourseById($id) {
    $db = new PDO('sqlite:marketPlaceDataBase.db');

    $request = $db->query("SELECT * FROM Courses WHERE id = ".$id);
    $response = $request->fetchAll();
    return $response;
}