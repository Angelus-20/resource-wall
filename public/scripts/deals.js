// Client facing scripts here
$(() => {
  $(document).ready(function() {
    console.log('testing');
    
    $("#searchForm").submit((event) =>{
      console.log("Text");
      event.preventDefault(); //code for what happens after you hit submit / stops refreshing
      const searchRenderVal = ($("#search").val());
      console.log(searchRenderVal); // when button click look up value and log it
      
  
      const createSearchDeal = function(deal) {
        //Default entries for Tweet elements to handle incomplete data
        
        let title = "No title";
        let description = "No handle";
        let URL = "https://i.imgur.com/73hZDYK.png";
        let user_id = "No user";
  
        //Handling user data assignment
        if (deal.title) {
          title = deal.title;
        }
  
        if (deal.description) {
          description = deal.description;
        }
  
        if (deal.URL) {
          URL = deal.URL;
        }
  
        if (deal.user_id) {
          user_id = deal.user_id;
        }
  
      
        //   // creating an escape function to prevent textarea script hacking
        //   const escape = function(str) {
        //     let div = document.createElement("div");
        //     div.appendChild(document.createTextNode(str));
        //     return div.innerHTML;
        //   };
  
        //Tweet template with template literals
  
        const generatedDeal = `
  
      
        <div class="card">
        <header class="add_favorite">
        <img src="/images/user1.png" style="width:100%">
        <i class="fa-solid fa-plus"></i>
        </header>
        <main>
          <div>${title}</div>
          <div>${description}</div>
          <div>${URL}</div>
          <div>${user_id}</div>
        </main>
        <section>
        <footer class="icons">
          <span><i class="far fa-solid fa-comment"></i> 5</span>
          <span><i class="fas fa-retweet"></i> 10</span>
          <span><i class="far fa-solid fa-heart"></i> 15</span>
          <span><i class="fas fa-share"></i></span> 
        </footer>
        </section>
      </div>
      
      `;
        $(".main-container").prepend(generatedDeal);
      };
  
      const renderSearchDeals = function(deals) {
        // clearing the DOM so duplicate entries are not visible
        $(".main-container").empty();
        for (let deal of deals) {
          createSearchDeal(deal);
        }
      };
  
      
  
  
      $.ajax({   // ajax is the general layout to make a get request
        url: "/deals/search", // get request searchRender and send along with it search value // this allows us to communicate with backend
        method: "GET",
        data: {searchRenderVal},  //specify what we're sending
        success: function(result) {
          console.log("success");
          console.log(result[0]);
          // inserting into dom // pseudo code to render onto dom - select a container element (deals section / container - inserting HTML in JS file in Tweeter)
          // Emptying text area
          // to explicitly add a breakpoint use : debugger;
          // using result with renderSearchDeals function
          renderSearchDeals(result);
        },
        error: function(error) {
          //Jquery sending error message if post does not work
          console.log(error);
        },
      });
    }); // listening for when form gets submitted
  
  
  });
  const comments = [
    {
      "id": 1,
      "userImage": "/female-user.png",
      "message": "oh wow it's exactly what i need.",
      "likes": "6"
    },
    {
      "id": 2,
      "userImage": "/male-user.png",
      "message": "any damage or issues with it??",
      "likes": "3"
    }
  ];


  // $('form').on('submit', function(event) {
  //   event.preventDefault();

  //   // Get tweet content and calculate remaining characters
  //   const commentContent = $('#comment-text').val().trim();
  //   const remainingCharacters = 140 - commentContent.length;

  //   // Handle empty tweet content
  //   if (!commentContent) {
  //     showError('comment content is required.');
  //     return;
  //   }

  //   // Handle tweet content exceeding character limit
  //   if (remainingCharacters < 0) {
  //     showError('comment content is too long.');
  //     return;
  //   }

  //   hideError();


  const commentsContainer = $("#comments-container");

  // Loop through comments and append to the container
  comments.forEach(comment => {
    const imagePath = `images${comment.userImage}`;
    const likePath = `${comment.likes}`;

    const commentElement = `
    <article class="bot-container">
      <div class="comment user-comments">
      <img class="bot-users" src="${imagePath}" alt="User Image">
        <p>${comment.message}</p>
          <footer class="icons-deals">
            <span><i class="fas fa-retweet"></i></span>
            <span><i class="far fa-solid fa-heart"></i> ${likePath}</span>
            <span><i class="fas fa-share"></i></span>
          </footer>
      </div>
    </article>
    `;

    commentsContainer.append(commentElement);
  });
});
