const { User } = require('../models');

module.exports = {
  create: async (name, email, age) => await User.create({ name, email, age }),
  findAll: async () => await User.findAll(),
  findOne: async (id) => await User.findByPk(id),
  update: async (id, name, email, age) =>
    await User.update({ id, name, email, age }, { where: { id } }),
  destroy: async (id) => await User.destroy({ where: { id } }),
};
