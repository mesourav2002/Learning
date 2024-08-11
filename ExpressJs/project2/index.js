let app = require("./app");

let PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is Started : http://localhost:${PORT}`);
});

