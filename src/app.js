import { addTask, getTasks } from './tasks.js';

addTask({ title: 'Learn JavaScript', priority: 'High' });
console.log(getTasks());