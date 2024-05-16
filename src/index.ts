import { Effect, Match } from "effect";

const match = Match.type<{a:string}|{b:number}>().pipe(
    Match.when({a:Match.string},(_)=>_.a),
    Match.when({b:Match.number},(_)=>_.b),
    Match.exhaustive

)

console.log(match({a:"hello"}))
console.log(match({b:1}))