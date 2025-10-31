const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const contactInput = document.getElementById("contact");
const imageInput = document.getElementById("imageUrl");

const addBtn = document.querySelector("#add");
const tbody = document.querySelector("tbody");

let users = JSON.parse(localStorage.getItem("users")) || [];

users.forEach((user, index) => renderRow(user, index));

let updateIndex = "";

const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  age: document.getElementById("age"),
  contact: document.getElementById("contact"),
  imageUrl: document.getElementById("imageUrl"),
};

function getUserInput() {
  return {
    name: inputs.name.value.trim(),
    email: inputs.email.value.trim(),
    age: inputs.age.value.trim(),
    contact: inputs.contact.value.trim(),
    imageUrl: inputs.imageUrl.value.trim(),
  };
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const user = getUserInput();

  if (!isVaild(user)) {
    alert("Please enter all inputs");
    return;
  }

  if (this.innerHTML == "Add Info") {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    renderRow(user, users.length - 1);
  } else {
    users[updateIndex] = user;
    localStorage.setItem("users", JSON.stringify(users));
    updateRow(user, updateIndex);
    updateIndex = null;
    addBtn.innerHTML = "Add Info";
  }
  reset();
});

function isVaild(user) {
  return Object.values(user).every((v) => v !== "");
}

function renderRow(user, index) {
  const row = document.createElement("tr");

  row.dataset.index = index;

  row.innerHTML = `
  <td>${user.name}</td>
  <td>${user.email}</td>
  <td>${user.age}</td>
  <td>${user.contact}</td>
  <td><img src="${user.imageUrl}" width="40" height="40" alt="User"></td>
  <td>
    <button class="update">Update</button>
    <button class="delete">Delete</button>
  </td>
  `;

  row.querySelector(".update").addEventListener("click", () => editUser(index));
  row
    .querySelector(".delete")
    .addEventListener("click", () => deleteUser(index));

  tbody.append(row);
}

function updateRow(user, index) {
  const row = tbody.querySelector(`tr[data-index="${index}"]`);
  if (!row) {
    return;
  }

  row.innerHTML = `
  <td>${user.name}</td>
  <td>${user.email}</td>
  <td>${user.age}</td>
  <td>${user.contact}</td>
  <td><img src="${user.imageUrl}" width="40" height="40" alt="User"></td>
  <td>
    <button class="update">Update</button>
    <button class="delete">Delete</button>
  </td>
`;

  row.querySelector(".update").addEventListener("click", () => editUser(index));
  row
    .querySelector(".delete")
    .addEventListener("click", () => deleteUser(index));
}

function editUser(index) {
  const user = users[index];
  Object.keys(inputs).forEach((key) => {
    inputs[key].value = user[key];
  });
  addBtn.textContent = "Update Info";
  updateIndex = index;
}

function deleteUser(index) {
  users.splice(index, 1);

  localStorage.setItem("users", JSON.stringify(users));

  const row = tbody.querySelector(`tr[data-index="${index}"]`);
  row.remove();

  Array.from(tbody.rows).forEach((row, i) => {
    row.dataset.index = i;
    const updateBtn = row.querySelector(".update");
    const deleteBtn = row.querySelector(".delete");
    updateBtn.onclick = () => editUser(i);
    deleteBtn.onclick = () => deleteUser(i);
  });
}

function reset() {
  Object.values(inputs).forEach((input) => (input.value = ""));
}
