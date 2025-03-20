const tasks = [];

const addTask = ({ title, priority }) => {
    tasks.push({ title, priority });
    console.log(`Added task: ${title} with priority ${priority}`);
  };
  

const getTasks = () => tasks;

export { addTask, getTasks };

