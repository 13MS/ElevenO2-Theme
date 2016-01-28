jQuery( 'iframe[src*="youtube.com"]').wrap("<div class='flex-video widescreen'/>");
jQuery( 'iframe[src*="vimeo.com"]').wrap("<div class='flex-video widescreen vimeo'/>");

jQuery(document).foundation();

// Joyride demo
$('#start-jr').on('click', function() {
  $(document).foundation('joyride','start');
});


$(window).bind(' load resize orientationChange ', function () {
   var footer = $("#footer-container");
   var pos = footer.position();
   var height = $(window).height();
   height = height - pos.top;
   height = height - footer.height() -1;

   function stickyFooter() {
     footer.css({
         'margin-top': height + 'px'
     });
   }

   if (height > 0) {
     stickyFooter();
   }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXgtdmlkZW8uanMiLCJpbml0LWZvdW5kYXRpb24uanMiLCJqb3lyaWRlLWRlbW8uanMiLCJvZmZDYW52YXMuanMiLCJzdGlja3lmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmb3VuZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KCAnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbVwiXScpLndyYXAoXCI8ZGl2IGNsYXNzPSdmbGV4LXZpZGVvIHdpZGVzY3JlZW4nLz5cIik7XG5qUXVlcnkoICdpZnJhbWVbc3JjKj1cInZpbWVvLmNvbVwiXScpLndyYXAoXCI8ZGl2IGNsYXNzPSdmbGV4LXZpZGVvIHdpZGVzY3JlZW4gdmltZW8nLz5cIik7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbiIsIi8vIEpveXJpZGUgZGVtb1xuJCgnI3N0YXJ0LWpyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oJ2pveXJpZGUnLCdzdGFydCcpO1xufSk7IiwiIiwiXG4kKHdpbmRvdykuYmluZCgnIGxvYWQgcmVzaXplIG9yaWVudGF0aW9uQ2hhbmdlICcsIGZ1bmN0aW9uICgpIHtcbiAgIHZhciBmb290ZXIgPSAkKFwiI2Zvb3Rlci1jb250YWluZXJcIik7XG4gICB2YXIgcG9zID0gZm9vdGVyLnBvc2l0aW9uKCk7XG4gICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcG9zLnRvcDtcbiAgIGhlaWdodCA9IGhlaWdodCAtIGZvb3Rlci5oZWlnaHQoKSAtMTtcblxuICAgZnVuY3Rpb24gc3RpY2t5Rm9vdGVyKCkge1xuICAgICBmb290ZXIuY3NzKHtcbiAgICAgICAgICdtYXJnaW4tdG9wJzogaGVpZ2h0ICsgJ3B4J1xuICAgICB9KTtcbiAgIH1cblxuICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgc3RpY2t5Rm9vdGVyKCk7XG4gICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
