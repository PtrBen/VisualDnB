const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
    SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String}
})

userSchema.pre('save', function(next){
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return callback(err);
        callback(undefined, isMatch);
    });
};

const User = mongoose.model('myuser', userSchema);
module.exports = User;

