import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./controller/index";

dotenv.config();
if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT);
const app: Express = express();

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
