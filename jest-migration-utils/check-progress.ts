var glob = require('glob')

const Reset = "\x1b[0m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgWhite = "\x1b[37m"

let specs = glob.sync("src/**/*.spec.ts");
let tests = glob.sync("src/**/*.test.ts");

console.log(FgYellow, `${specs.join('\n')}`, Reset)

if (specs.length) {
  console.log(FgRed, specs.length + " slow karma tests")
} else {
  console.log(FgGreen, 'Wooooooooooooooooooooo! Jest conversion complete!')
}

console.log(FgWhite, tests.length + " fast jest tests")
console.log(FgGreen, (tests.length * 100 / (tests.length + specs.length)).toFixed(2) + "% complete in switching tests to jest", Reset)