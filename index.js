const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

/* eslint-disable no-console */
const app = require('express')();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());

app.use(passport.session());

require('./models/User');

require('./services/passport');

require('./routes/auth')(app);

mongoose.connect(keys.mongoUri);

app.get('/', (req, res) => {
    res.send({ deploy: 'works' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
