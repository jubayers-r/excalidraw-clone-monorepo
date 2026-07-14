import cors from "cors";
import express from "express";


const app = express();

app.use(express.json());

app.use(cors());

app.listen(process.env.HTTP_PORT || 3001, () => {
    console.log("HTTP server is running on port ", process.env.HTTP_PORT);
});



