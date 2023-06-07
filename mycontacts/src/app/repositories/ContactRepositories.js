const db = require('../../database');

class ContactRepositories {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT con.*, cat.name as name_category
    FROM contacts as con
    LEFT JOIN categories as cat on con.categories_id = cat.id
    ORDER BY con.name ${direction}`);
    return rows;
  }

  async findByEmail(email) {
    const [row] = await db.query('select * from contacts where email = $1', [email]);
    return row;
  }

  async findById(id) {
    const [row] = await db.query('select * from contacts where id = $1', [id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOp;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts (name, email, phone, categories_id)
      values ($1, $2, $3, $4)
      RETURNING *
      `, [name, email, phone, category_id]);
    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    UPDATE contacts
    SET name = $1, email = $2, phone = $3, categories_id = $4
    Where id = $5
    RETURNING *
   `, [name, email, phone, category_id, id]);
    return row;
  }
}
module.exports = new ContactRepositories();
