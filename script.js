const createButton=document.querySelector(".create-btn");
let notes=document.querySelectorAll(".input-box")
const notesContainer=document.querySelector(".notes-container")


function shownotes(){
    notesContainer.innerHTML=localStorage.getItem("note")
}

shownotes();
//Set data on local storage 
  function updatestorage(){
    localStorage.setItem("note",notesContainer.innerHTML);
  }

createButton.addEventListener('click',()=>{
   let inputbox=document.createElement("p");
   inputbox.setAttribute("contenteditable","true");
   let img=document.createElement("img");
   inputbox.className="input-box";
   img.src="./icons/del.png";
   
   notesContainer.appendChild(inputbox).appendChild(img);

})

//delete notes

notesContainer.addEventListener('click',function(e){
   if( e.target.tagName ==="IMG"){     //tag name should capital letters
       e.target.parentElement.remove();
       updatestorage();
   }else if(e.target.tagName=== "P"){
    note=document.querySelectorAll(".input-box");
    note.forEach(nt=>{
        nt.onkeyup=function(){
            updatestorage();
        }
    })
   }
})

document.addEventListener("keydown",event=>{
  if(event.key==="Enter"){
    document.execCommand("insertlineBreak");
    event.preventDefault();
  }
})
  