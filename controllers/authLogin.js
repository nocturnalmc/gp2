const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const authLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ msg: 'Please provide username and password' });
  }

  const user = await UserModel.findOne({ username: username });
  if (!(user && (await user.comparePassword(password)))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  //   // for generate page use
  //   const genToken = jwt.sign(
  //     {
  //       userId: user._id,
  //       username: user.username,
  //       negeri: user.negeri,
  //       daerah: user.daerah,
  //       kp: user.kp,
  //       accountType: user.accountType,
  //     },
  //     process.env.JWT_SECRET,
  //     { expiresIn: '1h' }
  //   );
  //   // here have a cookie
  //   res.cookie('genToken', genToken, { maxAge: 600000 });

  const userToken = user.createJWT();

  user.password = undefined;

  const payloadUserType = jwt.verify(userToken, process.env.JWT_SECRET);
  if (payloadUserType.accountType === 'negaraUser') {
    return res.status(401).json({ msg: 'This is admin credentials' });
  }
  if (payloadUserType.accountType === 'negeriUser') {
    return res.status(401).json({ msg: 'This is admin credentials' });
  }
  if (payloadUserType.accountType === 'daerahUser') {
    return res.status(401).json({ msg: 'This is admin credentials' });
  }

  res.status(200).json({ user, userToken });
};

module.exports = authLogin;
