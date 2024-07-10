import { useState } from "react";
import TodoItem from './TodoItem';
function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Visita: medica',
            completed: true
        },
        {
            id: 2,
            text: 'Bolletta: luce',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }
    return (
        <div className="todo-list">
            <h1>TodoList<h5 style={{ color: "green", display: "inline" }}>٧</h5></h1>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}
export default TodoList;