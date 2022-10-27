document.getElementById('submit').addEventListener('click',function(){
  const title = document.getElementById('title').value;
  const bodyContent= document.getElementById('body-content').value;
  const postInfo = {title:title, body:bodyContent};
  nowPostToServer(postInfo);
});

function nowPostToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error=> alert(console.log(error)));
};

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
  
  