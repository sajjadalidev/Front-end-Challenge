export const saveAllTasks = (tasks) =>
  localStorage.setItem("allTasks", JSON.stringify(tasks));
export const getAllTasks = () => JSON.parse(localStorage.getItem("allTasks"));
