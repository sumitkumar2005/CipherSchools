const bcrypt = require("bcrypt");
const encryptPassword = async(plainTextPassword)=>{
    try{
        return await bcrypt.hash(plainTextPassword,8)
    }
    catch(err)
    {
        console.log(err)
        throw err;
    }
}
 const comparePassword=async(plainTextPassword,encryptedPassword)=>
 {
    return  await bcrypt.compare(plainTextPassword,encryptedPassword)
 }


 module.exports={encryptPassword,comparePassword};