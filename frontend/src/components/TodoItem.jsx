import React from 'react'
import "./TodoItem.css"
const TodoItem = ({ todo }) => {
    return (
        <div className='TodoItem'>
            <input type="checkbox" readOnly />
            <div className="content">{todo.text}</div>
            <div className="date">{new Date(`${todo.date}`).toLocaleDateString()}</div>
            <div className="btn-wrap">
                <button className="updateBtn">수정</button>
                <button className="deleteBtn">삭제</button>
            </div>
        </div>
    )
}

export default TodoItem