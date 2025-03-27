import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px'
        }}>
            <input
                className='checkbox'
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
                style={{
                    marginRight: '10px'
                }}
            />
            <p style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                fontSize: '18px'
            }}>{task.text}</p>
            <button
                onClick={() => deleteTask(task.id)}
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                X
            </button>
        </div>
    );
}
export default TodoItem;