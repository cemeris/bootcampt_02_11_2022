/**
 * First
 */
document.querySelector('.first').onclick = function () {
  document.querySelector('.one').classList.add('red');
}

/**
 * Second
 */
document.querySelector('.two').onclick = function () {
    document.querySelector('.two').classList.toggle('red');
}

/**
 * Third
 */

// document.querySelector('.el_1').onclick = function () {
//   if (document.querySelector('.example .red'))
//     document.querySelector('.example .red').classList.remove('red');

//   document.querySelector('.el_1').classList.toggle('red');
// }

// document.querySelector('.el_2').onclick = function () {
//   if (document.querySelector('.example .red'))
//     document.querySelector('.example .red').classList.remove('red');

//   document.querySelector('.el_2').classList.toggle('red');
// }

// document.querySelector('.el_3').onclick = function () {
//   if (document.querySelector('.example .red'))
//     document.querySelector('.example .red').classList.remove('red');

//   document.querySelector('.el_3').classList.toggle('red');
// }

/**
 * Extra
 */

let small_el = document.querySelectorAll('.small');

for (let index = 0; index < small_el.length; index = index + 1) {
  small_el[index].textContent = index + 1;
  small_el[index].onclick = clickHandle;
}


function clickHandle() {
  let red = document.querySelector('.example .red');
  if (red != null) {
    red.textContent = red.dataset.id;

    red.classList.remove('red');
  }
  this.classList.toggle('red');
  
  this.textContent = '+';
}


/*
  4. uzlikšķinot uz ".small" elementu lai teksta vietā parādās "+"

  Kur jāraksta?
  Kas jāraksta?
*/

let arr1 = [
  [0, 4, 3, 5],
  ['abc', ['d', 'e', 'f']]
];


// 4
console.log(arr1[0][1]);

// d
console.log(arr1[1][1][0]);

// f
console.log(arr1[1][1][2]);

// abc
console.log(arr1[1][0]);

let obj1 = {
  'a': [4, 5, 6],
  'b': {
    'c': 'abb',
    'd': [7, 7, 8]
  }
};

// 5
console.log(obj1['a'][1]);
console.log(obj1.a[1]);

// abb
console.log(obj1.b.c);

// 8
console.log(obj1.b.d[2]);

/**
 ** function
 */

function sum (a, b, c) {
  return a + b + c;
}

let result = sum(4, 17, 8);

console.log(result);

let path = ['a', {
  'a': "abc",
  'b': function () {
    return [this.c];
  },
  'c': function () {
    return "tuesday";
  }
}];

//tuesday
console.log(path[1].b()[0]());

/*
  [] - array, objects
  . - objects
  () - function
*/

let obj2 = {
  'size': 45,
  'color': '#f3d3f4',
  'hash': '14afda25raf2raf2325arf2f2'
};

window.onhashchange = function () {
  let hash = location.hash.substring(1);
  if (!obj2.hasOwnProperty(hash)) return;

  console.log(obj2[hash]);
}


console.log("------------------------");
/********* */

let maja = [
  'brivibas iela',
  ['kapnes', {elemnt1: 'egle', elemnt2: 'lampiņas'}]
];

console.log(maja[0]);
console.log(maja[1][0]);

console.log(maja[1][1].elemnt1);
console.log(maja[1][1].elemnt2);



let a = [3, 5, 6, 'fasdf', ['a', 'b']];

console.log(a[1]);


/*
[] - masīvs, objekts
. - objekts
() funkcija
*/











