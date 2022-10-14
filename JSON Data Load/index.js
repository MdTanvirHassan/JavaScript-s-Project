fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json))

function displayUser(users) {
    const userNames = users.map(user => user.username);

    const ul = document.getElementById('user-list');
    ul.style.color="blue";
    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement('li');
        li.innerText= username;
        ul.appendChild(li);
        
    }
}
  