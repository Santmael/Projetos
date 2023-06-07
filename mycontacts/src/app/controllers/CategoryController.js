const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(404).json({ error: 'Campo de nome vazio' });
    }
    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404 not found, não encontrado
      return response.status(404).json({ error: 'Categoria não encontrada' });
    }
    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    // não content, sem conteudo
    response.sendStatus(204);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExist = await CategoriesRepository.findById(id);
    if (!categoryExist) {
      return response.status(400).json({ error: 'categoria não encontrada' });
    }

    if (!name) {
      return response.status(400).json({ error: 'nome ja em uso' });
    }
    const category = await CategoriesRepository.update(id, { name });
    response.json(category);
  }
}

module.exports = new CategoryController();
