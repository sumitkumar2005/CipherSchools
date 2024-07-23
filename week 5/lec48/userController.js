const User = require('./User');

const addNewUser = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        const token = await user.generateToken();
        await user.save();
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPasswordAuth(email, password);
        if (!user) {
            return res.status(400).send({ message: 'User not found or password incorrect' });
        }
        const token = await user.generateToken();
        res.status(200).send({ user, token });
    } catch (err) {
        res.status(500).send({ message: 'Login failed' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { user } = req;
        const deleteResult = await User.deleteOne({ _id: user._id });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'Successfully deleted user' });
    } catch (err) {
        res.status(500).send({ message: err });
        console.log(err)
    }
};

module.exports = { loginUser, addNewUser, deleteUser };
