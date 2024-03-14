const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const testRouter = require('./routes/testRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors())
app.use('/api', testRouter)

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the API!'
  };
  res.json(data);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});