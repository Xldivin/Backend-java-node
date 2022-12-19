const fetch = require("node-fetch");

 const Login = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    let check = false;
    let url = `http://localhost:8080/MedicalRecords/Login?email=${email}&password=${password}`
    fetch(url).then((response)=>{
        response.json().then((res1)=>{
            console.log(res1.User)
            check = res1.User;
            if (check == 'Logged in'){
                return res.status(200).send({
                    success: true,
                    role:res1.result,
                    message:"logged in"
                })
            }else {
                return res.status(401).send({
                    success: false,
                    role:res1.result,
                    message:"failed to login"
                })
            }
        })
    })
} 

module.exports = Login