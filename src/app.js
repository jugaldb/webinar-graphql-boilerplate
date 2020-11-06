const ApiRoutes = require( './routes/index');
const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URL

const PATH = {
  API: '/api',
};


// Add the apiRoutes stack to the server
app.use(PATH.API, ApiRoutes);



(async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(`database connection error ${e}`);
  }
})();

const connection = mongoose.connection;

connection.once('open', () => {
  console.log(`Successfully connected to database at ${URL}`);
});

connection.on('disconnected', () => {
  console.log(`disconnected event to database at ${URL}`);
});

connection.on('reconnectFailed', () => {
  console.log(`reconnectFailed event to database at ${URL}`);
});

connection.on('error', () => {
  console.log(
    `database connection error while connecting at ${URL}`
  );
});

server.start(option, async ({ port }) => {
  console.log(`🚀 server started on port ${port} visit :${port}/playground`);
});

module.exports = { app };
