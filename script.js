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
// function countChar(str, char) {
//   let counter = 0
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) counter++
//   }
//   return counter
// }


// console.log(countChar("BBC", 'B'))
// console.log(countChar("kakkerlak", "k"))


// =======CHAPTER 4=========
//==Task 1 

// function range(start, end, step = 1) {
//   let array = []
//   if (end > start) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i)
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       array.push(i)
//     }
//   }
//   return array
// }


// function sum(a) {
//   let sum = 0
//   for (let element of a) {
//     sum += element
//   }
//   return sum
// }

// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

//==Task 2
// function reverseArray(array) {
//   let arr = []
//   for (let i = 0; i < array.length; i++) {
//     arr.unshift(array[i])
//   }
//   return arr
// }

// console.log(reverseArray(["A", "B", "C"]))

// function reverseArrayInPlace(arrayValue) {
//   if (arrayValue.length % 2) {
//     let halfLength = Math.floor(arrayValue.length / 2)
//     let saverStart
//     let saverEnd
//     let iterate = 1
//     for (i = 0; i < halfLength; i++) {
//       saverStart = arrayValue[arrayValue.length - iterate]
//       saverEnd = arrayValue[iterate - 1]
//       arrayValue[i] = saverStart
//       arrayValue[arrayValue.length - iterate] = saverEnd
//       iterate++
//     }
//   }
//   return arrayValue
// }

// let arrayValue = [1, 2, 3, 4, 5, 6, 7];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);



//==Task 3

// function arrayToList(array) {
//   let list = null
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list }
//   }
//   return list
// }

// function listToArray(list) {
//   let arr = []
//   for (let i = list; i; i = i.rest) {
//     arr.push(i.value)
//   }
//   return arr
// }


// function prepend(el, list) {
//   let newList = { value: el, rest: list }
//   return newList
// }

// function nth(list, num) {
//   let i = 0
//   if (num == i) return list.value
//   else i++
//   return nth(list.rest, num - 1)
// }

// console.log(arrayToList([10, 20, 30]))
// console.log(listToArray(arrayToList([10, 20, 30])))
// console.log(prepend(10, prepend(20, null)))
// console.log(nth(arrayToList([10, 20, 30]), 1))

//==Task 4



// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) return true;


//   if (typeof obj1 != 'object' || obj1 == null || typeof obj2 != 'object' || obj2 == null)
//     return false

//   let propsInA = 0, propsInB = 0
//   for (let prop in obj1)
//     propsInA += 1
//   for (let prop in obj2) {
//     propsInB += 1;
//     if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
//       return false;
//   }
//   return propsInA == propsInB
// }


// let obj = { here: { is: "an" }, object: 2 }
// console.log(deepEqual(obj, obj))
// console.log(deepEqual(obj, { here: 1, object: 2 }))
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))


// =======CHAPTER 5=========
//==Task 1 

// let arrays = [[1, 2, 3], [4, 5], [6]]
// console.log(arrays.reduce((a, b) => a.concat(b)))

//==Task 2
//=var 1
// function loop(value, test, update, body) {
//   for (let i = value; test(i); i = update(i)) body(i)
// }


//=var 2
// function loop(value, test, update, body) {
//   if (!test(value)) return
//   body(value)
//   loop(update(value), test, update, body)
// }

// loop(3, n => n > 0, n => n - 1, console.log)

// ==Task 3

//=var 1
// function every(array, test) {
//   for (let element of array) {
//     if (!test(element)) return false
//   }
//   return true
// }

//=var 2
// function every(array, test) {
//   return !array.some(n => !test(n))
// }

// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));

// ==Task 4 ??? sandbox

// =======CHAPTER 5=========
//==Task 1 

// class Vec {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   plus(other) {
//     return new Vec(other.x + this.x, other.y + this.y)
//   }
//   minus(other) {
//     return new Vec(this.x - other.x, this.y - other.y)
//   }

//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
//   }
// }


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length)

class Group {
  constructor() {
    this.members = []
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) { }


  has(value) {
    return this.members.includes(value)
  }

  static from(arg) {
    let group = new Group
    for (let value of arg) {
      group.add(value)
    }
    return group
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
// group.delete(10);
console.log(group.has(10));
// → false