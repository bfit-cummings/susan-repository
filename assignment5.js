const login = [{id: 1, username: 'Susan', age: 16, password: 'hi:)'},
{id: 2, username: 'Evelyn', age: 16, password: 'yourmom'},
{id: 3, username: 'Andrew', age: 17, password: 'yourdad'},
{id: 4, username: 'Michael', age: 17, password: 'joke2030'}]

login.push({id: 5, username: 'Steven', age: 29, password: 'cheese'})
console.log(login)

while (true) {
    const id = login.length + 1
    const username = prompt('Username: ')
    const age = prompt('age: ')
    const password = prompt('password: ')
    login.push ({id: id, username: username, age: age, password: password})
    console.log(login)
}
