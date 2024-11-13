import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from './redux/todoSlice';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task) {
      if (editingId) {
        dispatch(editTodo({ id: editingId, text: task }));
        setEditingId(null);
      } else {
        dispatch(addTodo({ id: Date.now(), text: task , checked: false}));
      }
      setTask('');
    }
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditingId(todo.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const [taskStatus, setTaskStatus] = useState('allTask');

  
  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
      <button onClick={handleAddTodo}>{editingId ? 'Update' : 'Add'}</button>
      <button onClick={(()=>setTaskStatus("completed"))}>completed</button>
      <button onClick={(()=>setTaskStatus("pending"))}>pending</button>
      <button onClick={(()=>setTaskStatus("allTask"))}>All Task</button>
      <ul>
        {todos.filter((data)=>{
          if(taskStatus === "allTask" ){
            return data;
          }
          else if(taskStatus === "pending"&&data.checked ==false){
            return data
          }
          else if (taskStatus ==="completed" && data.checked){
            return data
          }
        }).map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={(e)=>{dispatch(editTodo({ id: todo.id, text: todo.text, checked: e.target.checked}))}}/>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;