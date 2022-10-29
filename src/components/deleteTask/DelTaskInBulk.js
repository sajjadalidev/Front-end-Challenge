import { Fragment, useState } from "react";
import { Label, Input, LabelText, TaskContainer } from "./DelTaskInBulk.styles";
import { Button, Title } from "./../../styles/GlobalStyles";
import { getAllTasks, saveAllTasks } from "./../../utils/localStorage";

function DelTasksInBulk() {
  const tasks = getAllTasks();
  let [itemsToRemove, setItemsToRemove] = useState([]);

  const addItemInDelList = (id) => {
    let newItemsList = [...itemsToRemove, id];
    setItemsToRemove(newItemsList);
  };

  function removeTasks() {
    let oldTasks = [...tasks];
    if (itemsToRemove.length) {
      oldTasks = oldTasks.filter((item) => !itemsToRemove.includes(item.id));
      setItemsToRemove([]);
      saveAllTasks(oldTasks);
    } else {
      alert("Select minimum one element to remove from list");
    }
  }

  return (
    <TaskContainer>
      <Title> Select multiple tasks and delete them.</Title>
      <Title>{tasks == null && "No Task found in your list!"}</Title>
      <Fragment>
        {tasks &&
          tasks.map((task) => (
            <Fragment key={task.id}>
              <Label onClick={() => addItemInDelList(task.id)}>
                <Input value={task.name} />
                <LabelText>{task.name}</LabelText>
              </Label>
            </Fragment>
          ))}
        {tasks == null ? (
          ""
        ) : (
          <Button onClick={removeTasks}>Delete Selected Tasks</Button>
        )}
      </Fragment>
    </TaskContainer>
  );
}

export default DelTasksInBulk;
