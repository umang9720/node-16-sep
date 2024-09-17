const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: Number },
    name: { type: String },
    fatherName: { type: String },
    aadharCardNo: { type: Number },
    mobileNo: { type: Number }
})
module.exports = mongoose.model('student', StudentSchema)