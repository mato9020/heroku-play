
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;


var showRacks = function(rack){
    rack.map(racks=>
        {$("#bingos").append(`<li><span>${racks}</span></li>`);});
    
};
var genericGetRequest = function(){
   
};
var getWords = function(){
    var wordList = [];
    var currentWord = "";
    var loop = function(rack,depth){
        if(depth<7){
            for (let index = 0; index < rack.length; index++) {
                var element = rack[index];
                currentWord+=element;
                var sortedWord = currentWord.split('').sort().join('');
                if(wordList.indexOf(sortedWord)===1){
                    wordList.push(sortedWord);
                }
                loop(rack,depth+1);
                currentWord = currentWord.slice(0,currentWord.length-1);
                //double check the currWord is the right size idk if this work
            }
        };
    }
    loop(racks,0);
    rackList = JSON.stringify(wordList);
    console.log(wordList);

    return wordList;
}
$(document).ready(function(){
    
    
    
    
});




$("#generateRack").on('click', function(){
    let data = getWords();
    console.log("index.php");
    $.ajax({
        url:"index.php",
        method:"GET",
        success:data=>{
            console.log("success");
            console.log(data);
            showRacks(data);
        }
    });
});
