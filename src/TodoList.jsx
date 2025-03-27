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
        <div className="todo-list" style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", width: "500px", margin: "40px auto" }}>
            <h1 style={{ color: "black", fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>TodoList</h1>
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
                style={{ padding: "10px", fontSize: "18px", borderRadius: "5px", width: "80%", height: "40px", border: "none", outline: "none", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", marginBottom: "20px" }}
            />
            <button onClick={() => addTask(text)} style={{ padding: "10px", fontSize: "18px", borderRadius: "5px", backgroundColor: "black", color: "white", width: "50%", height: "40px", border: "none", outline: "none", cursor: "pointer" }}>Aggiungi</button>
        </div>
    );
}
export default TodoList;