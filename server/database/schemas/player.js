/**
 * Created by Eric on 4/3/2016.
 */
/**
 * Our Schema for Player
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var playerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    bday: { type: String, required: true, },
    jerseynumber: { type: String, required: true },
    teamname: { type: String, required: true },
    dominanthand: { type: String, required: true },
    goals: { type: String, required: true },
    assists: { type: String, required: true },
    profile: {} // for extra information you may / may not want
});

// A method that's called every time a user document is saved..
playerSchema.pre('save', function (next) {

    var player = this;

    // If the password hasn't been modified, move along...
    if (!player.isModified('password')) {
        return next();
    }


});

// Password verification helper


// The primary user model
var Player = mongoose.model('Player', playerSchema);

module.exports = Player;