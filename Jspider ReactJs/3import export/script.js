import { hello } from "./app.js";
hello();

// !=========

import { fnm } from "./app.js";
console.log(fnm);

// !=========

import fname from "./app.js";
console.log(fname);

// !=========

import { sourav, mul } from "./app.js";

let add = sourav(3, 4);
console.log(add);

let mull = mul(3, 4);
console.log(mull);

// !========== array import

import { array } from "./app.js";

array.map((ele) => {let {fname}=ele
console.log(`My Name Is ${fname}`)
});


// !====================
import { palindrome } from "./app.js";

 palindrome("did")
