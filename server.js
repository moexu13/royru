const { PORT = 8000 } = process.env;

const listener = () => {
  console.log(`Listening on Port ${PORT}!`);
}

// TODO: add error handling
const app = require("./app");
app.listen(PORT, listener);
