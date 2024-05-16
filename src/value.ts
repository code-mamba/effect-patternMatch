import { Match } from "effect";


const result = Match.value({name:"Dhanush", age:24}).pipe(
    Match.when({name:"Dhanush"},
        (user) => `Hi ${user.name} and your age is ${user.age}`
    ),
    Match.orElse(()=> "oh no this is not Dhanush")
)

console.log(result)