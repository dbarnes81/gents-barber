// jQuery version!
/*$('.service-list a').on('click', function(event) {
  event.preventDefault();
  $('.tab_pane').css('display', 'none');
  $(link.href.match(/\#.+/)[0]).css('display', 'block');
});*/

document.querySelectorAll('.service-list a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Hides all the panes
    const panes = document.querySelectorAll('.tab_pane');
    panes.forEach(function(pane) {
      pane.style.display = 'none';
    });

    // Gets the active pane
    const id = link.href.match(/\#.+/)[0];
    const activePane = document.querySelector(id);

    // Shows the active pane
    activePane.style.display = 'block';
  });
});


let upward = document.querySelector('.upward_symbol'),
    downward = document.querySelector('.downward_symbol'),
    gallery_c = document.querySelector('.gallery_container'),
    gallery = document.getElementById('gallery_youth');
    slides = document.querySelectorAll('.slide');
    header = document.getElementById('gents_wrapper_default');

    window.onload = init;
    function init () {
      gallery.style.display = 'none';
    }

    //Create a click event for upward button
    $('.upward_symbol').click(function(){
      var swap =   $('.slides-1').html();
      $('.slides-1').html($('.slides-2').html());
        $('.slides-2').html(swap);
    //  $('.slide').slideUp(1000).toggle(1000)
    });

    $('.downward_symbol').click(function(){
      var swap =   $('.slides-1').html();
      $('.slides-1').html($('.slides-2').html());
        $('.slides-2').html(swap);
    });

    //Make the Header scroll fixed to Fade
    $('.gents_wrapper_default').fadeOut('opacity')
