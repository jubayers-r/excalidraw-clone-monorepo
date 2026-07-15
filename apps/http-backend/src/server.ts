import app from "./app";

const PORT = process.env.HTTP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
