import React from "react";
import { TaskContainer } from "./Tasks.styles";
import { Button, Title, SwitchTo } from "./../../styles/GlobalStyles";
import { LabelText } from "./../deleteTask/DelTaskInBulk.styles";
import { getAllTasks } from "../../utils/localStorage";
function Tasks() {
  const tasks = getAllTasks();

  return (
    <TaskContainer>
      <Title>Hey Dude! This is your task list</Title>
      <ol>
        {tasks &&
          tasks?.map((task) => (
            <li>
              <LabelText key={task.id}>{task.name}</LabelText>
            </li>
          ))}
      </ol>
      <Button>
        <SwitchTo to="/create-task">Add new Task</SwitchTo>
      </Button>
    </TaskContainer>
  );
}

export default Tasks;
