CREATE DATABASE mycontacts;

CREATE extension IF NOT EXISTS  "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  categories_id uuid,
  FOREIGN KEY (categories_id) REFERENCES categories(id)
);
