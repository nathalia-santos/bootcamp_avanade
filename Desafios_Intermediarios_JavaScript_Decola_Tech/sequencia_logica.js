let lines = gets().split("\n");
let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
}