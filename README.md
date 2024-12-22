# TypeScript Type Error Not Caught: Adding Number and String

This repository demonstrates a scenario where TypeScript fails to catch a type error at compile time when adding a number to a string. The code compiles without errors, but produces unexpected results at runtime.

## Bug Description
The `add` function is defined to accept two numbers and return their sum. However, when we call `add(5, '10')`, passing a string as the second argument, TypeScript does not report an error. This results in string concatenation instead of numerical addition.

## How to Reproduce
1. Clone the repository.
2. Compile the TypeScript code using the TypeScript compiler (tsc).
3. Run the JavaScript code.

You will observe that the code executes without any compile-time errors, yet the result is the string '510' instead of the expected number 15.

## Solution
The solution is to properly type-check the arguments within the `add` function or use type guards to ensure that only numbers are added.