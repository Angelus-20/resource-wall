// Client facing scripts here
$(() => {

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
