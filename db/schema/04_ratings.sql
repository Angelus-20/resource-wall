DROP TABLE IF EXISTS ratings CASCADE;
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- deal_id INTEGER REFERENCES deals(id) ON DELETE CASCADE,
  rating_value INTEGER CHECK (rating_value BETWEEN 1 AND 5)  -- Assuming a 1-5 rating system
);
