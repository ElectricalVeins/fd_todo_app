import express from 'express';
import router from './routes';
import applicationErrorHandler
  from './middlewares/error_handlers/applicationErrorHandler.js';
import sequelizeErrorHandler
  from './middlewares/error_handlers/sequelizeErrorHandler.js';

const cors = require('cors');

//Defining server port
const PORT = process.env.PORT || 5000;

//create server instance
const app = express();

//Set cors headers
app.use(cors());

// Allows Content-type: application/json
app.use(express.json());

//Routing
app.use(router);

//Error Handling
app.use(applicationErrorHandler);
app.use(sequelizeErrorHandler);
app.use((err, req, res) => {
  res.status(500).send('Internal server error');
});

// Listening Start
app.listen(PORT,
           () => console.log(`Server app started. Listening on port ${PORT}!`));
