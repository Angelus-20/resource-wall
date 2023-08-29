-- INSERT INTO deals (name) VALUES ('Back to School Macbook Sale!');



INSERT INTO deals (title, description, date_added, URL, user_id) VALUES
('Back to School Macbook Sales!', '30% OFF', '2023-08-26', 'http://example.com/deal1', 1),
('Vintage Furniture', '10%OFF Vintage Furniture', '2023-08-24', 'http://example.com/deal2', 2),
('Jordan 4s', 'Pre Order new Jordans!', '2023-08-20', 'http://example.com/deal3', 1),
('iPhone SE', 'Snag this new iPhone!', '2023-08-22', 'http://example.com/deal4', 2),
('Baseball Cards Limited Edition', 'Mint Edition Cards', '2023-08-21', 'http://example.com/deal5', 2);



SELECT users.name, deals.title, deals.description, deals.date_added, deals.URL, COUNT(likes.) as likes, AVG(ratings.)
FROM deals
JOIN users ON deal_id = deals.id
JOIN likes ON deal_id = deals.id
JOIN comments ON deal_id = deals.id
JOIN users ON users.id = user_id
GROUP BY users.id;
