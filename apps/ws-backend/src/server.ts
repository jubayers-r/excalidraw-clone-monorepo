import { WebSocketServer } from "ws";

const PORT = process.env.WS_PORT || 8080;

const wss = new WebSocketServer({ port: Number(PORT) });

export default wss;
