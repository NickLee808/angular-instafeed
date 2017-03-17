// CLIENT ID: ced50f412929460f81f8ce8fb8d46345
// USER ID: 4523736361

const express = require ('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, _ => console.log('server listening on port ', PORT));

module.exports = app;