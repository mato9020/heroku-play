
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;

var genericGetRequest = function(URL,dat,cb){
    $.ajax({
        url:URL,
        data:{words:dat},
        dataType:"json",
        success:cb(dat)
    });
};

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

$(document).ready(function(){
    
    var showRacks = function(rack){
        rackList = getRackPossilities(rack);
        console.log(rackList);
        let x = new RegExp('/\\/');
        rackList = rackList.replace(x,'');
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
    var callback = function(data){
        data = data.map(rack=>{$("#wordList").append(`<li>${rack.words}</span></li>`);});
        
    }
    var rackJSON = JSON.stringify(showRacks(racks));
    var results = genericGetRequest("index.php",rackJSON,callback);
    
});




document.getElementById("generateRack").addEventListener('click', function(){
    
});
document.getElementById("WordEntered").addEventListener('click',function(){
    if(!$("#GuessBox").is("empty")){
        //this needs to check current set of words;
    }
});