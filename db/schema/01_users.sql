-- Drop and recreate Users table (Example)

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,

--   -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   -- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- How do you reference a user ID when its a "serial"


DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);