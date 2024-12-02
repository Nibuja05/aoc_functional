# AOC Functional

Repository for the challange of clearing Advent of Code in TS/JS with a functional approach - each solution no longer than a single line. Exact rules below:

-   for each day there should be two one-liner statements, solving the first and second part
-   the result should be printed into the console
-   reading/importing the import can (should) be done in a seperate file, check the current solutions for more info
-   each one-liner should be present in:
    -   true form of a single line
    -   a formatted, readable, understandable version (some content, except whitespace)
-   no `;` allowed to cheat more than a single statement into one line!
-   predefined helper functions (provided here) are allowed:
    -   `.use((item) => result)` can be used to act as a variable and allow reusability of values
    -   `log()` can be used to log something to the console, without interrupting the current line
    -   `iterator(...)` functions to create generators with functional additions like: `map()`, `reduce()`, `filter()` and `toString()`

## Solutions

Some solutions for specific years are available under `/solutions`.

## Testing

Always keep typescript dev running while developing: `npm run dev`.
You can run any day with `npm run day {YEAR[2024]} {DAY[1]}` in the console
