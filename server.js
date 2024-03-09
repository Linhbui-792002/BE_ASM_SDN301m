const express = require('express');
const app = express();
require('dotenv').config();
require('./src/db/dbConnection');
const port = process.env.PORT || 5001;
const router = require('./src/routers');
const errorHandlerMiddleware = require('./src/middlewares/errorHandlers');
const cors = require('cors');
const corsOptions = require('./src/helpers/corsOptions');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const apiLimitter = require('./src/middlewares/rateLimit');
const moment = require('moment-timezone');
moment.tz.setDefault('Europa/Istanbul');

//Init Middlewares
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/uploads', express.static(__dirname));

// app.use(cors(corsOptions));
// app.use('/api', apiLimitter);

// app.use(
//   mongoSanitize({
//     replaceWith: '_',
//   })
// );

// app.use('/api', router);

//Init Routers
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to base API',
  });
});

//Handling Error
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server started with port ${port} ...`);
});
