const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const admin = require("./routers/admin");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(admin);

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
