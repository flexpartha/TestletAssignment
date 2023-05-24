
const pretestItems = ['Pretest Item 1', 'Pretest Item 2', 'Pretest Item 3', 'Pretest Item 4'];
const operationalItems = ['Operational Item 1', 'Operational Item 2', 'Operational Item 3', 'Operational Item 4', 'Operational Item 5', 'Operational Item 6'];


const firstTwoItems = getRandomItems(pretestItems, 2);


const remainingPretestItems = pretestItems.filter(item => !firstTwoItems.includes(item));


const remainingItems = remainingPretestItems.concat(operationalItems);


const nextEightItems = getRandomItems(remainingItems, 8);


const randomizedItems = firstTwoItems.concat(nextEightItems);



function getRandomItems(array, count) {
  const shuffledarray = array.sort(() => 0.5 - Math.random());
  return shuffledarray.slice(0, count);
}


console.log(randomizedItems);