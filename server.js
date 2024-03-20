import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors'
// import ('./src/db/dbConnection');
import { notifyRouter, userRouter, branchRouter, typeRoomRouter, dormRouter, dormFloorRouter, roomRouter, bookingTimeRouter } from './src/routes/index.js'
import connect from './src/db/dbConnection.js';
import {
  errorHandlerMiddleware,
  notFoundHandler,
} from './src/middlewares/errorHandlers.js';
import corsOptions from './src/helpers/corsOptions.js'
import mongoSanitize from 'express-mongo-sanitize';
import path from 'path';

dotenv.config();

const app = express();

// const apiLimitter = require('./src/middlewares/rateLimit');
import moment from 'moment-timezone';
moment.tz.setDefault('Europa/Istanbul');

//Init Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/uploads', express.static(__dirname));

app.use(cors(corsOptions));
// app.use('/api', apiLimitter);

app.use(
  mongoSanitize({
    replaceWith: '_',
  })
);

//Init Routers
app.use('/user', userRouter);

app.use('/branch', branchRouter)
app.use('/notify', notifyRouter)
app.use('/type-room', typeRoomRouter)
app.use('/dorm', dormRouter)
app.use('/dorm-floor', dormFloorRouter)
app.use('/room', roomRouter),
  app.use('/booking-time', bookingTimeRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to base API',
  });
});


//Handling Error
app.use(notFoundHandler);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  connect();
  console.log(`Server started with port ${port} ...`);
});
