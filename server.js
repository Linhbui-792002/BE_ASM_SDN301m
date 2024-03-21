import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors'
// import ('./src/db/dbConnection');
import {
  notifyRouter,
  userRouter,
  branchRouter,
  typeRoomRouter,
  dormRouter,
  dormFloorRouter,
  roomRouter,
  bookingTimeRouter,
  historyEwRouter,
  bookingRouter
} from './src/routes/index.js'
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
import { checkToken } from './src/middlewares/auth.js';
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
app.use('/branch', checkToken, branchRouter)
app.use('/notify', checkToken, notifyRouter)
app.use('/type-room', checkToken, typeRoomRouter)
app.use('/dorm', checkToken, dormRouter)
app.use('/dorm-floor', checkToken, dormFloorRouter)
app.use('/room', checkToken, roomRouter),
  app.use('/booking-time', checkToken, bookingTimeRouter)
app.use('/booking', checkToken, bookingRouter)
app.use('/history-ew', checkToken, historyEwRouter)

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
