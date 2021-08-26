
import React  from 'react';

export default function Page1(){
    const [todos, setTodos] = React.useState([
        { id: 1, text: "Wash dishes", done: false },
        { id: 2, text: "Do laundry", done: false },
        { id: 3, text: "Take shower", done: false }
      ])
      
    return(
        <div className="hoge">
           <h1> Todo List</h1>
           <TodoList todos={todos} setTodos={setTodos}/>
           <AddTodo setTodos={setTodos}/>
            </div>
        );
    
}

const TodoList = ({todos, setTodos}) => {
    const name="fff"
   const handleToggleTodo = (todo) => {
       
    const updatedTodos = todos.map((t) =>
    t.id === todo.id
      ? {
          ...t,
          done: !t.done
        }
      : t
  );
    setTodos(updatedTodos);
   }
   if(!todos.length){
       return <p>No todos left!</p>
   }
   return( 
       <ul>
           {todos.map(todo =>
          
               <li　
               onDoubleClick={()=>handleToggleTodo(todo)}
               style={{textDecoration: todo.done ? "line-through": ""}}
               key={todo.id}>{todo.text}
               <DeleteTodo todo={todo} setTodos={setTodos}/>
               </li>
            )}
       </ul>
   );
}





function DeleteTodo ({todo,setTodos}){
    function handleDeleteTodo(){
     const confirmed =window.confirm("Do you want to delete this?");
     if(confirmed){
       setTodos((prevTodos)=>{
        return prevTodos.filter((t)=>t.id !==todo.id);
        
           
       })
       
     }
    }
    return(
        <span role="button" style={{color: 'red', fontWeight: 'bold', marginLeft: 10, cursor: 'pointer'}} onClick={handleDeleteTodo}> 
        x </span>
    )
}

function AddTodo({setTodos}){
    const inputRef = React.useRef("f");

    function handleAddTodo(event){
    //   event.preventDefault();
      const text=event.target.elements.addTodo.value;
      
      const todo={
          id: Math.random(), 
          text,
          done: false
      }
      setTodos(prevTodos => {
          return prevTodos.concat(todo);
      })
      inputRef.current.value="vv";
    }
    return(
        <form  onSubmit={handleAddTodo}>
            <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
            <button type="submit">Submit</button>
            
        </form>
    )
}