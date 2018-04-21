const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    googleId: String
});

model('users', UserSchema);
