const tasks = [];

const addTask = ({ title, priority }) => {
    tasks.push({ title, priority });
    console.log(`Added task: ${title} with priority ${priority}`);
  };
  

const getTasks = () => tasks;

export { addTask, getTasks };

const saveTasksToServer = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(tasks),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      console.log('Tasks saved:', result);
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

