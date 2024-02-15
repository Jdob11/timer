const args = process.argv.slice(2);

for (const arg of args) {
  if (isNaN(+arg) || +arg < 0) {
    console.log("Your arguments may only include positive numbers");
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
};