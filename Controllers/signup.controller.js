const fetch = require("node-fetch");

const Signup = (req,res) => {
    const first_name = req.body.firstname;
    const last_name = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const gender = req.body.gender;
    const role = req.body.role;
    var url = `http://localhost:8080/MedicalRecords/Signup?first_name=${first_name}&last_name=${last_name}&email=${email}&password=${password}&age=${age}&gender=${gender}&role=${role}`;

    fetch(url).then((response)=>{
        response.json().then((res1)=>{
            let check=res1.result
            console.log(check)
            if (check == "user added"){
                return res.status(200).send({
                    success: true,
                    message:res1
                })
            }else{
                return res.status(200).send({
                    success: false,
                    message:res1
                })
            }
        })
    })
}
module.exports =Signup