const mongoose = require('../database/db');
const bcrypt = require('bcryptjs');

const authSchema = new  mongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase:true,
    },
    password: {
        type:String,
        required:true,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});
authSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const auth = mongoose.model('auth', authSchema);

module.exports = auth