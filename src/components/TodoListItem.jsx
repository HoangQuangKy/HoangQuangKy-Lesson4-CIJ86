import React from 'react'
import './todoListItem.css'
function TodoListItem({ todo, props, onCheckboxClick, DeleteItem }) {
    console.log(todo)
    console.log('propsInList', props)
    console.log(`complete`, todo.isComplete);
    const handleCheckboxClick = () => {
        onCheckboxClick(todo.id); // Truyền id của todo cho TodoListContainer
    };
    const handleDelete = () => {
        DeleteItem(todo.id)
    }

    return (
        <div className='todoItem'>
            <div style={{ display: `flex`, textDecoration: todo.isComplete === true ? 'line-through' : 'none' }}>
                <input type="checkBox" className='checkBox' checked={todo.isComplete} onClick={handleCheckboxClick} />
                {todo.name}
            </div>
            <button className='deleteBtn' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoListItem
