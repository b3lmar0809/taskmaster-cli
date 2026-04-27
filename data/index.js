const { readTasks } = require('/tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log("taskMaster CLI - usa: node index.js <comando>");
}