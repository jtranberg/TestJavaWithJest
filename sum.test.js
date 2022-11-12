const sum = require('./sum')

test("properly adds two numbers", () => {
    expect(
        sum(1, 2)
        ).toBe(3)
    })
// test("properly adds two numbers", () => {
// if(sum(1, 2) === 3) {
// console.log("200")
// } else {
//     throw Error
// }
// })
