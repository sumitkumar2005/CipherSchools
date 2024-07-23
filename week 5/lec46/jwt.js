const jwt = require('jsonwebtoken');
const CS_SECRET_KEY ="CSSecretKey"
const generateToken = (payload)=>{
    const token = jwt.sign(payload,CS_SECRET_KEY);
    return token;
}

const verifyToken=(token)=>{
    try{
        const payload=jwt.decode(token,CS_SECRET_KEY);
        return {isValidToken:true,payload};
    }
    catch(err)
    {
     
        console.error(err)
        return {isValidToken:false,payload:undefined};
    
    }
}
module.exports={generateToken,verifyToken};
console.log(generateToken("Sumit"))
console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VtaXQiLCJpYXQiOjE3MjEwMjA2NjB9.a6UrZr29qnGaylFYVQwcqoRmNPv2kgpPjpKVUOEBEp4"))
