<?php
    $verb = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['PATH_INFO'];
    $data = json_decode($_GET['words']);
    


    //this is the basic way of getting a database handler from PDO, PHP's built in quasi-ORM
    $dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    
    
    
    
   
    $result = "Usage: GET /number[/:id], POST /number, PUT /number/:id, DELETE /number/:id";
    
    if($verb="GET"){

        $wordResult = array();
        
        foreach($data as $elem){
            echo json_encode("SELECT words from racks where rack='".$elem."'");
            $statement = $dbhandle->prepare("SELECT words from racks where rack='".$elem."'");
            echo json_encode($statement);

            $statement->execute();
            $queryResult = $statement->fetchAll(PDO::FETCH_ASSOC);
            // echo json_encode($queryResult);
            // $queryResult = $queryResult.explode("@@");
            // echo json_encode($queryResult);
            array_push($wordResult, $queryResult);
            echo json_encode($wordResult);
        }

        $result = $wordResult;
        
    
        

        //this part is perhaps overkill but I wanted to set the HTTP headers and status code
        //making to this line means everything was great with this request
        header('HTTP/1.1 200 OK');
        //this lets the browser know to expect json
        header('Content-Type: application/json');
        echo json_encode($result);
    }
   
       
        
        
        




//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    
    //this creates json and gives it back to the browser

?>