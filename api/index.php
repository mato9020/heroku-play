<?php
//If we get here uri should be "/api/index.php/" or some other type of request to "/api/"


$routes = explode("/", $uri);
console.log($routes);
$dbhandle = new PDO("sqlite:basicdatabase.db") or die("Failed to open DB");
if (!$dbhandle) die ($error);
$results = "Usage: GET /number[/:id], POST /number, PUT /number/:id, DELETE /number/:id";


if($verb="POST"){
    $results = "ok";
}
elseif($verb = "GET"){
    $results= "nok";
}
header('HTTP/1.1 200 OK');
header('Content-Type: application/json');
echo json_encode($results);

?>
