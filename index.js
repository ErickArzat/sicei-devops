import app from './src/app.js';
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("SICEI API");
});

app.listen(PORT, () => {
  console.log(`SICEI API corriendo en http://localhost:${PORT}`);
});
