
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;
var wordlist = [];

var genericGetRequest = function(URL,dat,cb){
    $.ajax({
        type:'GET',
        url:URL,
        data:{words:dat},
        dataType:"json",
        success:function(data){
            JSON.parse(cb(data));
    }});
};


$(document).ready(function(){
    var showRacks = function(rack){
        var getRackPossilities = function(rack){
            var wordList = [];
            var currentWord = "";
            var loop = function(rack,depth){
                if(depth<7){
                    for (let index = 0; index < rack.length; index++) {
                        var element = rack[index];
                        currentWord+=element;
                        wordList.push(currentWord);
                        loop(rack,depth+1);
                        currentWord = currentWord.slice(0,currentWord.length-1);
                        //double check the currWord is the right size idk if this work
                    }
                };
            }
            loop(rack,0);
            
            return wordList;
        
        }
        
        rackList = getRackPossilities(rack);
        console.log(rackList);
        rackList = JSON.stringify(rackList);
        console.log(rackList);
        /*   $("#bingos").html('');
           racks.map(rack=>{
               $("#bingos").append(`<li>${rack.rack}: <span class="answer hidden">${rack.words}</span></li>`);
           });
           $("#bingos li").on("click", function(evt){
               $(evt.currentTarget).find(".answer").toggleClass("hidden");
           });*/
           
        // racks.map(rack=>{
        //     $("#bingos").append(`<li>${rack.rack}: <span>${rack.words}</span></li>`);
        // });

        return rackList;
    };
    
    wordlist = showRacks(racks);
    
    
});




document.getElementById("generateRack").addEventListener('click', function(){
    var callback = function(data){
        console.log(data); 
        var words =[];
        data.forEach(element => {
            words.push(element);
        });
        console.log("words are"+data);
        words = words.map(function(words)
            {$("#wordList").append(`<li>${words}</span></li>`);});
        
    }
    var results = genericGetRequest("index.php",wordlist,callback);
});
document.getElementById("WordEntered").addEventListener('click',function(){
    if(!$("#GuessBox").is("empty")){
        //this needs to check current set of words;
    }
});