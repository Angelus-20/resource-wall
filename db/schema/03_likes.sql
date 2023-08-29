-- DROP TABLE IF EXISTS deals CASCADE;
-- CREATE TABLE likes (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
--   -- deal_id INTEGER REFERENCES deals(id) ON DELETE CASCADE
-- );

-- -- CREATE INDEX idx_like_user ON likes(user_id);
-- -- CREATE INDEX idx_like_deal ON likes(deal_id);