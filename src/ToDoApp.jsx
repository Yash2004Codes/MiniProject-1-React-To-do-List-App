import React, { useState } from "react";

function ToDoApp() 
{
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [input, setInput] = useState(""); // State for input field

  // Add a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]); // Add task to the list
      setInput(""); // Clear the input field
    }
  };

  // Remove a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.addButton} onClick={addTask}>
          Add
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <span>{task}</span>
            <button style={styles.deleteButton} onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline CSS for simplicity
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "60%",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default ToDoApp;
