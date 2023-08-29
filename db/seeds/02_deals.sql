-- -- INSERT INTO deals (name) VALUES ('Back to School Macbook Sale!');



-- INSERT INTO deals (title, description, date_added, URL, user_id) VALUES
-- ('Back to School Macbook Sales!', '30% OFF', '2023-08-26', 'http://example.com/deal1',1),
-- ('Vintage Furniture', '10%OFF Vintage Furniture', '2023-08-24', 'http://example.com/deal2', 2),
-- ('Jordan 4s', 'Pre Order new Jordans!', '2023-08-20', 'http://example.com/deal3', 1),
-- ('iPhone SE', 'Snag this new iPhone!', '2023-08-22', 'http://example.com/deal4', 2),
-- ('Baseball Cards Limited Edition', 'Mint Edition Cards', '2023-08-21', 'http://example.com/deal5', 2);




-- -- CREATE TABLE deals (
-- --     id SERIAL PRIMARY KEY,
-- --     title VARCHAR(255) NOT NULL,
-- --     description TEXT NOT NULL,
-- --     date_added DATE NOT NULL,
-- --     URL VARCHAR(1000) NOT NULL,
-- --     user_id INTEGER REFERENCES users(id),
-- --     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- --     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- -- );
-- -- select user_id where user.name = 'Alice'