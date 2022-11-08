CREATE DATABASE mycontacts;

CREATE extension "uuid-ossp";

CREATE TABLE categories (
  id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

select * from categories
