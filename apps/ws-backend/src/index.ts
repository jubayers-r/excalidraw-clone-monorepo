import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: Number(process.env.WS_PORT) || 8080 });

wss.on("connection", (ws) => {
    console.log("WS server running on port ", Number(process.env.WS_PORT) || 8080);
});