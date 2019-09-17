<?php
    $verb = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['PATH_INFO'];
    $data = $_POST['rack'];
    //this is the basic way of getting a database handler from PDO, PHP's built in quasi-ORM
    $dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    if (!$dbhandle) die ($error);
    
    /*
    
    var getRackPossilities = function(rackList,currentWord,wordList){
        if(currentWord.length<7){
            rackList.array.forEach(element => {
            currentWord.concat(rackList[currentWord.length]);
            getRackPossilities(rackList,currentWord,wordList);
            var results = genericGetRequest()
        });
    }

    
}
    */
    $query = "";
    
    function post_builder($rack,$currWord, $combinations = array()) {
        if($currWord<=7){
            foreach($elem as $rack){
                $currWord .= $elem;
                $query = "select words from racks where rack =" . $currWord;
                $result = $dbhandle->prepare($query)->execute();
                if($result.isset()){
                    $combinations.=$result;
                }
                post_builder(($rack,$currWord, $combinations);

            }
        }
        # if it's the first iteration, the first set 
        # of combinations is the same as the set of characters
        
        return $combinations;
    }
   
    $results = "Usage: GET /number[/:id], POST /number, PUT /number/:id, DELETE /number/:id";
    $query = "";
//     function sampling($chars, $size, $combinations = array()) {

//     # if it's the first iteration, the first set 
//     # of combinations is the same as the set of characters
//     if (empty($combinations)) {
//         $combinations = $chars;
//     }

//     # we're done if we're at size 1
//     if ($size == 1) {
//         return $combinations;
//     }

//     # initialise array to put new values in
//     $new_combinations = array();

//     # loop through existing combinations and character set to create strings
//     foreach ($combinations as $combination) {
//         foreach ($chars as $char) {
//             $new_combinations[] = $combination . $char;
//         }
//     }

//     # call same function again for the next iteration
//     return sampling($chars, $size - 1, $new_combinations);

// }
    if($verb="POST"){
        $results = post_builder()
    }
    if($verb = "GET"){

    }



    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    //this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);

?>