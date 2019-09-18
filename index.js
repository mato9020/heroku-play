
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;

var genericGetRequest = function(URL,data,callback){
    $.ajax({
        method: "GET",
        url: URL,
        data:{"rack":data},
        success: data=>{callback(data)}
    });
};
var getRackPossilities = function(rack,currentWord='',wordList=[]){
    if(currentWord.length<7){
        for (let index = 0; index < rack.length; index++) {
            var element = rack[index];
            currentWord.concat(element);
            wordList.push(currentWord);
            getRackPossilities(rack,currentWord,wordList);
            
        }
    };
    return wordList;
}

$(document).ready(function(){
    
    
    let showRacks = function(rack){
        var rackList = getRackPossilities(rack);
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
    };
    showRacks(racks);

});




document.getElementById("generateRack").addEventListener('click', function(){
    
});
document.getElementById("WordEntered").addEventListener('click',function(){
    if(!$("#GuessBox").is("empty")){
        //this needs to check current set of words;
    }
});