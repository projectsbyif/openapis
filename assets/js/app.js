$(function() {
  // Contents
  $('#contents').hide().addClass('hideable');
  $('#close_contents').show();

  $('#link_contents').click(function(e) {
    e.preventDefault();

    $('#contents').css({
      'right': -$('#contents').outerWidth()
    }).show().animate({
      'right': 0
    }, 250);
  });

  $('#close_contents').click(function(e) {
    e.preventDefault();

    $('#contents').animate({
      'right': -$('#contents').outerWidth()
    }, 250, function() {
      $('#contents').hide();
    });
  });
});
