// const fullName = "Adam Black";
// const fullName = "Zoa Blue";
// const fullName = "Peters Hunter";
const fullName = "Brooke Stone";

const spaceIndex = fullName.indexOf(' ')
const firstName = fullName.slice(0, spaceIndex)
const lastName = fullName.slice(spaceIndex + 1)

const name = `${fullName[0]}. ${lastName}`

// console.log(spaceIndex, firstName, lastName, name)
// console.log(fullName.includes(' '))

// let newName = ''

// for (let index = 0; index < fullName.length; index++) {
//   const char = fullName[index];

//   if (char === 'o') {
//     newName += '$';
//   } else {
//     newName += char
//   }
// }

// console.log(newName)


function replaceOCharBy(str) {
  let newName = ''

  for (let index = 0; index < str.length; index++) {
    const char = str[index];

    if (char === 'o') {
      newName += '$';
    } else {
      newName += char
    }

  }

  return newName
}

const newStr = replaceOCharBy('ddooooddddd')

// console.log(newStr)


const price = '200'
const qty = 2

const total = Number(price) * qty

// console.log(total, parseFloat(price), Number(price), +price)

const totalCount = 125
const pageSize = 15

// console.log(Math.ceil(totalCount / pageSize))

// console.log(Math.round(Math.random() * 100))

const b = 4 > 1 + 2
console.log(4 > 1 + 2 ? 'yes' : 'no', b)

// if (car || bus) {
//   // еду на работу
// }

const c = true || 1 || 2 || 3

console.log(c)


let age = 9;

if (age >= 18) {
  console.log(1);
}

console.log(2)

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: ''
}

if (true) {

}



// Занятие 1. Слайд 10

// 1. Получить первую и последнюю буквы строки

// ....

// 2. 

// ....