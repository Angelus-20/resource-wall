
INSERT INTO users (name, email, password) VALUES ('exampleUser1', 'exampleEmail1@example.com', 'password1');
INSERT INTO users (name, email, password) VALUES ('exampleUser2', 'exampleEmail2@example.com', 'password2');
INSERT INTO users (name, email, password) VALUES ('exampleUser3', 'exampleEmail3@example.com', 'password3');



INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (1, 'titleTest1', 'descriptionTest1', 'exampleUrl1@example.com', 1);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (2, 'titleTest2', 'descriptionTest2', 'exampleUrl2@example.com', 2);
INSERT INTO deals (user_id, title, description, URL, category_id) VALUES (3, 'titleTest3', 'descriptionTest3', 'exampleUrl3@example.com', 3);



INSERT INTO postRatings (user_id, deal_id, rating) VALUES (1,1,3);  
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (2,2,3);
INSERT INTO postRatings (user_id, deal_id, rating) VALUES (3,3,3);




INSERT INTO likes (user_id, deal_id) VALUES (1,1);
INSERT INTO likes (user_id, deal_id) VALUES (2,2);
INSERT INTO likes (user_id, deal_id) VALUES (3,3);


INSERT INTO comments (user_id, deal_id, message) VALUES ( 1, 1, 'example message 1');
INSERT INTO comments (user_id, deal_id, message) VALUES ( 2, 1, 'example message 2');
INSERT INTO comments (user_id, deal_id, message) VALUES (3, 1, 'example message 3');

INSERT INTO categories (name) VALUES 
('Electronics'),
('Fashion'),
('Home & Garden'),
('Books'),
('Food & Beverage'),
('Travel'),
('Entertainment');


