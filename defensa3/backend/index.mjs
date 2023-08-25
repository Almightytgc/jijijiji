import express from "express";
import cors from "cors";
import router from "./router.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


const puerto = 5000;

app.listen(puerto, () => console.log("servidor corriendo en el puerto", puerto));