const tasks = [];

const addTask = (task) => {
  tasks.push(task);
  console.log(`Added task: ${task}`);
};

const getTasks = () => tasks;

export { addTask, getTasks };
