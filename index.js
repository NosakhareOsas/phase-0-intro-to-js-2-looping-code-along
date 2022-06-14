// Code your solutions in this file ["Charlie", "Samip", "Ali"], "birthday"
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    const messages = [];
    for (let i = 0; i < names.length; i++){
        messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return messages
}

function countDown(n){
    let i = 0;
    let a = n
    while(i <= n){
        console.log(a);
        a--
        i++
    }

}
