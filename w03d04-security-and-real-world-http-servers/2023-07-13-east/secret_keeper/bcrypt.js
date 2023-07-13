const bcrypt = require("bcrypt")

// Increasing the number here makes calculating the hash slower, to make it harder for hackers to brute-force
const salt = bcrypt.genSaltSync(10)
console.log(salt)

const hashedPassword = bcrypt.hashSync("iamsosmrt", salt)
// const hashedPassword2 = bcrypt.hashSync("iamsosmrt", salt)

console.log(hashedPassword)
// console.log(hashedPassword2)

console.log(bcrypt.compareSync("iamsosmart", hashedPassword))
