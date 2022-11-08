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

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;
    if (!name || !email) {
      return response.status(404).json({ error: 'Campo de nome ou Email Vazio' });
    }
    const contactExist = await ContactRepositories.findEmail(email);

    if (contactExist) {
      return response.status(404).json({ error: 'usuario já cadastrado' });
    }
    const contacts = await ContactRepositories.create({
      name, email, phone, category_id,
    });
    response.json(contacts);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactRepositories.findById(id);
    if (!contactExist) {
      return response.status(400).json({ error: 'usuário não encontrado' });
    }

    if (!name) {
      return response.status(400).json({ error: 'nome ja em uso' });
    }

    const contactByEmail = await ContactRepositories.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(404).json({ error: 'email já cadastrado' });
    }
    const contact = await ContactRepositories.update(id, {
      name, email, phone, category_id,
    });
    response.json(contact);
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
