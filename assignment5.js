const login = [{username: 'Susan', age: 16, password: 'hi:)'},
{username: 'Evelyn', age: 16, password: 'yourmom'},
{username: 'Andrew', age: 17, password: 'yourdad'},
{username: 'Michael', age: 17, password: 'joke2030'}]

login.push({username: 'Steven', age: 29, password: 'cheese'})
console.log(login)

const username = prompt('Username: ')
const age = prompt('age: ')
const password = prompt('password: ')
login.push ({username: username, age: age, password: password})
console.log(login)