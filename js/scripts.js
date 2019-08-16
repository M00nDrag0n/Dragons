$(document).ready(function(){
  $("#PersonalityQuiz").submit(function(event) {

    event.preventDefault();

    var answers=$(this).serializeArray();

    var scores = {
      ["result value"]: 0;
      ["result value"]: 0;
      ["result value"]: 0;
      ["result value"]: 0;
      ["result value"]: 0;
      ["result value"]: 0;

  };

  for (var answer of answers){
    scores[answer.value] +=1;
  }

  //console.log(scores);
  for(var dragon in scores){
    console.log(scores[dragon]);

  }

  var maxDragon = ["result value"]; //this refers to maximum score in result totals

  for(var dragon in scores){
    if scores[dragon] > scores[maxDragon]){
      maxDragon= dragon;
    }
    $("#personalityQuiz").css('display', 'none');
    $(".result#"+maxDragon).css('display', 'block');
  }

});

})
