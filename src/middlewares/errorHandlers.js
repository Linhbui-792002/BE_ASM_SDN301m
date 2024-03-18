import createHttpError from 'http-errors';

const notFoundHandler = (req, res, next) => {
  next(createHttpError.NotFound());
};

const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

export { notFoundHandler, errorHandlerMiddleware };
