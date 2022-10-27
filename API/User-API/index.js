const inputBtn= document.getElementById('input-btn');
inputBtn.addEventListener('click',function(){
    const userInput= document.getElementById('user-input').value;
    const idCount= parseInt(userInput);

    const API= `https://jsonplaceholder.typicode.com/users`;
    fetch(API)
    .then(res => res.json())
    .then(data => {
        data=data.slice(0,idCount);
         const userContainer = document.getElementById('user-container');
         userContainer.innerText='';
        userContainer.style.color= "royalBlue";
    

        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            const p = document.createElement('p');
            p.innerHTML = `<span><strong>
            Name: ${user.name}   </strong>
            <button onclick="getUserDetails(${user.id})">
        details ${user.id}
            </button></span>`;
            userContainer.appendChild(p);
        }
    });
})


function getUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(data => {
    const details = document.getElementById('user-details');
    details.style.color="red"; 
    details.innerHTML =`
        <h4>${data.name}</h4>
        <h5>${data.email}</h5>
        <h6>${data.phone}</h6>
 `
})
};