let numbers = [];
for (let i = 2; i < process.argv.length; i++) {
  numbers.push(process.argv[i]);
}
let sum = 0;
numbers.forEach((element) => {
  sum += Number(element);
});
console.log(sum);
