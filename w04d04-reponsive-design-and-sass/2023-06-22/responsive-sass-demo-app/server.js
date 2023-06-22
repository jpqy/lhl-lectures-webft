const express = require('express');

const app = express();
const port = 8080;

// Serve the /public folder as the default `/` route
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
