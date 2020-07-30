
var listElement = document.getElementById("list");

function addTodo(){
   //getting input value
   var inputValue = document.getElementById("writeTodo").value;
   //creating new element li
   var liElement = document.createElement('li');
   liElement.setAttribute('id', 'liItem')
   //create text for li which is input value
   var liElementText = document.createTextNode(inputValue);
   //joining the li and input
   liElement.appendChild(liElementText);

   //creating delete btn
   var deleteBtn = document.createElement('button');
   var deleteBtnText=document.createTextNode('Delete');
   deleteBtn.appendChild(deleteBtnText);

   liElement.appendChild(deleteBtn);
    //setting clearbtn attribute
   deleteBtn.setAttribute("onclick", "deleteLi(this)")

   //creating edit btn
   var editBtn = document.createElement('button');
   var editBtnText=document.createTextNode('Edit');
   editBtn.appendChild(editBtnText);
   editBtn.setAttribute("onclick", "editLi(this)") 
   liElement.appendChild(editBtn);


   //creating check btn
   var checkBtn = document.createElement('i');
   var checkBtnText=document.createTextNode('✓');
   checkBtn.appendChild(checkBtnText);

   liElement.appendChild(checkBtn);



   //joining the created element in existing element
   listElement.appendChild(liElement);

   document.getElementById("writeTodo").value="";
}


function deleteLi(dLi){
   dLi.parentNode.remove();
}
function clearAll(){
   document.getElementById("list").innerHTML="";
}
function editLi(eLi){
   var livalue = eLi.parentNode.firstChild;
   var inp=document.createElement('input');
   var inpText=document.createTextNode(livalue);
   inp.appendChild(inpText);
   


}


