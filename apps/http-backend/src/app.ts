import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import Routes from "./api/routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  }),
);
// TODO: favicon middleware for catching 30x redirect from browsers

app.use(helmet());
app.use(cookieParser());

app.use("/api/v1", Routes);

// TODO: Not found handler (should be after all routes)

// TODO: Global error handler (should be last)

export default app;
