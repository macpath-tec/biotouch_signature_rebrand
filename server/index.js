const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/', (req, res) => {
  const logFile = fs.readFileSync('./logfile.txt');
  console.log(req.body)
  const newFile = logFile + `\n ${req.body.firstName} ${req.body.lastName},`;
  fs.writeFileSync('./logfile.txt', newFile);
  res.status(200);
   res.json('logged!');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})