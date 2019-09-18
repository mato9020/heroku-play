
const charLimit = 7;
const racks = document.getElementById("Racks");

var genericGetRequest = function(URL,data,callback){
    $.ajax({
        method: "GET",
        url: URL,
        data:{"rack":data},
        success: data=>{callback(data)}
    });
};
var getRackPossilities = function(rackList,currentWord="",wordList=[]){
    if(currentWord.length<7){
        rackList.forEach(element=>{
            currentWord.append(element);
            wordList.append(currentWord);
            getRackPossilities(rackList,currentWord,wordList);
        });
    };
    return wordList;
}

var wordList;
$(document).ready(function(){
    
    
    let showRacks = function(racks){
        var rackList = getRackPossilities(racks);
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
    showRacks(wordList);

});




document.getElementById("generateRack").addEventListener('click', function(){
    
});
document.getElementById("WordEntered").addEventListener('click',function(){
    if(!$("#GuessBox").is("empty")){
        //this needs to check current set of words;
    }
});
