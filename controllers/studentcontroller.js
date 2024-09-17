const Student=require('../models/student');
async function addStudent(req,res){
    try{
        console.log(req.body,'req.body')
        let student=new Student(req.body);
        await student.save();
        console.log("data saved successfully...")
        res.end("added...")
    }catch(err){
        console.log(err)
    }
}

async function getStudents(req,res) {
    try{
        let students=await Student.find();
        console.log(students,'students');
        res.send(students);
    }catch(err){

    }
}
async function getStudentsByRollNo(req,res) {
    try{
        let rollNo=parseInt(req.params.rollNo)
        console.log(rollNo,"rollNo")
        let student=await Student.findOne({rollNo:rollNo});
        console.log(student,'students');
        res.send(student);
    }catch(err){

    }
}

module.exports={
    addStudent,
    getStudents,
    getStudentsByRollNo
};