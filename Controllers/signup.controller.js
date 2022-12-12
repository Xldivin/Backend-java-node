const fetch = require("node-fetch");

const Signup = (req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const gender = req.body.gender;
    const role = req.body.role;
    var url = `http://localhost:8080/MedicalRecords2/Signup?firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&age=${age}&gender=${gender}&role=${role}`;

    fetch(url).then((response)=>{
        response.json().then((res1)=>{
            console.log(res1)
            let check=res1.Data
            if (check == "User added"){
                return res.status(200).send({
                    success: true,
                    message:res1
                })
            }else{
                return res.status(401).send({
                    success: false,
                    message:"Failed to send data"
                })
            }
        })
    })
}
module.exports =Signup