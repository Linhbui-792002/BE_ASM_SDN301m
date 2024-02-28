const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Database ...");
  })
  .catch((err) => {
    console.log("Connection not working! Error: ", err);
  });
