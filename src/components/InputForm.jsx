import React from 'react'
import { useState } from 'react';
import './inputForm.css';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function InputForm(props) {

    function handleClickActive() {
        props.setFilteredTodos(props.todoList.filter(todo => todo.isComplete === false))
    }
    function handleClickComplete() {
        props.setFilteredTodos(props.todoList.filter(todo => todo.isComplete === true))
    }
    function handleClickAll() {
        props.setFilteredTodos(props.todoList)
    }
    function OnchangeHandle(e) {
        props.setTextInput(e.target.value)
    }
    function onClickHandle() {
        let newtodoList = [];
        newtodoList = [...props.todoList, { id: uuidv4(), name: props.textInput, isComplete: false }];
        props.setTodoList(newtodoList);
        props.setTextInput('')
        console.log(`todolistForm`, newtodoList);
        props.setFilteredTodos(newtodoList);
    }
    console.log('text', props.textInput);
    console.log('todoList', props.todoList);
    return (
        <>
            <h1>Todo App</h1>
            <div className='btnList'>
                <input type="text" placeholder='Add your new todo' className='inputForm' onChange={OnchangeHandle} value={props.textInput} />
                <button className='addBtn' onClick={onClickHandle}>Add</button>
            </div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" style={{ color: `white` }} href="#" onClick={handleClickAll}>ALL</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: `white` }} href="#" onClick={handleClickActive}>ACTIVE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: `white` }} href="#" onClick={handleClickComplete}>COMPLETED</a>
                </li>
            </ul>
        </>
    )
}

export default InputForm
