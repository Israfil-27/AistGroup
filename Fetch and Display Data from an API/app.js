const loadUsersButton = document.getElementById('loadUsersBtn');
const userTable = document.getElementById('userTable');
const userList = document.getElementById('userList');

loadUsersButton.addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
    const usersData = await response.json();
    usersTable(usersData);
  } else if(!response.ok){
    alert("fetch error 500")
  }
});

const usersTable = (users) => {
  userList.innerHTML = '';
  users.forEach(user => {
    const userRow = document.createElement('tr');
    const userName = document.createElement('td');
    const userEmail = document.createElement('td');

    userName.textContent = user.name;
    userEmail.textContent = user.email;

    userRow.appendChild(userName);
    userRow.appendChild(userEmail);
    userList.appendChild(userRow);
  });
};
