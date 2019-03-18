$(document).ready(function() {

    var character = [{
        name: "Neo",
        healthPoints: 120,
        attackPower: 150,
        counterAttachPower: 10,
    },
    {
        name: "Trinity",
        healthPoints: 50,
        attackPower: 100,
        counterAttachPower: 20,
    },
    {
        name: "Morpheus",
        healthPoints: 100,
        attackPower: 110,
        counterAttachPower: 5,
    },
    {
        name: "Smith",
        healthPoints: 150,
        attackPower: 100,
        counterAttachPower: 15,
    },
    {
        name: "Twins",
        healthPoints: 120,
        attackPower: 120,
        counterAttachPower: 5,
    },
    {
        name: "Sentinel",
        healthPoints: 200,
        attackPower: 110,
        counterAttachPower: 10,
    }]

var heroeHealth = "";
var heroeAttack = "";
var heroeCounter = "";
var villainHealth = "";
var villainAttack = "";
var villainCounter = "";

$("#neoB,#trinityB,#morpheusB,#smithB,#twinsB,#sentinelB").hide();

function pointsHeroe(){
    $(".left").text(character[i].name + "Health Points " + character[i].healthPoints);
    heroeHealth= character[i].healthPoints;
    heroeAttack= character[i].attackPower;
}
function pointsVillan(){
    $(".right").text(character[i].name + "Health Points " + character[i].healthPoints);
    villainHealth= character[i].healthPoints;
    villainAttack= character[i].attackPower;
    villainCounter= character[i].counterAttachPower;
}

$("#neo").click(function(){
    i=0; pointsHeroe();
    $("#neo").animate({ opacity: "0.5" });
    $("#neoB").show();
    $("#trinity").animate({ opacity: "0.5" });
    $("#morpheus").animate({ opacity: "0.5" });
    $("#trinityB").hide();
    $("#morpheusB").hide();
})

$("#trinity").click(function(){
    i=1; pointsHeroe();
    $("#trinity").animate({ opacity: "0.5" });
    $("#trinityB").show();
    $("#neo").animate({ opacity: "0.5" });
    $("#morpheus").animate({ opacity: "0.5" });
    $("#neoB").hide();
    $("#morpheusB").hide();
})
$("#morpheus").click(function(){
    i=2; pointsHeroe();
    $("#morpheus").animate({ opacity: "0.5" });
    $("#morpheusB").show();
    $("#trinity").animate({ opacity: "0.5" });
    $("#neo").animate({ opacity: "0.5" });
    $("#trinityB").hide();
    $("#neoB").hide();
})
$("#smith").click(function(){
    i=3; pointsVillan();
    $("#smith").animate({ opacity: "0.5" });
    $("#smithB").show();
    $("#twins").animate({ opacity: "0.5" });
    $("#sentinel").animate({ opacity: "0.5" });
    $("#twinsB").hide();
    $("#sentinelB").hide();
})
$("#twins").click(function(){
    i=4; pointsVillan();
    $("#twins").animate({ opacity: "0.5" });
    $("#twinsB").show();
    $("#smith").animate({ opacity: "0.5" });
    $("#sentinel").animate({ opacity: "0.5" });
    $("#smithB").hide();
    $("#sentinelB").hide();
})
$("#sentinel").click(function(){
    i=5; pointsVillan();
    $("#sentinel").animate({ opacity: "0.5" });
    $("#sentinelB").show();
    $("#smith").animate({ opacity: "0.5" });
    $("#twins").animate({ opacity: "0.5" });
    $("#twinsB").hide();
    $("#smithB").hide();
})


});