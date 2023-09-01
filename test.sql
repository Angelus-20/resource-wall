



select deals.id, deals.title, deals.description, deals.URL, users.name, (select count (*) from likes where likes.deal_id = deals.id) as Total_Likes,(select AVG(postRatings.rating) from postRatings where postRatings.deal_id = deals.id) as Deal_Rating, (select categories.name from categories where deals.category_id= deals.id) as Category from deals join users on deals.user_id = users.id;