const UserService = require('../services/user.service');

const create = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const newUser = await UserService.create(name, email, age);

    console.log('controller');

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findAll = async (_req, res) => {
  try {
    const users = await UserService.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.findOne(id);

    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const { id } = req.params;

    const [updateUser] = await UserService.update(id, name, email, age);

    if (!updateUser)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await UserService.destroy(id);

    console.log(deleteUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
};
