import './App.css'
import { useState } from 'react';
import InputForm from './components/InputForm'
import TodoListContainer from './components/TodoListContainer'

function App() {
  const [textInput, setTextInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <>
      <InputForm textInput={textInput}
        setTextInput={setTextInput}
        setTodoList={setTodoList}
        todoList={todoList}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      >
      </InputForm>
      <TodoListContainer textInput={textInput}
        setTextInput={setTextInput}
        setTodoList={setTodoList}
        todoList={todoList}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}></TodoListContainer>
    </>
  )
}

export default App
