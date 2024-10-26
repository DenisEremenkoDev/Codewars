// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// move(3, 6) should equal 15


// Функция перемещения в терминальной игре В этой игре герой перемещается слева направо.
// Игрок бросает кости и перемещается на количество мест, указанное костями, два раза. 
// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию. 
// Пример: move(3, 6) должен быть равен 15

// const Test = require('@codewars/test-compat');

// describe('move function', () => {
//   it('basic tests', () => {
//     Test.assertEquals(move(0, 4), 8);
//     Test.assertEquals(move(3, 6), 15);
//     Test.assertEquals(move(2, 5), 12);
//   })
// })





function move (position, roll) {
    // return  position + roll * 2   // решение задачи
    position = position + roll * 2
    return position
}
const newMove = move(0, 4)   // если потребуется функция в дальнейшем
console.log(newMove);

