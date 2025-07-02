
CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(20) UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  document VARCHAR(20) NOT NULL,
  carrier_id INTEGER REFERENCES carriers(id)
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER REFERENCES phones(id),
  amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);
