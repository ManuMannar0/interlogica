/*
const a = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
]

f = a => 
  fetch(a)
  .then(r => r.json())
  .then(r => console.log(r))
  .catch(er => console.log(er))
  
//Promise.all(a.map(a => f(a)))
async function funcy() {
  for await (let url of a) {
    f(url)
  }
}
funcy()

const lento = new Promise((res,rej) => setTimeout(() => {res('lento')}, 3000))
const veloce = new Promise((res,rej) => setTimeout(() => {res('veloce')}, 1000))

mP
.then(res => console.log(res))

fetch('https://jsonplaceholder.typicode.com/todos/3')
.then(r => r.json())
.then(r => console.log(r))

async function lv () {
  const a = await lento
  const b = await veloce+a
  console.log(b)
}
async function v () {
  console.log(await veloce)
}
async function l () {
  console.log(await lento)
}

lv()
*/  

/*
const a = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
]

const lento = new Promise((res,rej) => setTimeout(() => {res('lento')}, 3000))
const veloce = new Promise((res,rej) => setTimeout(() => {rej('veloce')}, 1000))

const f = a => 
  fetch(a)
  .then(r => r.json())
  .then(console.log)
  //.catch(er => console.log(er))

Promise.all([lento, veloce]).then(console.log)


//Promise.all(a.map(a => f(a)))
async function funcy() {
  for await (let url of a) {
    f(url)
  }
}
funcy()



mP
.then(res => console.log(res))

fetch('https://jsonplaceholder.typicode.com/todos/3')
.then(r => r.json())
.then(r => console.log(r))

async function lv () {
  const a = await lento
  const b = await veloce+a
  console.log(b)
}
async function v () {
  console.log(await veloce)
}
async function l () {
  console.log(await lento)
}

lv()
*/
