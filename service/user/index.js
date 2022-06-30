const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
const port = 9000

app.use(cors());
app.use(bodyParser.json());

const pathApi = '/api/user';
const items = [
    {
        id: 1,
        name: "user-1"
    },
    {
        id: 2,
        name: "user-2"
    },
    {
        id: 3,
        name: "user-3"
    }
];
/** get all item */
app.get(pathApi, async (req, res) => {
    res.send(items);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})