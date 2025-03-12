const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

module.exports = app;
if (require.main === module) {
    app.listen(3000, () => console.log("Server running on port 3000"));
}

module.exports = { app, server };
