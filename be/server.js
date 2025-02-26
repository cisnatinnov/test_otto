const http = require("http");
const app = require("./app");
const server = http.createServer(app);

require('dotenv').config();

const sequelize = require('./configs/database');

const port = process.env.PORT;

// Sync Sequelize Models
sequelize.sync({ force: true }) // Use force: true to drop and recreate tables for development only and migration
.then(() => {
  console.log('Database synced successfully!');
})
.catch((err) => {
  console.error('Error syncing database:', err);
});

// Start Server
server.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})