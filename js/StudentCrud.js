var MyForm = document.getElementById("myForm");
MyForm.addEventListener("submit", (e) => {
  e.preventDefault(), (ID = document.getElementById("stdid"));
  FirstName = document.getElementById("fullname");
  Mobile = document.getElementById("mobile");
  gmail = document.getElementById("gmail");
  clas = document.getElementById("cls");

  td0 = document.createElement("td");
  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td3 = document.createElement("td");
  td4 = document.createElement("td");
  td5 = document.createElement("td");

  tr = document.createElement("tr");

  btnupdate = document.createElement("button");
  btndelete = document.createElement("button");

  td0.innerHTML = ID.value;
  td1.innerHTML = FirstName.value;
  td2.innerHTML = Mobile.value;
  td3.innerHTML = gmail.value;
  td4.innerHTML = clas.value;
  td5.innerHTML =
  `<button class="btn btn-primary">update</button> <button class="btn btn-danger" value="${ID.value}">delete</button> `
     

  tr.appendChild(td0);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  tbody = document.querySelector("tbody");

  tbody.appendChild(tr);

  ID.value = "";
  FirstName.value = "";
  Mobile.value = "";
  gmail.value = "";
  clas.value = "";
});