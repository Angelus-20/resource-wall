// Client facing scripts here
$(() => {
  const deals = $();

  $.ajax({
    method: "GET",
    url: "/api/comments",
  }).done((response) => {
    const $usersList = $("#users");
    $usersList.empty();

    for (const user of response.users) {
      $(`<li class="user">`).text(user.name).appendTo($usersList);
    }
  });
});
