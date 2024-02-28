const router = require("express").Router();
const authRouter = require("./auth.router");
const upload = require("./auth.upload");

router.use(authRouter);
router.use(upload);

module.exports = router;
