import rateLimit from 'express-rate-limit';

const allowList = ['::1'];

const apiLimitter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: (req, res) => {
    console.log('api url:', req.url);
    if (req.url === '/login' || req.url === '/register') {
      return 5;
    } else {
      return 100;
    }
  },
  skip: (req, res) => allowList.includes(req.ip),
  message: {
    success: false,
    message: 'Too many requests in too little time !',
    standardHeaders: true,
    legacyHeaders: false,
  },
});

export default apiLimitter;
