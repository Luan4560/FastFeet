import User from '../models/User';

class UserController {
  async index(req, res) {
    const { password_hash, password, name, email } = await User.findOne(
      req.body
    );
    return res.json({
      name,
      email,
      password,
      password_hash,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
