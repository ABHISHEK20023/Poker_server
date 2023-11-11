const sortCards=(cardsToSort)=> {
    cardsToSort.sort((a, b) => {
      return Numbers.indexOf(a) - Numbers.indexOf(b);
    });
  }

  module.exports={sortCards};