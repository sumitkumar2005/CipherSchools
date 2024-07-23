const User = require('./User');

const addNewUser = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPasswordAuth(email, password);
        if (!user) {
            return res.status(400).send({ message: 'Login failed' });
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ message: 'Login failed' });
    }
};

const deleteUser=async(req,res)=>{
    const deleteResult = await User.deleteOne({_id:req.params.id});
    if(!deleteResult.deletedCount)
    {
        return(`Delete failed: User with ID : ${req.params.id}`)
    }
console.info("success")
return res.send("Successfully deleted")
}
module.exports = { loginUser, addNewUser,deleteUser };
