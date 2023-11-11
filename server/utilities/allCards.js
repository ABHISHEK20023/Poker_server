 const Numbers=['A', "2", '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const types=['hearts', 'diamonds', 'clubs', 'spereds'];

const cards = [];

types.forEach((type) => {
  const types = type;
  Numbers.forEach((num) => {
    const obj = { num, type }
    cards.push(obj);

  })
})
module.exports = {Numbers,types,cards}