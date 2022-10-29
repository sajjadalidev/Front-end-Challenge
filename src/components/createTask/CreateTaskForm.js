import { useState, useEffect } from "react";
import { saveAllTasks, getAllTasks } from "../../utils/localStorage";
import { Button, Title } from "../../styles/GlobalStyles";
import { TaskFormContainer, Input, Form } from "./CreateTaskForm.styles";

function CreateTaskForm() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle Change in Input to create New Task
  const handelInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    setNewTask(target.value);
  };

  // Handle Add Task
  const handleAddTask = (event) => {
    event?.preventDefault();
    const updatedTasks = [...tasks, { id: Math.random(), name: newTask }];
    setTasks(updatedTasks);
    setNewTask("");
    saveAllTasks(updatedTasks);
    alert("New Task Added Successfully!");
  };

  // Every time when we reload page it refresh the state of the component so to avoid form this behavior of react we used useEffect and handle previous all tasks
  useEffect(() => {
    const oldTasks = getAllTasks();
    setTasks(oldTasks ? oldTasks : []);
  }, []);
  return (
    <TaskFormContainer>
      <Title>Create your new Task</Title>
      <Form onSubmit={handleAddTask}>
        <Input
          placeholder="I will do...."
          type="text"
          value={newTask}
          onChange={handelInputChange}
          required
        />
        <Button type="submit">Create Task</Button>
      </Form>
    </TaskFormContainer>
  );
}

export default CreateTaskForm;
