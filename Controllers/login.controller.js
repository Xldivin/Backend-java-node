const fetch = require("node-fetch");

 const Login = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    let check = false;
    let url = `http://localhost:8080/MedicalRecords2/Login?email=${email}&password=${password}`
    fetch(url).then((response)=>{
        response.json().then((res1)=>{
            console.log(res1.status)
            check = res1.status.Status;
            if (check == 'Logged in'){
                return res.status(200).send({
                    success: true,
                    role:res1.status.role,
                    message:"logged in"
                })
            }else {
                return res.status(401).send({
                    success: false,
                    message:"failed to login"
                })
            }
        })
    })
} 

module.exports = Login