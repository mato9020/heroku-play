<?php
    $verb = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['PATH_INFO'];
    $data = json_decode($_POST['words']);
    


    //this is the basic way of getting a database handler from PDO, PHP's built in quasi-ORM
    $dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    
    
    
    
   
    $result = "Usage: GET /number[/:id], POST /number, PUT /number/:id, DELETE /number/:id";
    
    if($verb="GET"){
        echo json_encode("getting");
        echo json_encode($verb);

    }
    elseif($verb = "POST"){
        try{
            echo json_encode($data);
        }
        catch(Throwable $t){
            echo "caught exception";
        }
       /*
        if($data.isset()){
            
            foreach($data as $elem){
                $statement = $dbhandle->prepare("SELECT words from racks where rack='".$elem."'");
                $statement->execute();
                $wordResult .= $query->fetchAll(PDO::FETCH_ASSOC);
            }
            $result = $wordResult.explode("@@");
            

            //this part is perhaps overkill but I wanted to set the HTTP headers and status code
            //making to this line means everything was great with this request
            header('HTTP/1.1 200 OK');
            //this lets the browser know to expect json
            header('Content-Type: application/json');
            echo json_encode($result);
        }
        else{
            echo json_encode("failure at setting");
        }
        
        echo json_encode("posting");
        */
        
    }




//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    
    //this creates json and gives it back to the browser
    echo json_encode("hmmm");

?>