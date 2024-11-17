// Ваша задача — написать функцию, которая принимает два или более объекта и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются вместе, так что значения соответствующих ключей суммируются.

// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.

function combine(...objects) {
    const result = {};
    
}















//   const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// describe('Combine two objects', () => {
//   testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
//   testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// })

// describe('Combine three objects', () => {
//   testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
//   testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
// })

// describe('Handle empty objects', () => {
//   testDeepEqual(combine({}, {}, {}), {})
//   testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// })