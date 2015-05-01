var one = $("#1")
var two = $("#2")
var three = $("#3")
var four = $("#4")
var five = $("#5")
var six = $("#6")
var seven = $("#7")
var eight = $("#8")
var nine = $("#9")

var boardSquares = [one, two, three, four, five, six, seven, eight, nine];
var player = 1

for (var i = 0; i < boardSquares.length, i++){
	
}

//square one
one.click(function(){
	if (player === 1){
		one.text("^X^");
		player = 2;
	}
	else {
		one.text("^0^");
		player = 1;
	}
});

//square one