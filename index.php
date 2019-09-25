<?php
    $verb = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['PATH_INFO'];
    $data = json_decode($_GET['words']);


    //this is the basic way of getting a database handler from PDO, PHP's built in quasi-ORM
    $dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    
    
    function generate_rack($n){
        $tileBag = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ";
        $rack_letters = substr(str_shuffle($tileBag), 0, $n);
        
        $temp = str_split($rack_letters);
        sort($temp);
        return implode($temp);
    };
    $myrack = generate_rack(7);
    $racks = [];
    for($i = 0; $i < pow(2, strlen($myrack)); $i++){
        $ans = "";
        for($j = 0; $j < strlen($myrack); $j++){
            //if the jth digit of i is 1 then include letter
            if (($i >> $j) % 2) {
            $ans .= $myrack[$j];
            }
        }
        if (strlen($ans) > 1){
            $racks[] = $ans;	
        }
    }
    $racks = array_unique($racks);
    
   
    $result = "Usage: GET /number[/:id], POST /number, PUT /number/:id, DELETE /number/:id";
    
    if($verb="GET"){







        $wordResult = array();
        foreach($racks as $elem){
            $statement = $dbhandle->prepare("SELECT words from racks where rack='".$elem."'");
            $statement->execute();
            $queryResult = $statement->fetchAll(PDO::FETCH_ASSOC);
            array_push($wordResult, $queryResult);    
        }
        $result = "";
        for ($i=0; $i < count($wordResult); $i++) {
            $result.=$wordResult[$i][0]['words']."@@";
        }
        $result = explode("@@",$result);
        //this part is perhaps overkill but I wanted to set the HTTP headers and status code
        //making to this line means everything was great with this request
        header('HTTP/1.1 200 OK');
        //this lets the browser know to expect json
        header('Content-Type: application/json');
        echo json_encode(array('rack'=>$myrack,'words'=>$result));
    }
?>