const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ismael Santos',
    email: 'ismael.santos@gmail.com',
    phone: '61995785661',
    category_id: v4(),

  },
  {
    id: v4(),
    name: 'Renata Rusch',
    email: 'Rena@gmail.com',
    phone: '61995783321',
    category_id: v4(),

  },
];

class ContactRepositories {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        // eslint-disable-next-line no-shadow
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        // eslint-disable-next-line no-shadow
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(contacts);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContacts = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContacts : contacts
      ));
      resolve(updateContacts);
    });
  }
}
module.exports = new ContactRepositories();
