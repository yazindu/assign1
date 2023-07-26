let username: string = "Typescript user";
let repititions: number = 5;

function generateResponse(name: string, count: number) : void {
    for(let i = 0; i<count; i++){
        console.log(`Hello ${name}! This is greeting no.${i+1}`);
    }
}

generateResponse(username, repititions);