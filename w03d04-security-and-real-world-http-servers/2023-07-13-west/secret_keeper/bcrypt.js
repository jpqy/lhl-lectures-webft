const bcrypt = require("bcrypt")

const salt = bcrypt.genSaltSync(12)

console.log(salt)

const hashedPassword = bcrypt.hashSync("iamsosmrt", salt)
const hashedPassword2 = bcrypt.hashSync("iamsosmrt", salt)
console.log(hashedPassword)
console.log(hashedPassword2)

console.log(bcrypt.compareSync("iamsosmrt", hashedPassword))
