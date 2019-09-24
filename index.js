
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;
var words = [];

var showRacks = function(rack){
    rack.map(racks=>
        {$("#bingos").append(`<li><span>${racks}</span></li>`);});
    
};
var genericGetRequest = function(){
   
};

$(document).ready(function(){
    
    var getWords = function(){
        var wordList = [];
        var currentWord = "";
        var loop = function(rack,depth){
            if(depth<7){
                for (let index = 0; index < rack.length; index++) {
                    var element = rack[index];
                    currentWord+=element;
                    var word = '"'+currentWord+'"';
                    wordList.push(word);
                    loop(rack,depth+1);
                    currentWord = currentWord.slice(0,currentWord.length-1);
                    //double check the currWord is the right size idk if this work
                }
            };
        }
        loop(racks,0);
        console.log(wordList);
        rackList = JSON.stringify(wordList);
        console.log(wordList);
    
        return wordList;
    }
    words = getWords();

    
});






$("#generateRack").on('click', function(){
    
    var url = "index.php"+"?"+"words="+words;
    
    url+="]";
    $.ajax({
        url:url,
        method:"GET",
        success:data=>{
            console.log("success");
            console.log(data);
            showRacks(data);
        }
    });
});
