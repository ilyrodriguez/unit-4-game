$(document).ready(function() {

    var character = [{
        name: "Neo \n",
        healthPoints: 120,
        attackPower: 2,
        counterAttachPower: 15,
    },
    {
        name: "Trinity",
        healthPoints: 50,
        attackPower: 5,
        counterAttachPower: 20,
    },
    {
        name: "Morpheus",
        healthPoints: 100,
        attackPower: 1,
        counterAttachPower: 5,
    },
    {
        name: "Agent Smith",
        healthPoints: 150,
        attackPower: 5,
        counterAttachPower: 5,
    },
    {
        name: "The Twins",
        healthPoints: 120,
        attackPower: 2,
        counterAttachPower: 5,
    },
    {
        name: "Sentinel",
        healthPoints: 200,
        attackPower: 2,
        counterAttachPower: 10,
    }]


var heroeHealth = "";
var heroeAttack = "";
// var heroeCounter = "";
var villainHealth = "";
// var villainAttack = "";
var villainCounter = "";
var heroeName = "";
var villainName = "";
var counter = 1;
var fightWon = 0;

$("#neoB,#trinityB,#morpheusB,#smithB,#twinsB,#sentinelB").hide();
$(".attackBtn").hide();

function pointsHeroe(){
    $(".left").text(character[i].name + " Health Points " + character[i].healthPoints);
    heroeHealth= character[i].healthPoints;
    heroeAttack= character[i].attackPower;
}
function pointsVillan(){
    $(".right").text(character[i].name + " Health Points " + character[i].healthPoints);
    villainHealth= character[i].healthPoints;
    villainAttack= character[i].attackPower;
    villainCounter= character[i].counterAttachPower;
}

function reset() {
    $("#neoB, #trinityB,#morpheusB").hide();
    $("#smithB, #twinsB,#sentinelB").hide();
    $(".attackBtn").hide();
    $(".left").empty();
    $(".right").empty();
    $(".images").show().animate({ opacity: "1"});
    fightWon= 0;
    // $("#smith,#twins,#sentinel").animate({ opacity: "1" });
    // heroesHealth = "";
    // villainHealth = "";
}

$("#neo").click(function(){
    heroeName = "Neo";
    i=0; 
    pointsHeroe();
    $("#neo").hide();
    $("#neoB").show();
    $("#trinity").animate({ opacity: "0.5" });
    $("#morpheus").animate({ opacity: "0.5" });
    $("#trinityB").hide();
    $("#morpheusB").hide();
    $(".attackBtn").show();
})

$("#trinity").click(function(){
    heroeName = "Trinity";
    i=1; 
    pointsHeroe();
    $("#trinity").hide();
    $("#trinityB").show();
    $("#neo").animate({ opacity: "0.5" });
    $("#morpheus").animate({ opacity: "0.5" });
    $("#neoB").hide();
    $("#morpheusB").hide();
    $(".attackBtn").show();
})
$("#morpheus").click(function(){
    heroeName = "Morpheus";
    i=2; 
    pointsHeroe();
    $("#morpheus").hide();
    $("#morpheusB").show();
    $("#trinity").animate({ opacity: "0.5" });
    $("#neo").animate({ opacity: "0.5" });
    $("#trinityB").hide();
    $("#neoB").hide();
    $(".attackBtn").show();
})
$("#smith").click(function(){
    villainName = "Agent Smith";
    i=3; 
    pointsVillan();
    $("#smith").hide();
    $("#smithB").show();
    $("#twinsB").hide();
    $("#sentinelB").hide();
    $(".attackBtn").show();
})
$("#twins").click(function(){
    villainName = "The Twins";
    i=4; 
    pointsVillan();
    $("#twins").hide();
    $("#twinsB").show();
    $("#smithB").hide();
    $("#sentinelB").hide();
    $(".attackBtn").show();
})
$("#sentinel").click(function(){
    villainName = "Sentinel";
    i=5; 
    pointsVillan();
    $("#sentinel").hide();
    $("#sentinelB").show();
    $("#twinsB").hide();
    $("#smithB").hide();
    $(".attackBtn").show();
})

$(".attackBtn").click(function(){
    $(".left").text(heroeName + " Health Points: " + parseInt(heroeHealth-=villainCounter));
    if (counter && heroeHealth > 0 && parseInt((villainHealth -(heroeAttack * counter)))  > 0) {
        $(".right").text(villainName + " Health Points: " +  parseInt((villainHealth-=(heroeAttack * counter))));
    }
    else if (parseInt((villainHealth -(heroeAttack * counter))) <= 0) {
        $(".imagesCvillain").hide();
        fightWon++;
        if (fightWon === 3) {
            alert ("You Win!");
            reset();
        }else {
            alert("Choose another villain");
        }
    }
    else if (parseInt(heroeHealth - villainCounter) <= 0) {
        alert ("Game Over");
        reset();
    }
    else {
        $(".right").text(villainName + " Health Points: " + parseInt(villainHealth-=heroeAttack));
    }
    counter++;
})})
