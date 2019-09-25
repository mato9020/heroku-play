
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;
var words = [];

var showRacks = function(rack){
    rack["words"].filter(Boolean).map(racks=>
        {$("#bingos").append(`<li><span class = "answer hidden" id=${racks}>${racks}</span></li>`);});
    document.getElementById("Rack").innerHTML = rack["rack"];
};
var genericGetRequest = function(){
   
};
$("#WordEntered").on('click',function() {
    var enteredWord = document.getElementById("GuessBox").value.toUpperCase();
    
    var x = document.getElementById(enteredWord);
    if(x!=null){
        document.getElementById(enteredWord).style.display = "block";
    }
});

$("#generateRack").on('click', function(){
    
    
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
