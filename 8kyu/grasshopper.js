// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// const Test = require('@codewars/test-compat');

// describe("The combat() function", function () {
//   it("should work for some example tests", function () {
//     Test.assertEquals(combat(100, 5), 95);
//     Test.assertEquals(combat(92, 8), 84);
//     Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
//   });
// });

// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

function combat(health, damage) {
    // Write your code here
    health -= damage
    if (health > 0) {
        return health
    } else {
        health = 0
        console.log("Health cannot go below 0");
    }
    
    
}
combat(100, 30)
