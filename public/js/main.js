$(function() {

  $('#container-welcome').animate({ opacity: 1 }, 300);

  $('#btn-begin-provisioning').click(function(e) {
    e.preventDefault();

    $(this).prop('disabled', true);

    $('#container-welcome').fadeOut(300, function() {
      $(this).addClass('hidden')

      $('#container-proceed').removeClass('hidden');

      $('#container-proceed nav').animate({ 'marginTop': 0, 'opacity': 1 }, 300);

      $('#container-proceed .login-form').animate({ 'opacity': 1 }, 300);
    });
    

  });

  const $steps = $('#proceed-steps');

  $('#btn-login').click(function() {
    const $loginform = $('.login-form');

    $steps.animate({'marginLeft': "-100vw" }, 500, function() {

      $('.system-details').animate({ opacity: 1 }, 400);
      $('.user-details').animate({ opacity: 1 }, 800);
      $('.installation-target').animate({ opacity: 1 }, 1200);
    });
  });

  $('#btn-assign-and-reboot').click(function(e) {
    e.preventDefault();
    $.post('/api/save', function() {
      window.location.href = 'shutdown:';
    });

  });
});
