const { response } = require("express");
const fetch = require("node-fetch");

const User = (req, res) => {
    let user = []
    let url = "http://localhost:8080/MedicalRecords/Alluser"
    fetch(url).then((response)=>{
        response.json().then((res1)=>{
                return res.status(200).send({
                success: true,
                data:res1,
            })
        })
    })
}

module.exports = User