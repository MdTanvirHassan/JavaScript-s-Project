const API= `https://jsonplaceholder.typicode.com/users`;
fetch(API)
.then(res => res.json())
.then(data => {
    const userContainer = document.getElementById('user-container');
    userContainer.style.color= "royalBlue";
   

    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const p = document.createElement('p');
        p.innerHTML = `<p>
        Name: <strong>${user.name}   </strong>
        <button onclick="getUserDetails(${user.id})">
       details ${user.id}
        </button></p>`;
        userContainer.appendChild(p);
    }
});

function getUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(data => {
    const details = document.getElementById('user-details');
    details.style.background="red";
    details.style.boxShadow= "5px 5px 15px solid gray";
    details.innerHTML =`
        <h3>${data.name}</h3>
        <h4>${data.email}</h4>
        <h5>${data.phone}</h5>
 `
})
};