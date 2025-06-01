

let todoList = JSON.parse(localStorage.getItem('todoList')) || [{item:'Buy Milk',dueDate:'2022-12-12'}];
localStorage.setItem('todoList',JSON.stringify(todoList));

displayItems();

function addTodo(){
  let inputElement =document.querySelector('#todo_input');
  let todoitem= inputElement.value;
  let dateElement = document.querySelector('#todo_date');
  todoDate= dateElement.value;
  todoList.push({item:todoitem,dueDate:todoDate});

  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value='';
  dateElement.value='';
  
  displayItems();
}




function displayItems(){
  let containerElement  = document.querySelector('.todo-container');

  let newHtml ='';
  for (let i=0;i<todoList.length;i++){
    let {item,dueDate} = todoList[i];

    newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class= 'btn-delete'onclick='todoList.splice(${i},1);displayItems();'>Delete</button>
        
       
        `;
  }

  containerElement.innerHTML=newHtml;

  
}