
INSERT INTO users (name, email, password) VALUES ('John Doe', 'john.doe@example.com', 'JdPassword123');
INSERT INTO users (name, email, password) VALUES ('Jane Smith', 'jane.smith@example.com', 'JsPassword456');
INSERT INTO users (name, email, password) VALUES ('Robert Brown', 'robert.brown@example.com', 'RbPassword789');
INSERT INTO users (name, email, password) VALUES ('Emily White', 'emily.white@example.com', 'EwPassword012');
INSERT INTO users (name, email, password) VALUES ('Michael Green', 'michael.green@example.com', 'MgPassword345');


INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (1, '50% Off Electronics', 'Great discount on all electronic items for the week', 'https://electronicsdeals.example.com', 1);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (2, 'Buy 1 Get 1 Free Books', 'Amazing deal for all book lovers out there', 'https://booksdeals.example.com', 2);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (3, 'Summer Clothing Sale', 'Discounts on all summer clothing items', 'https://clothingdeals.example.com', 3);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (4, 'Kitchenware Mega Sale', 'Up to 60% off on selected kitchen items', 'https://kitchendeals.example.com', 4);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (5, 'Fitness Gear Discounts', 'Special offers on all fitness gear and equipment', 'https://fitnessdeals.example.com', 5);







INSERT INTO postRatings (user_id, deal_id, rating) VALUES (1,1,3);  
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (2,2,3);
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (3,3,3);
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (3,3,3);
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (3,3,3);




INSERT INTO likes (user_id, deal_id) VALUES (1,1);
INSERT INTO likes (user_id, deal_id) VALUES (2,2);
INSERT INTO likes (user_id, deal_id) VALUES (3,3);
INSERT INTO likes (user_id, deal_id) VALUES (3,3);
INSERT INTO likes (user_id, deal_id) VALUES (3,3);


INSERT INTO comments (user_id, deal_id, message) VALUES ( 1, 1, 'Wow this is Great!');
INSERT INTO comments (user_id, deal_id, message) VALUES ( 2, 1, 'Nice Find John');
INSERT INTO comments (user_id, deal_id, message) VALUES (3, 1, 'Can you buy this online?');
INSERT INTO comments (user_id, deal_id, message) VALUES (3, 1, 'Wooooooow! This is crazy');
INSERT INTO comments (user_id, deal_id, message) VALUES (3, 1, 'Thanks for posting man!');

INSERT INTO categories (name) VALUES 
('Electronics'),
('Fashion'),
('Home & Garden'),
('Books'),
('Food & Beverage'),
('Travel'),
('Entertainment');


