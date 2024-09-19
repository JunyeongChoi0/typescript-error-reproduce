// this is ok:
import { BAR } from "#libs/bar.ts";
// but this is `ERROR: Cannot find module '#libs' or its corresponding type declarations.`
// import { BAR } from "#libs";
import { FOO } from "#libs/foo.ts";

console.log(FOO);
console.log(BAR);
