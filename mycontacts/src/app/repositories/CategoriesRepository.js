const db = require('../../database');

class CategoriesController {
  async findAll() {
    const rows = await db.query('Select * from categories');
    return rows;
  }

  async findById(id) {
    const rows = await db.query(`
    SELECT * FROM categories
    WHERE id = $1
    `, [id]);
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories (name)
    VALUES ($1) RETURNING *`, [name]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOp;
  }

  async update(id, { name }) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    Where id = $2
    RETURNING *
   `, [name, id]);
    return row;
  }
}

module.exports = new CategoriesController();
