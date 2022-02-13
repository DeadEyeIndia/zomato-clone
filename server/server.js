const app = require("./app");
const connectDB = require("./database/dbConfig");

const PORT = 3010;

// connect database
connectDB();

// Listen
app.listen(PORT, () => {
  console.log(`Server is on => http://localhost:${PORT}}`);
});
