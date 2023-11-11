const {cards}=require('./allCards')

const shufflecards=(n)=> {

    const shuffledCards = [...cards].sort(() => 0.5 - Math.random())
    if (n > 52) {
      return shuffledCards;
    }
    const nCards = shuffledCards.slice(0, n);
    return nCards;
  }


   const destributeCardsToPlayers=(n, k)=> {
    const playersCards = []
    const tableCards = []
    const shuffledCards = shufflecards(52)
    // console.log("shufflecards",shuffledCards);
  
    for (var i = 0; i < n; i++) {
  
      playersCards.push(shuffledCards.slice(0, k));
      shuffledCards.splice(0, k);
    }
  
    tableCards.push(shuffledCards.slice(0, 5))
  
    shuffledCards.splice(0, 5);
    // console.log("remaining shufflecards",shuffledCards);
    // console.log("fdfjsdof",playersCards)
    return { playersCards, tableCards };
  }

  module.exports = {shufflecards,destributeCardsToPlayers};