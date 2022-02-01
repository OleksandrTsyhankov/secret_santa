const readline = require('readline-sync');

interface Participant {
  name: string;
  surname: string;
  wishlist: string;
  santaFor: string;
  santaForWishlist: string;
}

let santas = [] as any;

const numberOfParticipant = readline.question("Please choose how many participant? 3-500  :  ");

function getParticipants() {
  
  let a = {} as Participant
  for (let i = 0; i < numberOfParticipant; i++) {
    a = Object.create({} as Participant);
    a.name = readline.question("name"),
    a.wishlist = readline.question("wishlist"),
    a.santaFor = ''
    santas.push(a)
  }
}

getParticipants();
console.log(santas)

// @Path('/shuffle')
// @POST
// shuffle(santas)

shuffle(santas)
console.log(santas)

function addSantaFor() {
  for (let i = 0; i < santas.length - 1; i++) {
    santas[i].santaFor = santas[i + 1].name
    santas[i].santaForWishlist = santas[i + 1].wishlist
  }
  santas[santas.length - 1].santaFor = santas[0].name
  santas[santas.length - 1].santaForWishlist = santas[0].wishlist
  
}

addSantaFor()

console.log("result",santas)


function shuffle(array: any) {
  let n = array.length;
  let i, j;

  while (n) {
    i = Math.floor(Math.random() * n--);
    j = array[n];
    array[n] = array[i];
    array[i] = j;
  }
}
