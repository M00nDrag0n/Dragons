$(document).ready(function() {
  $("#personalityQuiz").submit(function(event) {

    event.preventDefault();

    var answers= $(this).serializeArray();

    var scores = {
      "Red": 0,
      "Orange": 0,
      "Yellow": 0,
      "Green": 0,
      "Blue": 0,
      "Purple": 0,
      "Black": 0,
      "White": 0,
      "Grey": 0,
      "Silver": 0,
      "Pink": 0,
      "Brown": 0,
      "Indigo": 0,
      "Turquoise": 0,
      "Gold": 0,
      "Magenta": 0,
      "Blue-Grey": 0,
      "Hatchling": 0,
      "Young": 0,
      "Teenager": 0,
      "Adolescent": 0,
      "Adult": 0,
      "Elder": 0,
      "Meat": 0,
      "Fish": 0,
      "Herb": 0,
      "Omni": 0,
      "Nectar": 0,
      "Forest": 0,
      "Cave": 0,
      "Jungle": 0,
      "Mountain": 0,
      "River": 0,
      "Ocean": 0,
      "Underground": 0,
      "House": 0,
      "Earth": 0,
      "Water": 0,
      "Fire": 0,
      "Storm": 0,
      "Darkness": 0,
      "Light": 0,
      "Ice": 0,
      "Metal": 0,
      "Electricity": 0,
      "Transformation": 0,
      "Time": 0,
      "Air": 0,
      "East": 0,
      "West": 0,
  };



  for (var answer of answers){
  scores[answer.value] += 1;
  }
  console.log(scores);
  for(var dragon in scores){


  }

  var maxDragon = "West";

  for(var dragon in scores){
    if (scores[dragon] > scores[maxDragon]){
      maxDragon = dragon;
  }
    $("#personalityQuiz").css('display', 'none');
    $(".result#"+maxDragon).css('display', 'block');

  }

  });
})
