const { Numbers }=require('./utilities/allCards');
const {destributeCardsToPlayers}=require('./utilities/shuffleAndDistributeCards')



//utilities
function sortCards(cardsToSort) {
  cardsToSort.sort((a, b) => {
    return Numbers.indexOf(a) - Numbers.indexOf(b);
  });
}

function checkPlayerCardsWithHands(playerCards, CardsToMatch) {
  for (var i = 0; i < playerCards.length; i++) {
    if (CardsToMatch.has(playerCards[i])) {
      return 1;
    }
  }
  return 0;
}

function checkUniqueInRangeArray(i, j, arrayTocheck) {
  i++;
  for (; i <= j; i++) {
    if (Numbers.indexOf(arrayTocheck[i]) - Numbers.indexOf(arrayTocheck[i - 1]) != 1) {
      return false;
    }
  }
  return true;
}


//CardChecking functions

//check royal flush
function checkRoyalFlush(CardsArray, Playercards) {
  const cardsToMatchSet = new Set(['A', '10', 'J', 'Q', 'K']);
  const cardType = CardsArray[CardsArray.length - 1];
  CardsArray.pop();
  const playercardsOftypeCardType = Playercards[cardType];
  const flag = checkPlayerCardsWithHands(playercardsOftypeCardType, cardsToMatchSet) // add this to check if player has contribute to the result or not
  const lengtOfCardsArray = CardsArray.length;
  if (CardsArray[0] == 'A' && CardsArray[lengtOfCardsArray - 1] == 'K' && CardsArray[lengtOfCardsArray - 2] == 'Q' && CardsArray[lengtOfCardsArray - 3] == 'J' && CardsArray[lengtOfCardsArray - 4] == '10') {
    return true;
  }
  return false;
}

//check straight flush

function checkStraightFlush(CardsArray, Playercards) {
  var i = 0;
  var j = 4;
  const cardType = CardsArray[CardsArray.length - 1];
  CardsArray.pop();

  // var flag1 = 0;
  // var begginingIndex = 0;
  // var endingIndex = 0;
  while (j < CardsArray.length) {

    if ((Numbers.indexOf(CardsArray[j]) - Numbers.indexOf(CardsArray[i]) + 1) == 5) {
      return true;
      // begginingIndex = i;
      // endingIndex = j;
      // flag1 = 1;
      // break;
    }
    i++;
    j++;
  }

  return false;

  // remove comments to check if player contributed to cards or not

  // if (begginingIndex == endingIndex) {
  //   return false;
  // }

  // const cardsToMatchSet = new Set(CardsArray.slice(begginingIndex, begginingIndex + 5))
  // // console.log("cardsToMatchSet",cardsToMatchSet);
  // // console.log(Playercards[cardType]);
  // const playercardsOftypeCardType = Playercards[cardType];
  // const flag2 = checkPlayerCardsWithHands(playercardsOftypeCardType, cardsToMatchSet)
  // return flag1 == 1 && flag2 == 1 ? true : false;

}


// check straight

function checkStraight(allcards, allPlayercards) {
  var i = 0;
  var j = 4;
  while (j < allcards.length) {
    if ((Numbers.indexOf(allcards[j]) - Numbers.indexOf(allcards[i]) + 1) == 5 && checkUniqueInRangeArray(i, j, allcards)) {

      return true;
    }
    i++;
    j++;
  }
  return false;
}

// Check four of a kind

function checkFourOfAKind(allcards, Playercards) {
  var cardNum = "";
  var count = 1;
  var maxCount = 0;
  // console.log(allcards);
  for (var j = 1; j < allcards.length; j++) {
    if (allcards[j] === allcards[j - 1]) {
      count++;

      if (count > maxCount) {
        maxCount = count;
        cardNum = allcards[j];
      }
    }
    else {
      count = 1;
    }

  }
  // console.log(allcards);

  // console.log(Playercards)
  // console.log(Playercards.diamonds.indexOf(cardNum))
  // console.log("count", maxCount)
  // console.log(cardNum)

if(maxCount>=4)
{
  return true;
}

  // if (maxCount < 4) {
  //   return false;
  // }
  // if (Playercards.hearts.indexOf(cardNum) != -1 || Playercards.diamonds.indexOf(cardNum) != -1 || Playercards.clubs.indexOf(cardNum) != -1 || Playercards.spereds.indexOf(cardNum) != -1) {
  //   return true;
  // }
  return false;
}

// check full house

function checkFullHouse(numWiseCards, allPlayerCards) {
  var threeTimesOccuredNum = '';
  var twoTimesOccuredNum = '';
  for (var i = 0; i < Numbers.length; i++) {
    if (numWiseCards[Numbers[i]].length === 3) {
      threeTimesOccuredNum = Numbers[i];
    }
    if (numWiseCards[Numbers[i]].length === 2) {
      twoTimesOccuredNum = Numbers[i];
    }
  }

  if(threeTimesOccuredNum!='' && twoTimesOccuredNum!='')
  {
    return true;
  }


  // if (allPlayerCards.indexOf(threeTimesOccuredNum) !== -1 && allPlayerCards.indexOf(twoTimesOccuredNum) != -1) {
  //   return true;
  // }

  return false;

}

// check flush

function checkFlush(typeWiseCards) {
  if (
    typeWiseCards.hearts.length >= 6 ||
    typeWiseCards.clubs.length >= 6 ||
    typeWiseCards.spereds.length >= 6 ||
    typeWiseCards.diamonds.length >= 6
  ) {
    return true;
  }
  else false;
}

// check three of a kind

function checkThreeOfAKind(numWiseCards) {
  for (var i = 0; i < Numbers.length; i++) {
    if (numWiseCards[Numbers[i]].length === 3) {
      return true;
    }
  }
  return false;
}

// check two pair

function checkTwoPair(numWiseCards) {
  var count = 0

  for (var i = 0; i < Numbers.length; i++) {
    if (numWiseCards[Numbers[i]].length === 2) {
      count++;
    }
    if (count == 2) {
      return true;
    }
  }
  return false;
}


function onePair(numWiseCards) {

  for (var i = 0; i < Numbers.length; i++) {
    if (numWiseCards[Numbers[i]].length === 2) {
      return true;
    }

  }
  return false;
}


// const hands=[{type : "royal-flush", cards:["A","10","J","Q","K"]},{type : "straight-flush", cards:["3","4","5","6","7"]},{type : "four-of-a-kind", cards:["10","10","10","","K"]}];
function handChecker(a, b) {
  const totalCards = [...a, ...b];
  const typeWiseCards = {
    "hearts": [],
    'diamonds': [],
    'clubs': [],
    'spereds': [],
  };

  const numWiseCards = { 'A': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': [], '10': [], 'J': [], 'Q': [], 'K': [] };

  const allcards = []
  const lengthOfSameSutCards = { "hearts": 0, 'diamonds': 0, 'clubs': 0, 'spereds': 0 }
  totalCards.forEach((card) => {
    allcards.push(card.num);
    typeWiseCards[card.type].push(card.num);
    lengthOfSameSutCards[card.type] = typeWiseCards[card.type].length;
    numWiseCards[card.num].push(card.type)
  })

  // console.log(numWiseCards);

  const Playercards = {
    "hearts": [],
    'diamonds': [],
    'clubs': [],
    'spereds': [],
  };
  const allPlayerCards = [];
  b.forEach((card) => {
    Playercards[card.type].push(card.num);
    allPlayerCards.push(card.num);
  })

  // const playerCardsArray=Object.values(Playercards)
  // console.log(playerCardsArray);


  sortCards(allcards);
  sortCards(typeWiseCards.hearts);
  sortCards(typeWiseCards.diamonds);
  sortCards(typeWiseCards.clubs);
  sortCards(typeWiseCards.spereds);

  const typeWiseCardsArray = Object.values(typeWiseCards);
  typeWiseCardsArray[0].push("hearts");
  typeWiseCardsArray[1].push("diamonds");
  typeWiseCardsArray[2].push("clubs");
  typeWiseCardsArray[3].push("spereds");
  typeWiseCardsArray.sort((a, b) => {
    return a.length - b.length
  })

  // console.log(allcards);
  // console.log(lengthOfSameSutCards);
  // console.log(typeWiseCards);
  // console.log(typeWiseCardsArray);
  // console.log(Playercards)
  // console.log(typeWiseCards)
  // check royalflush and straight flush

  var maxTypeCardArray = [...typeWiseCardsArray[3]];
  // console.log("maxTypeCardArray",maxTypeCardArray);
  if (maxTypeCardArray.length >= 6) {
    if (checkRoyalFlush(maxTypeCardArray, Playercards) == true)
      return "royal flush";
    maxTypeCardArray = [...typeWiseCardsArray[3]];

    if (checkStraightFlush(maxTypeCardArray, Playercards))
      return "Straight flush";
  }

  //check four of a kind
  if (checkFourOfAKind(allcards, Playercards)) {
    return "four of a kind";
  }
  // check full house
  if (checkFullHouse(numWiseCards, allPlayerCards)) {
    return "full house";
  }

  // check flush
  if (checkFlush(typeWiseCards)) {
    return "flush"
  }

  // check straight


  if (checkStraight(allcards, allPlayerCards))
    return "Straight";

  if (checkThreeOfAKind(numWiseCards)) {
    return "three of a kind";
  }
  //check two pair

  if (checkTwoPair(numWiseCards)) {
    return "Two pair";
  }

  if (onePair(numWiseCards)) {
    return "one pair";
  }

  // nothing matching 

  return "high card";
}


// console.log(handChecker(
//   [{ num: '9', type: 'hearts' }
//     ,
//   { num: '4', type: 'hearts' },
//   { num: '9', type: 'spereds' },
//   { num: 'K', type: 'hearts' },
//   { num: '8', type: 'hearts' }],
//   [
//     { num: '9', type: 'clubs' }, { num: 'A', type: 'clubs' }
//   ]));





const obj = destributeCardsToPlayers(8, 2);
const players = obj.playersCards;



function checkWinner(){
  
  const handsOfPlayers=[];
  for (var i = 0; i < obj.playersCards.length; i++) {
    // console.log("player card :", players[i]);
    // console.log("table card", obj.tableCards[0])
  
   handsOfPlayers.push(handChecker(obj.playersCards[i], obj.tableCards[0]))
  }

  const priority=["royal flush","Straight flush","four of a kind","full house","flush","Straight","three of a kind","Two pair","one pair","high card"]
  handsOfPlayers.sort((a,b)=>{
   return priority.indexOf(a)-priority.indexOf(b);
  })

  const winner=handsOfPlayers[0];
  var count=1;
  for(var i=1;i<handsOfPlayers.length;i++)
  {
    if(handsOfPlayers[i]!=winner)
    {
      break;
    }
    else count++;
  }
  console.log("total winners",count)

  console.log(handsOfPlayers)

}

checkWinner();

// console.log(shufflecards(52));