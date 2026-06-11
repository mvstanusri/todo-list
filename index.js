 let todos = [];
   
    function addtodo(){
      let inputname = document.querySelector('.js-todo');
      let inputdate = document.querySelector('.js-date');
      let name = inputname.value;
      let date = inputdate.value;
      todos.push({
        name:name,
        date:date,

      },); 
      inputname.value = '';
      inputdate.value = '';
      console.log(todos);
      render();
      }


      function render(){
      let html = '';
      for(let i = 0;i < todos.length;i++){
        let todo = todos[i];
          html+=`<div class = "todo-item"><span>${todo.name}-${todo.date}</span><button class = "del"onclick = "deletetodo(${i});">Delete</button> </div>`;      

      }
      document.querySelector('.list').innerHTML =  html;


      }
      function deletetodo(index){
        todos.splice(index,1);
        render();
      }
    