DROP TABLE IF EXISTS deals CASCADE;
CREATE TABLE deals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date_added DATE NOT NULL,
    URL VARCHAR(1000) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);


