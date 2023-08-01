import React from 'react'
import TodoListItem from './TodoListItem'
function TodoListContainer(props) {
    console.log('prop', props);
    const handleCheckboxClick = (id) => {
        const updatedTodoList = props.todoList.map((todo) =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        props.setTodoList(updatedTodoList);
        props.setFilteredTodos(updatedTodoList)
    }
    const handleClickDelete = (id) => {
        const deleteItem = props.filteredTodos.filter(todo => todo.id !== id)
        props.setFilteredTodos(deleteItem);
        props.setTodoList(deleteItem);
    }
    return (
        <>
            {props.filteredTodos.map((todo) => {
                return (
                    <TodoListItem key={todo.id} DeleteItem={handleClickDelete} todo={todo} onCheckboxClick={handleCheckboxClick} props={props}></TodoListItem>)
            })}
        </>
    )
}

export default TodoListContainer
