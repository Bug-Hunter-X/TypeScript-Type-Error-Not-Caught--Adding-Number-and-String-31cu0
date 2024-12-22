function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage
console.log(result); // Output: 15

//This will throw an error now
try {
    let result2 = add(5, '10');
    console.log(result2);
} catch (e) {
    console.error(e);
}

