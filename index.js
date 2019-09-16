
const charLimit = 7;
const Racks = $.getElementById("Racks");

var genericGetRequest = function(URL,data,callback){
    $.ajax({
        method: "GET",
        url: URL,
        data:{"word":data},
        success: data=>{callback(data)}
    });
};
var getRackPossilities = function(rackList,currentWord,wordList){
    if(currentWord.length<7){
        rackList.array.forEach(element => {
            currentWord.concat(rackList[currentWord.length]);
            getRackPossilities(rackList,currentWord,wordList);
            var results = genericGetRequest()
        });
    }

    
}
$(document).ready(function(){
    let showRacks = function(racks){
        $("#bingos").html('');
        racks.map(rack=>{
            $("#bingos").append(`<li>${rack.rack}: <span class="answer hidden">${rack.words}</span></li>`);
        });
        $("#bingos li").on("click", function(evt){
            $(evt.currentTarget).find(".answer").toggleClass("hidden");
        });
    };
});




document.getElementById("generateRack").addEventListener('click', function(){
    
});
document.getElementById("WordEntered").addEventListener('click',function(){
    if(!$("#GuessBox").is("empty")){
        //this needs to check current set of words;
    }
});
