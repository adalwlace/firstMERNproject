import express from "express";
import connectDB from "./connect.db.js";
import productRoutes from "./product/product.controller.js";
import userRoutes from "./user/user.controller.js";
import cors from "cors";

const app = express();
//to make app understand json
app.use(express.json());

//connect database
connectDB();

//? CORS => Cross Origin Resource Sharing
app.use(cors());

//TODO :CORS
//TODO:api vers

//TODO :global error handler
//TODO:api vers

//register routes
app.use(productRoutes);
app.use(userRoutes);

//network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`app sis listening on port ${PORT}`);
});
