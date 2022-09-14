
let button = document.getElementById('btnAdd');

button.onclick = () =>{
     let input = document.getElementById("mainInput").value;
     let div = document.createElement("div");
     let clmn = document.getElementById("inputs");
     clmn.appendChild(div);
     let inpToDo = document.createElement("h6");
     div.appendChild(inpToDo);
     let icon =document.createElement("i");
     icon.setAttribute("class", "fa-solid fa-trash");
     div.appendChild(icon);
     inpToDo.innerHTML= input;
     div.setAttribute("class", "toDoListDiv");
     clmn.setAttribute('class', 'input');
     icon.onclick = ()=>{
          div.remove();
     }


}