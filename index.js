
const charLimit = 7;
const Racks = document.getElementById("Racks");

var genericGetRequest = function(URL,data,callback){
    $.ajax({
        method: "GET",
        url: URL,
        data:{"rack":data},
        success: data=>{callback(data)}
    });
};
var wordList;
$(document).ready(function(){
    
    genericGetRequest("https://webservercpeg.herokuapp.com/index.php",
        document.getElementById("Rack").innerHTML,function(data){
            console.log(data);
            wordList = data;
        }
    );
    let showRacks = function(racks){
        /*   $("#bingos").html('');
           racks.map(rack=>{
               $("#bingos").append(`<li>${rack.rack}: <span class="answer hidden">${rack.words}</span></li>`);
           });
           $("#bingos li").on("click", function(evt){
               $(evt.currentTarget).find(".answer").toggleClass("hidden");
           });*/
           
        racks.map(rack=>{
            $("#bingos").append(`<li>${rack.rack}: <span>${rack.words}</span></li>`);
        });
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
