const input = prompt('Please type something important: ');
function none(){
    console.log ('sleep please')
}
const first = prompt('Type something: ')
function one (first){
    console.log (first)
}
one(first);

const second = prompt('Type something: ')
function two (first, second){
    console.log(first, second)
}
const a = prompt('Please type something else important: ');
if (input === a) {
    console.log ('The inputs match!')
}

if (input !== a){
    console.log ('The inputs do not match')
}