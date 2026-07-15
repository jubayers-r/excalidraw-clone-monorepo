import wss from "./server";

wss.on("connection", (ws) => {
  console.log(`Server is running at ws://localhost:8080`);

  ws.on("close", () => {
    console.log("Client disconnected from connection layer");
  });
});
