const ContactRepositories = require('../repositories/ContactRepositories');

class ContactController {
  // obeter todos os registros
  async index(request, response) {
    const contacts = await ContactRepositories.findAll();

    response.json(contacts);
  }

  // obter 1 registro
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepositories.findById(id);

    if (!contact) {
      // 404 not found, não encontrado
      return response.status(404).json({ error: 'user not found, usuario não encontrado' });
    }
    response.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar 1 registro.
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepositories.findById(id);

    if (!contact) {
      // 404 not found, não encontrado
      return response.status(404).json({ error: 'user not found, usuario não encontrado' });
    }
    await ContactRepositories.delete(id);
    // não content, sem conteudo
    response.sendStatus(204);
  }
}
module.exports = new ContactController();
