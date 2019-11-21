//=======CHAPTER 2=========
//==Task 1 

// let k = '#'
// for (let i = 1; i <= 7; i++) {
//   console.log(k)
//   k += '#'
// }

//==Task 2

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
//   if (i % 3 == 0 && i % 5 == 0) { console.log('FizzBuzz') } else
//     if (i % 3 == 0) { console.log('Fizz') } else
//       if (i % 5 == 0) console.log('Buzz')
// }

// ==Var 2

// let FB = ''

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) FB += 'Fizz'
//   if (i % 5 == 0) FB += 'Buzz'
//   if (i % 3 == 0 || i % 5 == 0) console.log(`${i} - ${FB}`)
//   FB = ''
// }


//==Task 3

// let chessBoard = ''
// let size = 8
// for (let i = 1; i <= size; i++) {

//   for (let d = 1; d <= size; d++) {
//     if ((d + i) % 2 == 0) {
//       chessBoard += ' '
//     } else {
//       chessBoard += '#'
//     }
//   }
//   chessBoard += '\n'
// }
// console.log(chessBoard)



// =======CHAPTER 3=========
//==Task 1 

// function min(a, b) {
//   if (a < b) return a
//   else return b
// }

// console.log(min(0, 10));
// console.log(min(0, -10));

//==Task 2

// function isEven(a) {
//   if (a == 0) return true
//   else if (a == 1) return false
//   else if (a < 0) return isEven(-a)
//   else return isEven(a - 2)
// }

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(0))


//==Task 3
function countChar(str, char) {
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) counter++
  }
  return counter
}


console.log(countChar("BBC", 'B'))
console.log(countChar("kakkerlak", "k"))
