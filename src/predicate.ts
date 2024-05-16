import {  Either, Match } from "effect";

const result = Match.type<{ age: number }>().pipe(
  Match.when({ age: (age) => age > 5 }, (user) => `your age is ${user.age}`),
  Match.orElse((user)=> `your age ${user.age} is low than 5`)
);

console.log(result({age:6}))

// not 
const result1 = Match.type<{name:string}>().pipe(
    Match.not({name:"Dhanush"},(user)=> `Hello ${user.name}`),
    Match.orElse((user)=> `you are ${user.name}`)
)

console.log(result1({name:"John"}))

// tag

const result2 = Match.type<Either.Either<number, string>>().pipe(
    Match.tag("Left",(_)=> _.left),
    Match.tag("Right",(_)=> _.right),
    Match.exhaustive
)
console.log(result2(Either.right(12)))
console.log(result2(Either.left("Dhanush")))

// orElse

const result3 = Match.type<string|number>().pipe(
    Match.when("hi",(_)=> _.length),
    Match.orElse(()=>"literally i cant understand")
)
console.log(result3(123))