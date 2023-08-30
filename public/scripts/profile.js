$(() => {
    $('.edit-btn').on('click', function () {
      const editModeDivs = $(this).closest('.profile-column').find('.data-row');
      editModeDivs.toggleClass('editable');
      const displayMode = $(".hidden").css("display")
      
      if (displayMode === "none"){
        $(".hidden").css("display", "block")
      } else {
        $("#name-span").text($("#name-input").val())
        $("#lastname-span").text($("#lastname-input").val())
        $("#email-span").text($("#email-input").val())
        $(".hidden").css("display", "none")
      }
    });
  });
  