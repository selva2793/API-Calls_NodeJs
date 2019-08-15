var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');

// var ObjectId = Schema.ObjectId;
var UserSchema = new Schema({
    Name: { type: String, default: null },   
    Age: { type: Number, default: 0 }   
},
    {
        collection: 'get_Method',
    }
);
// UserSchema.pre('save', function (next) {
//     var user = this;

//     if (!user.isModified('Password')) return next();
//     bcrypt.hash(user.Password, null, null, function (err, hash) {
//         if (err) return next(err);
//         user.Password = hash;
//         next();
//     });
// });

// UserSchema.methods.comparePassword = function (Password) {
//     return bcrypt.compareSync(Password, this.Password);
// };
module.exports = mongoose.model('get_Method', UserSchema);     //// give model schema name