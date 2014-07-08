//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}
 
	//what does this do?
	function deckGen() {
		var deck = [];
		var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
		for (var i = 0; i<suits.length; i++) {
			var suit = suits[i];
			for (var j = 0; j<13; j++) {
				deck.push({number: j+1, suit: suit});
			}
		}
		return deck;
	}
	
	//shuffle the deck
	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
	}
	
	
	//var deck = shuffleArray(deck);
	//console.log(deck);
	//return(deck);
	
	var cards_player_1 = shuffleArray( deckGen() );
	var cards_player_2 = shuffleArray( deckGen() );
	//divide out the cards into the two arrays
	
	for(var i=0; i<deckGen.length; i++){
			if(i % 2 === 0){
				cards_player_1.push(deckGen[i]);
			} else {
				cards_player_2.push(deckGen[i])	
			}
	}

	console.log(cards_player_1);
	console.log(cards_player_2);
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card_1, card_2) {
		if(card_1.number > card_2.number){
			return card_1;
		} else if(card_2.number >  card_1.number) {
			return card_2;
		} else {
			return false;
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		var card_1 = cards_player_1.shift();
		var card_2 = cards_player_2.shift();
		var winner = war(card_1, card_2);
		if(winner === card_1){
			cards_player_1.push(card_1, card_2);
		} else if(winner === card_2){
			cards_player_2.push(card_1, card_1);
		} else {
			cards_player_1.push(card_1);
			cards_player_2.push(card_2);
		}
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
		} else {
			
		}
	}
	advance();
 
 
	$(document).ready(function() {
		$(".btn").click(function() {
			play();
		});
	});