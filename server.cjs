const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;
const path = require('path');
const createHtml = require('./baseHtml.cjs');


app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/api/create', (req, res) => {
  const logFile = fs.readFileSync('./logfile.txt');
  const now = new Date();
  const newFile = logFile + `\n ${req.body.firstName} ${req.body.lastName}: ${now.toDateString()},`;
  fs.writeFileSync('./logfile.txt', newFile);

  const newHtml = createHtml(req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.fax, req.body.job);
  fs.writeFileSync('./newHtmlFile.html', newHtml)
  res.status(200).download('./newHtmlFile.html');
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})