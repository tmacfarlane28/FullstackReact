/* eslint-disable no-console */
const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');
require('./routes/auth')(app);
require('./models/User');

mongoose.connect(keys.mongoUri);

app.get('/', (req, res) => {
    res.send({ deploy: 'works' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
